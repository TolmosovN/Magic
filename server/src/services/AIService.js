const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

class AIService {
  #accessToken;
  #baseUrl;
  #authKey;
  #client;

  constructor(authKey) {
    if (!authKey) {
      throw new Error('SBER_AUTH_KEY is required');
    }

    this.#accessToken = '';
    this.#baseUrl = 'https://gigachat.devices.sberbank.ru/api/v1';
    this.#authKey = authKey;

    this.#client = axios.create({
      baseURL: this.#baseUrl,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      timeout: 10000, 
    });

    this.#setupInterceptors();
  }

  #setupInterceptors() {

    this.#client.interceptors.request.use(async (config) => {
      if (!this.#accessToken) {
        await this.updateAccessToken();
      }
      config.headers.Authorization = `Bearer ${this.#accessToken}`;
      return config;
    });

    // Response interceptor
    this.#client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (error.response?.status === 401 && !prevRequest.sent) {
          prevRequest.sent = true;
          await this.updateAccessToken();
          prevRequest.headers.Authorization = `Bearer ${this.#accessToken}`;
          return this.#client(prevRequest);
        }
        return Promise.reject(error);
      },
    );
  }

  async getModels() {
    try {
      const response = await this.#client.get('/models');
      return response.data;
    } catch (error) {
      console.error('Error getting models:', error);
      throw new Error('Failed to get models');
    }
  }

  async updateAccessToken() {
    try {
      const rqUID = uuidv4();
      const response = await axios.post(
        'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
        'scope=GIGACHAT_API_PERS',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            RqUID: rqUID,
            Authorization: `Basic ${this.#authKey}`,
          },
          timeout: 5000,
        },
      );

      if (!response.data.access_token) {
        throw new Error('No access token in response');
      }

      this.#accessToken = response.data.access_token;
      return this.#accessToken;
    } catch (error) {
      console.error('Error updating access token:', error);
      throw new Error('Failed to update access token');
    }
  }

  async chatCompletions(messages) {
    if (!messages || !Array.isArray(messages)) {
      throw new Error('Messages must be an array');
    }

    try {
      const response = await this.#client.post('/chat/completions', {
        model: 'GigaChat-2',
        messages,
        temperature: 1.7,
        stream: false,
      });

      return {
        content: response.data.choices[0]?.message?.content || '',
        createdAt: new Date(),
      };
    } catch (error) {
      console.error('Error in chat completions:', error);
      throw new Error('Failed to get chat completions');
    }
  }
}

if (!process.env.SBER_AUTH_KEY) {
  throw new Error('SBER_AUTH_KEY is not defined in environment variables');
}

const aiService = new AIService(process.env.SBER_AUTH_KEY);
module.exports = aiService;
