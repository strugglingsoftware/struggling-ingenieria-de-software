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
    color: '#28a745',
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
    color: '#28a745',
    topics: ['Arquitectura', 'Diseño', 'Patrones', 'Seguridad']
  }
];

function BookCard({ title, description, icon, link, status, chapters, level, color, topics }) {
  return (
    <div className={clsx('col col--6', styles.bookCard)}>
      <div className={styles.card} style={{ borderColor: color }}>
        <div className={styles.cardHeader} style={{ backgroundColor: color }}>
          <div className={styles.bookIcon}>
            {icon}
          </div>
          <div className={styles.bookInfo}>
            <Heading as="h3" className={styles.bookTitle}>{title}</Heading>
            <span className={styles.bookStatus}>{status}</span>
          </div>
        </div>
        
        <div className={styles.cardBody}>
          <p className={styles.bookDescription}>{description}</p>
          
          <div className={styles.bookMeta}>
            <div className={styles.metaItem}>
              <strong>Capítulos:</strong> {chapters}
            </div>
            <div className={styles.metaItem}>
              <strong>Nivel:</strong> {level}
            </div>
          </div>
          
          <div className={styles.bookTopics}>
            <strong>Temas:</strong>
            <div className={styles.topicTags}>
              {topics.map((topic, index) => (
                <span key={index} className={styles.topicTag} style={{ backgroundColor: `${color}20`, color: color }}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.cardFooter}>
          <Link
            className="button button--primary button--lg"
            to={link}
            style={{ backgroundColor: color, borderColor: color }}>
            <FaBook /> Leer ahora
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
        <div className={styles.resourceIcon} style={{ color: color }}>
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
              <Heading as="h2">📖 Mis Guías</Heading>
              <p>Guías completas para mejorar tus habilidades en desarrollo de software</p>
            </div>
            
            <AdvancedSearch guides={BooksList} />
            
            <div className="row">
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
