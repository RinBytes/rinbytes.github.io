import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Connect through my linktree',
    Svg: require('@site/static/img/connect.svg').default,
    description: (
      <>
        My linktree is a collection of links to my social media profiles, blogs, and other online presence.
        <a href='linktr.ee/rinbytes'>linktr.ee/rinbytes</a>
      </>
    ),
  },
  {
    title: 'Get involved with Women in M365',
    Svg: require('@site/static/img/women.svg').default,
    description: (
      <>
        The Women in M365 community is a safe place to make connections, learn, and grow.
        We also have a book club!
      </>
    ),
  },
  {
    title: 'Learn and Grow',
    Svg: require('@site/static/img/grow.svg').default,
    description: (
      <>
        Gain acceess to my blogs, speaking engagements, and other resources for free!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
