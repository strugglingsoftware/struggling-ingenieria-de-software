import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FaYoutube, FaGithub, FaBook } from 'react-icons/fa';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Guías Completas',
    icon: <FaBook style={{ color: 'var(--ifm-color-primary)' }} />,
    iconClass: 'book-icon',
    description: (
      <>
        Descubre todas las guías sobre ingeniería de software: desde la 
        creación de ideas hasta el despliegue. Todo para 
        desarrolladores que quieren mejorar sus habilidades.
      </>
    ),
    link: '/documentos',
    linkText: 'Explorar',
    internal: true
  },
  {
    title: 'Canal de YouTube',
    icon: <FaYoutube style={{ color: '#ff0000', backgroundColor: 'white', borderRadius: '50%', padding: '10px' }} />, 
    iconClass: 'youtube-icon',
    description: (
      <>
        Suscríbete a mi canal donde comparto tutoriales, tips y experiencias 
        reales en el desarrollo de software. Contenido práctico para 
        programadores en español.
      </>
    ),
    link: 'https://www.youtube.com/@StrugglingSoftware',
    linkText: 'Ver canal',
    external: true
  },
  {
    title: 'Código en GitHub',
    icon: <FaGithub style={{ color: '#24292e' }} />,
    iconClass: 'github-icon',
    description: (
      <>
        Explora mis proyectos de código abierto, ejemplos prácticos y 
        recursos que uso en mis tutoriales. Todo disponible para la 
        comunidad de desarrolladores.
      </>
    ),
    link: 'https://github.com/strugglingsoftware',
    linkText: 'Ver repositorios',
    external: true
  },
];

function Feature({icon, iconClass, title, description, link, linkText, external, internal}) {
  const linkUrl = internal ? useBaseUrl(link) : link;
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>
          <div className={iconClass}>
            {icon}
          </div>
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && (
          <div className={styles.featureButton}>
            <a 
              href={linkUrl} 
              className="button button--primary button--md"
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {linkText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
