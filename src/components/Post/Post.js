import React from 'react';
import { Link } from 'gatsby';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const {
    tags,
    title,
    date
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>
      <div className={'home-button-wrapper'}>
        <Link className={'home-button'} to="/">Home</Link>
        <Link className={'home-button'} to="/blog">Blog</Link>
      </div>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
      </div>
    </div>
  );
};

export default Post;
