import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../../service/axiosInstance";

const SearchBar = ({ setCards }) => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Введите поисковый запрос");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post(
        "/search/smart-search", // Убедитесь, что путь совпадает с серверным
        { query },
      );

      if (response.data) {
        setCards(response.data);
      } else {
        throw new Error("Пустой ответ от сервера");
      }
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message ||
        err.message ||
        "Ошибка поиска. Попробуйте снова.";
      setError(errorMessage);
      console.error("Search error details:", {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Например: дешёвые артефакты в Москве"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !query.trim()}>
          {isLoading ? "Поиск..." : "Найти"}
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default SearchBar;
