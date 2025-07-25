const searchService = require('../services/searchService');

class SearchController {
  async smartSearch(req, res) {
    try {
      const { query } = req.body;
      const cards = await searchService.smartSearch(query);
      res.json(cards);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

module.exports = new SearchController();
