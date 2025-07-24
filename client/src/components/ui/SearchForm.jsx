import React, { useState } from 'react'

export default function SearchForm({cards, setCards}) {

    const [filters, setFilters] = useState({
    name: '',
    minPrice: '',
    maxPrice: '',
    condition: ''
  });

  // Функция применения фильтров
  const applyFilters = () => {
    let filteredCards = [...cards];

    // Фильтр по имени
    if (filters.name) {
      filteredCards = filteredCards.filter(card => 
        card.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    // Фильтр по цене
    if (filters.minPrice) {
      filteredCards = filteredCards.filter(card => card.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      filteredCards = filteredCards.filter(card => card.price <= Number(filters.maxPrice));
    }

    // Фильтр по состоянию
    if (filters.condition) {
      filteredCards = filteredCards.filter(card => card.condition === filters.condition);
    }

    setCards(filteredCards);
  };

  // Обработчики изменения фильтров
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Сброс фильтров
  const resetFilters = () => {
    setFilters({
      name: '',
      minPrice: '',
      maxPrice: '',
      condition: ''
    });
    setCards(cards);
  };

  return (
    <div>
      <div className="filters" style={{marginBottom: '15px'}}>
        <div>
          <label>Название карты:</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Поиск по названию"
          />
        </div>
        
        <div>
          <label>Минимальная цена:</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
        </div>
        
        <div>
          <label>Максимальная цена:</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>
        
        <div>
          <label>Состояние:</label>
          <select
            name="condition"
            value={filters.condition}
            onChange={handleFilterChange}
          >
            <option value="">Все</option>
            <option value="Новое">Новое</option>
            <option value="Отличное">Отличное</option>
            <option value="Хорошее">Хорошее</option>
            <option value="Удовлетворительное">Удовлетворительное</option>
          </select>
        </div>
        
        <button onClick={applyFilters}>Применить фильтры</button>
        <button onClick={resetFilters}>Сбросить</button>
      </div>
      
      <div className="card-list">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image_url} alt={card.name} />
            <h3>{card.name}</h3>
            <p>Цена: {card.price} ₽</p>
            <p>Состояние: {card.condition}</p>
            <p>{card.isSold ? 'Продана' : 'Доступна'}</p>
          </div>
        ))}
      </div>
    </div>)
}
