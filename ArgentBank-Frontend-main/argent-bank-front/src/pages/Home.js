import React from 'react';
import styled from 'styled-components';
import iconChat from '../assets/icon-chat.png';
import iconMoney from '../assets/icon-money.png';
import iconSecurity from '../assets/icon-security.png';
import bankTree from '../assets/bank-tree.jpeg';

const Main = styled.main`
  flex: 1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
`;

const Hero = styled.div`
  background-image: url(${bankTree});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;

  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

const Features = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
  text-align: center;
  max-width: 40%;

  @media (max-width: 920px) {
    max-width: 100%;
  }
`;

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p`
  font-size: 1rem;
`;

function Home() {
  return (
    <Main>
      <Hero>
        <HeroContent>
          <h2 className="sr-only">Promoted Content</h2>
          <Subtitle>No fees.</Subtitle>
          <Subtitle>No minimum deposit.</Subtitle>
          <Subtitle>High interest rates.</Subtitle>
          <Text>Open a savings account with Argent Bank today!</Text>
        </HeroContent>
      </Hero>
      <Features>
        <h2 className="sr-only">Features</h2>
        <FeatureItem>
          <FeatureIcon src={iconChat} alt="Chat Icon" />
          <FeatureTitle>You are our #1 priority</FeatureTitle>
          <FeatureText>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src={iconMoney} alt="Money Icon" />
          <FeatureTitle>More savings means higher rates</FeatureTitle>
          <FeatureText>
            The more you save with us, the higher your interest rate will be!
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src={iconSecurity} alt="Security Icon" />
          <FeatureTitle>Security you can trust</FeatureTitle>
          <FeatureText>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </FeatureText>
        </FeatureItem>
      </Features>
    </Main>
  );
}

export default Home;