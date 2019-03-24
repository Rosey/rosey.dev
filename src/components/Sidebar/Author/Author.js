import React from 'react';
import { Link } from 'gatsby';
import styles from './Author.module.scss';
let renderCount = 0;

const Author = function ({ author, isIndex, title}) {
  renderCount++;
  return (
    <div className={styles['author']} data-render-count={renderCount}>
      { isIndex ? (
        <h1 className={styles['author__title']}>
          <Link className={styles['author__title-link']} to="/">
          {title.split('').map(function (char) {
            return (<span>{char}</span>);
          })}
          </Link>
        </h1>
      ) : (
        <h2 className={styles['author__title']}>
          <Link className={styles['author__title-link']} to="/">
            {title.split('').map(function (char) {
              return (<span>{char}</span>);
            })}
          </Link>
        </h2>
      )}
      <p className={styles['author__subtitle']}>{author.bio}</p>
    </div>
  );
}

export default Author;
