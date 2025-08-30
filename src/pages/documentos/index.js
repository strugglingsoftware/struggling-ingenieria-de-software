import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import { FaBook, FaRocket, FaGraduationCap, FaCode, FaLightbulb, FaTools } from 'react-icons/fa';
import AdvancedSearch from '@site/src/components/AdvancedSearch';
import styles from './documentos.module.css';

const BooksList = [
  {
    title: 'De la Idea al Despliegue',
    description: 'El proceso completo para transformar una idea en un proyecto de software desplegado y funcionando.',
    icon: <FaRocket />,
    link: '/de-la-idea-al-despliegue/introduccion-al-desarrollo-de-software',
    status: 'Disponible',
    chapters: 'Guía completa',
    level: 'Principiante a Intermedio',
    color: '#4A90E2',
    topics: ['Planificación', 'Desarrollo', 'Testing', 'Despliegue']
  },
  {
    title: 'Arquitecturas de Software',
    description: 'Guía completa para entender y aplicar las arquitecturas de software.',
    icon: <FaRocket />,
    link: '/arquitecturas-de-software/que-es-la-arquitectura-de-software',
    status: 'Disponible',
    chapters: 'Guía completa',
    level: 'Principiante a Intermedio',
    color: '#7B68EE',
    topics: ['Arquitectura', 'Diseño', 'Patrones', 'Seguridad']
  },
  {
    title: 'Ecosistema de Roles en TI',
    description: 'Una guía completa para entender los diferentes roles en la industria de la tecnología, desde desarrolladores hasta líderes de equipo.',
    icon: <FaGraduationCap />,
    link: '/ecosistema-de-roles-en-informatica/guia-introductoria-a-roles-en-tecnologia',
    status: 'Disponible',
    chapters: 'Guía completa',
    level: 'Principiante a Intermedio',
    color: '#50C878',
    topics: ['Roles', 'Carrera', 'Seniority', 'Estructura']
  }
];

function BookCard({ title, description, icon, link, status, chapters, level, color, topics }) {
  return (
    <div className={clsx('col', styles.bookCard)}>
      <div className={styles.card} style={{ 
        borderColor: color,
        borderWidth: '1px',
        borderStyle: 'solid'
      }}>
        {/* Header with icon, title and status */}
        <div className={styles.cardHeader}>
          <div className={styles.headerContent}>
            <div className={styles.bookIcon} style={{ color: color }}>
              {icon}
            </div>
            <div className={styles.bookInfo}>
              <Heading as="h3" className={styles.bookTitle}>{title}</Heading>
            </div>
            <div className={styles.bookStatus} style={{ 
              backgroundColor: `${color}15`,
              color: color,
              border: `1px solid ${color}30`
            }}>
              {status}
            </div>
          </div>
        </div>
        
        {/* Divider line */}
        <div className={styles.cardDivider}></div>
        
        {/* Content section with description and meta */}
        <div className={styles.cardBody}>
          <div className={styles.contentRow}>
            <span className={styles.contentLabel}>Descripción</span>
            <span className={styles.contentValue}>{description}</span>
          </div>
          
          <div className={styles.contentRow}>
            <span className={styles.contentLabel}>Capítulos</span>
            <span className={styles.contentValue}>{chapters}</span>
          </div>
          
          <div className={styles.contentRow}>
            <span className={styles.contentLabel}>Nivel</span>
            <div className={styles.levelContainer}>
              <span className={styles.contentValue}>{level}</span>
              <span className={styles.levelTag} style={{ 
                backgroundColor: `${color}15`,
                color: color,
                border: `1px solid ${color}30`
              }}>
                {level === 'Principiante a Intermedio' ? 'Intermedio' : level}
              </span>
            </div>
          </div>
          
          <div className={styles.contentRow}>
            <span className={styles.contentLabel}>Temas</span>
            <div className={styles.topicsContainer}>
              {topics.map((topic, index) => (
                <span 
                  key={index} 
                  className={styles.topicTag} 
                  style={{ 
                    backgroundColor: `${color}10`,
                    color: color,
                    border: `1px solid ${color}25`
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer with button */}
        <div className={styles.cardFooter}>
          <Link
            className={styles.readButton}
            to={link}
            style={{ 
              backgroundColor: color,
              borderColor: color,
              boxShadow: `0 2px 8px ${color}25`
            }}>
            <FaBook className={styles.buttonIcon} />
            <span>Empezar a leer</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ title, description, icon, link, external, color, comingSoon }) {
  return (
    <div className={clsx('col col--4', styles.resourceCard)}>
      <div className={styles.card}>
        <div className={styles.resourceIcon} style={{ 
          color: color,
          background: `linear-gradient(135deg, ${color}15 0%, ${color}25 100%)`,
          borderRadius: '50%',
          padding: '1rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {icon}
        </div>
        <Heading as="h4" className={styles.resourceTitle}>{title}</Heading>
        <p className={styles.resourceDescription}>{description}</p>
        
        <div className={styles.cardFooter}>
          {comingSoon ? (
            <span className="button button--secondary button--md" disabled>
              Próximamente
            </span>
          ) : (
            <Link
              className="button button--outline button--primary button--md"
              to={link}
              style={{
                borderColor: color,
                color: color,
                background: `linear-gradient(135deg, ${color}05 0%, ${color}10 100%)`
              }}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
              {external ? 'Ver en GitHub' : title === 'Libros Recomendados' ? 'Ver libros' : 'Explorar'}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function DocumentosPage() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Documentos y Libros"
      description="Todos los libros, guías y recursos de Struggling Software en un solo lugar">
      
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            📚 Biblioteca de Documentos
          </Heading>
          <p className="hero__subtitle">
            Todos mis libros, guías y recursos de ingeniería de software
          </p>
        </div>
      </header>

      <main>
        <section className={styles.booksSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className={styles.headerIcon}>🚀</div>
              <Heading as="h2">Guías de Desarrollo</Heading>
              <p>Domina la ingeniería de software con nuestras guías paso a paso</p>
              <div className={styles.headerStats}>
                <span className={styles.statItem}>
                  <span className={styles.statNumber}>{BooksList.length}</span>
                  <span className={styles.statLabel}>Guías disponibles</span>
                </span>
                <span className={styles.statItem}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Gratuitas</span>
                </span>
              </div>
            </div>
            
            <AdvancedSearch guides={BooksList} />
            
            <div className={styles.guidesGrid}>
              {BooksList.map((book, idx) => (
                <BookCard key={idx} {...book} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
