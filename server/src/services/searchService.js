const { Card, User } = require('../../db/models');
const aiService = require('./AIService');

class SearchService {
  async smartSearch(query) {
    try {
      // 1. Оптимизированный запрос к БД с выборкой только нужных полей
      const allCards = await Card.findAll({
        attributes: ['id', 'name', 'price', 'condition'],
        include: [
          {
            model: User,
            as: 'seller',
            attributes: ['city'],
          },
        ],
        raw: true,
        nest: true, // Для правильной вложенности seller.city
      });

      // 2. Упрощенный и более эффективный промпт
      const prompt = `
        Найди карты MTG по запросу: "${query}"
        Учитывай:
        1. Совпадение в названии
        2. Цену (если в запросе есть числа)
        3. Состояние карты
        4. Город продавца

        Данные карт:
        ${allCards
          .map(
            (c) => `ID:${c.id} "${c.name}" ${c.price}р ${c.condition} ${c.seller.city}`,
          )
          .join('\n')}

        Ответ: только массив ID в формате [1,2,3]
      `;

      // 3. Отправка запроса с обработкой ошибок
      const response = await aiService.chatCompletions([
        { role: 'system', content: 'Ты помогаешь находить карты MTG по параметрам' },
        { role: 'user', content: prompt },
      ]);

      // 4. Безопасный парсинг ответа
      const matchedIds = this.parseResponse(response.content);
      return allCards.filter((card) => matchedIds.includes(card.id));
    } catch (error) {
      console.error('Search error:', error);
      return []; // Возвращаем пустой массив при ошибках
    }
  }

  // Метод для безопасного парсинга ответа AI
  parseResponse(content) {
    try {
      // Пытаемся найти JSON в ответе
      const jsonMatch = content.match(/\[[\d,\s]*\]/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } catch (e) {
      console.warn('Failed to parse AI response:', content);
      return [];
    }
  }
}

module.exports = new SearchService();
