import React from 'react';
import { Link } from 'gatsby';
import styles from './Feed.module.scss';

const Feed = ({ edges }) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
      </div>
    ))}
  </div>
);

export default Feed;
