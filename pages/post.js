import React from 'react';
import Layout from '../components/MyLayout';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
    </Layout>
  );
};

export default Page;
