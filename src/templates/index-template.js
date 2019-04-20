import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';

const IndexTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    title: pageTitle,
  } = data.markdownRemark.frontmatter;

  const { html: pageBody } = data.markdownRemark;

  const metaDescription = siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    markdownRemark(fields: { slug: { eq: "index" } }) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

export default IndexTemplate;
