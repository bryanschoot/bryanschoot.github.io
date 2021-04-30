import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Tutorials',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Druk op de onderstaande knop en volg verchillende Tutorials, 
        allemaal geschreven en uitgevoerd tijdens het afstuderen.
      </>
    ),
    button: {
      text: 'Naar Turorials ➜',
      link: '/docs/intro'
    }
  },
  {
    title: 'Blog',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Druk op de onderstaande knop om verschillende Blog posts te lezen 
        die geschreven zijn tijdens de afstudeerstage.
      </>
    ),
    button: {
      text: 'Naar Blogs ➜',
      link: '/blog'
    }
  },
];

function Feature({Svg, title, description, button}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center">
      <div className={styles.buttons}>
          <Link
            className="button button--primary button--md"
            to={button.link}>
            {button.text} 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-content-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
