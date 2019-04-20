import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { Link } from 'gatsby';

const MicroBlogTemplate = ({ data, pageContext }) => {
    const {
        title: siteTitle,
        subtitle: siteSubtitle
    } = data.site.siteMetadata;

    const {
        currentPage,
        hasNextPage,
        hasPrevPage,
        prevPagePath,
        nextPagePath
    } = pageContext;

    const { edges } = data.allMarkdownRemark;
    const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

    return (
        <Layout title={pageTitle} description={siteSubtitle}>
            <Page>
                <div className={'home-button-wrapper'}>
                  <Link className={'home-button'} to="/">Home</Link>
                </div>
          <h2>Rose’s little nerd hacks and tricks <span role="img" aria-label=":nerdface:">🤓</span></h2>
                <Feed edges={edges} />
                <Pagination
                    prevPagePath={prevPagePath}
                    nextPagePath={nextPagePath}
                    hasPrevPage={hasPrevPage}
                    hasNextPage={hasNextPage}
                />
            </Page>
        </Layout>
    );
};

export const query = graphql`
  query MicroblogTemplate($postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
  }
`;

export default MicroBlogTemplate;
