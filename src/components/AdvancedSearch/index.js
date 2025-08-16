import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch, FaTimes, FaBook, FaExternalLinkAlt } from 'react-icons/fa';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Índice de contenido de las guías para búsqueda
const GUIDE_CONTENT_INDEX = [
  {
    guide: 'Ingeniería de Software',
    path: '/ingenieria-software/creacion-idea',
    type: 'chapter',
    title: 'La Chispa de la Idea: Conceptualización y Viabilidad',
    content: 'conceptualización viabilidad idea innovadora requerimiento empresarial problema cliente mercado competencia análisis build vs buy construir comprar viabilidad técnica económica operativa TCO ROI retorno inversión',
    level: 'Intermedio a Avanzado'
  },
  {
    guide: 'De la Idea al Despliegue',
    path: '/de-la-idea-al-despliegue/guia-completa',
    type: 'guide',
    title: 'Guía Completa: De la Idea al Despliegue',
    content: 'planificación análisis diseño desarrollo pruebas despliegue mantenimiento arquitectura monolito microservicios bases datos SQL NoSQL SOLID patrones diseño MVC singleton observer factory estrategia seguridad autenticación autorización encriptación validación git control versiones testing unitarias integración end-to-end TDD devops CI/CD automatización scripts linting formateo rendimiento escalabilidad big O lazy loading profiling refactorización deuda técnica feedback usuarios',
    level: 'Principiante a Intermedio'
  },
  {
    guide: 'De la Idea al Despliegue',
    path: '/de-la-idea-al-despliegue/guia-completa#cómo-planificar-un-proyecto-de-software',
    type: 'section',
    title: 'Cómo Planificar un Proyecto de Software',
    content: 'planificación proyecto software MVP producto mínimo viable requerimientos funcionales no funcionales casos uso historias usuario metodología cascada ágil tecnologías stack lenguajes frameworks bases datos roles equipo desarrollador diseñador tester scrum master product owner',
    level: 'Principiante a Intermedio'
  },
  {
    guide: 'De la Idea al Despliegue',
    path: '/de-la-idea-al-despliegue/guia-completa#diseño-del-software-de-la-idea-a-la-arquitectura',
    type: 'section',
    title: 'Diseño del Software: De la Idea a la Arquitectura',
    content: 'arquitectura monolítica microservicios serverless infraestructura cloud AWS GCP kubernetes docker bases datos SQL NoSQL MySQL PostgreSQL MongoDB normalización desnormalización SOLID principios patrones diseño MVC singleton observer factory seguridad autenticación OAuth JWT HTTPS',
    level: 'Intermedio a Avanzado'
  },
  {
    guide: 'De la Idea al Despliegue',
    path: '/de-la-idea-al-despliegue/guia-completa#desarrollo-del-software-construyendo-tu-aplicación',
    type: 'section',
    title: 'Desarrollo del Software: Construyendo tu Aplicación',
    content: 'desarrollo código estructura proyecto organización componentes servicios routes utils react javascript python java buenas prácticas código limpio modularidad DRY git branches pull requests commit linting ESLint Prettier automatización scripts CI/CD GitHub Actions rendimiento Big O lazy loading profiling',
    level: 'Intermedio'
  },
  {
    guide: 'De la Idea al Despliegue',
    path: '/de-la-idea-al-despliegue/guia-completa#pruebas-de-software-asegurando-la-calidad',
    type: 'section',
    title: 'Pruebas de Software: Asegurando la Calidad',
    content: 'testing pruebas unitarias integración end-to-end E2E TDD test driven development cypress playwright selenium automatización mocks calidad código coverage cobertura bugs errores QA quality assurance',
    level: 'Intermedio'
  },
  {
    guide: 'De la Idea al Despliegue',
    path: '/de-la-idea-al-despliegue/guia-completa#despliegue-en-ambientes-cómo-y-dónde-subir-tu-aplicación',
    type: 'section',
    title: 'Despliegue en Ambientes',
    content: 'despliegue deployment ambientes desarrollo QA staging producción CI/CD pipelines automatización docker kubernetes serverless AWS heroku netlify vercel infraestructura devops',
    level: 'Intermedio a Avanzado'
  },
  {
    guide: 'De la Idea al Despliegue',
    path: '/de-la-idea-al-despliegue/guia-completa#mantención-y-mejora-continua',
    type: 'section',
    title: 'Mantención y Mejora Continua',
    content: 'mantenimiento feedback usuarios analytics hotjar google analytics sentry monitoreo errores refactorización deuda técnica dependabot renovate automatización actualizaciones performance optimización',
    level: 'Intermedio a Avanzado'
  }
];

const AdvancedSearch = ({ guides = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Combinar guías y contenido indexado
  const allSearchableContent = useMemo(() => {
    const guideItems = guides.map(guide => ({
      type: 'guide',
      title: guide.title,
      description: guide.description,
      path: guide.link,
      content: `${guide.title} ${guide.description} ${guide.topics.join(' ')} ${guide.level}`.toLowerCase(),
      guide: guide.title,
      level: guide.level,
      topics: guide.topics
    }));

    const contentItems = GUIDE_CONTENT_INDEX.map(item => ({
      ...item,
      content: `${item.title} ${item.content}`.toLowerCase()
    }));

    return [...guideItems, ...contentItems];
  }, [guides]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const term = searchTerm.toLowerCase();
    
    const results = allSearchableContent.filter(item => {
      return item.content.includes(term) || 
             item.title.toLowerCase().includes(term) ||
             (item.description && item.description.toLowerCase().includes(term));
    }).slice(0, 8); // Limitar a 8 resultados

    setSearchResults(results);
  }, [searchTerm, allSearchableContent]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  const getResultIcon = (type) => {
    switch(type) {
      case 'guide': return <FaBook className={styles.resultIcon} />;
      case 'chapter': return <FaBook className={styles.resultIcon} />;
      case 'section': return <FaExternalLinkAlt className={styles.resultIcon} />;
      default: return <FaBook className={styles.resultIcon} />;
    }
  };

  const getResultTypeLabel = (type) => {
    switch(type) {
      case 'guide': return 'Guía completa';
      case 'chapter': return 'Capítulo';
      case 'section': return 'Sección';
      default: return 'Contenido';
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputWrapper}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Buscar en todas las guías y contenido..."
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
        <div className={styles.searchResults}>
          <div className={styles.searchInfo}>
            {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} para "<strong>{searchTerm}</strong>"
          </div>
          
          {searchResults.length > 0 && (
            <div className={styles.resultsList}>
              {searchResults.map((result, index) => (
                <Link 
                  key={index} 
                  to={result.path}
                  className={styles.resultItem}
                >
                  <div className={styles.resultHeader}>
                    {getResultIcon(result.type)}
                    <div className={styles.resultMeta}>
                      <span className={styles.resultGuide}>{result.guide}</span>
                      <span className={styles.resultType}>{getResultTypeLabel(result.type)}</span>
                    </div>
                  </div>
                  <h4 className={styles.resultTitle}>{result.title}</h4>
                  {result.description && (
                    <p className={styles.resultDescription}>{result.description}</p>
                  )}
                  {result.level && (
                    <span className={styles.resultLevel}>Nivel: {result.level}</span>
                  )}
                </Link>
              ))}
            </div>
          )}
          
          {searchResults.length === 0 && (
            <div className={styles.noResults}>
              <p>No se encontraron resultados para "{searchTerm}"</p>
              <p className={styles.searchTips}>
                💡 Prueba con términos como: "arquitectura", "testing", "despliegue", "git", "bases de datos"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;
