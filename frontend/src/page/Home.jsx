// src/page/Home.jsx
import React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import ImageCarousel from '../components/ImageCarousel';
const Home = () => {
  return (
    <Layout>
      <HomeHero />
      <ImageCarousel />

    </Layout>
  );
};

export default Home;
