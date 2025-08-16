import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import styles from './styles.module.css';

const GuideSearch = ({ guides, onFilteredResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!searchTerm.trim()) {
      onFilteredResults(guides);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const term = searchTerm.toLowerCase();
    
    const filteredGuides = guides.filter(guide => {
      return (
        guide.title.toLowerCase().includes(term) ||
        guide.description.toLowerCase().includes(term) ||
        guide.topics.some(topic => topic.toLowerCase().includes(term)) ||
        guide.level.toLowerCase().includes(term)
      );
    });

    onFilteredResults(filteredGuides);
  }, [searchTerm, guides, onFilteredResults]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputWrapper}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Buscar guías por título, descripción, temas o nivel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className={styles.clearButton}
            aria-label="Limpiar búsqueda"
          >
            <FaTimes />
          </button>
        )}
      </div>
      {isSearching && searchTerm && (
        <div className={styles.searchInfo}>
          Buscando: "<strong>{searchTerm}</strong>"
        </div>
      )}
    </div>
  );
};

export default GuideSearch;
