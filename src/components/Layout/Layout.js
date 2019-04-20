import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link href="https://fonts.googleapis.com/css?family=Fira+Mono" rel="stylesheet"/>
    </Helmet>
    {children}
  </div>
);

export default Layout;
