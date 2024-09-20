import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import FeaturesList from '../components/FeaturesList';

const Main = styled.main`
  flex: 1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
`;

function Home() {
  return (
    <Main>
      <Hero />
      <FeaturesList />
    </Main>
  );
}

export default Home;