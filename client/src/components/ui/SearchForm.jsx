import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchForm({ cards = [], setCards }) {
  const [filters, setFilters] = useState({
    name: '',
    minPrice: '',
    maxPrice: '',
    condition: '',
    city: ''
  });

  const [availableCities, setAvailableCities] = useState([]);
  const [originalCards, setOriginalCards] = useState([]);

  // Инициализация оригинальных данных и списка городов
  useEffect(() => {
    setOriginalCards([...cards]);
    const cities = [...new Set(
      cards
        .map(card => card?.city)
        .filter(city => city != null && city.trim() !== '')
    )].sort();
    setAvailableCities(cities);
  }, [cards]);

  const applyFilters = () => {
    let filteredCards = [...originalCards];

    if (filters.name) {
      filteredCards = filteredCards.filter(card => 
        card?.name?.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.minPrice) {
      filteredCards = filteredCards.filter(card => 
        Number(card?.price || 0) >= Number(filters.minPrice)
      );
    }
    
    if (filters.maxPrice) {
      filteredCards = filteredCards.filter(card => 
        Number(card?.price || Infinity) <= Number(filters.maxPrice)
      );
    }

    if (filters.condition) {
      filteredCards = filteredCards.filter(card => 
        card?.condition === filters.condition
      );
    }

    if (filters.city) {
      filteredCards = filteredCards.filter(card => 
        card?.city && card.city.toLowerCase() === filters.city.toLowerCase()
      );
    }

    setCards(filteredCards);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      name: '',
      minPrice: '',
      maxPrice: '',
      condition: '',
      city: ''
    });
    setCards([...originalCards]);
  };

  return (
    <div className="search-container">
      <div className="filters" style={{
        marginBottom: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '15px',
        padding: '15px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <div className="filter-group">
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Название карты:</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
            placeholder="Поиск по названию"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        
        <div className="filter-group">
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Цена от:</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
            min="0"
            placeholder="₽"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        
        <div className="filter-group">
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Цена до:</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            min="0"
            placeholder="₽"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        
        <div className="filter-group">
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Состояние:</label>
          <select
            name="condition"
            value={filters.condition}
            onChange={handleFilterChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              backgroundColor: 'white'
            }}
          >
            <option value="">Все состояния</option>
            <option value="Новое">Новое</option>
            <option value="Отличное">Отличное</option>
            <option value="Хорошее">Хорошее</option>
            <option value="Удовлетворительное">Удовлетворительное</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Город:</label>
          <select
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              backgroundColor: 'white'
            }}
          >
            <option value="">Все города</option>
            {availableCities.map((city, index) => (
              <option key={`${city}-${index}`} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="filter-actions" style={{ 
        marginBottom: '20px',
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={applyFilters}
          style={{
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Применить фильтры
        </button>
        <button 
          onClick={resetFilters}
          style={{
            padding: '10px 15px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Сбросить фильтры
        </button>
      </div>
      
      <div className="card-list" style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="card" 
            style={{ 
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            {card.image_url && (
              <img 
                src={card.image_url} 
                alt={card.name} 
                style={{ 
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                  marginBottom: '10px',
                  maxHeight: '200px',
                  objectFit: 'contain'
                }}
              />
            )}
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>{card.name}</h3>
            <p style={{ margin: '4px 0' }}><strong>Цена:</strong> {card.price} ₽</p>
            <p style={{ margin: '4px 0' }}><strong>Состояние:</strong> {card.condition}</p>
            {card.city && <p style={{ margin: '4px 0' }}><strong>Город:</strong> {card.city}</p>}
            <p style={{ 
              margin: '4px 0',
              color: card.isSold ? '#f44336' : '#4CAF50',
              fontWeight: 'bold'
            }}>
              {card.isSold ? 'Продана' : 'Доступна'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}