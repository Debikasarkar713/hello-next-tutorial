import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';

const PostLink = props => (
  <li>
    <Link href='/p/[id]' as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog </h1>
      <ul>
        <PostLink id='Hello-next.js' />
        <PostLink id='Learn-next.js' />
        <PostLink id='Deploy-next.js' />
      </ul>
    </Layout>
  );
}
