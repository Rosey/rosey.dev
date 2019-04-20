import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';

const NotFoundTemplate = ({ data }) => {
  const {
    title,
    subtitle
  } = data.site.siteMetadata;

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <div className={'home-button-wrapper'}>
        <Link className={'home-button'} to="/">Home</Link>
        <Link className={'home-button'} to="/blog">Blog</Link>
      </div>
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist.</p>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default NotFoundTemplate;
