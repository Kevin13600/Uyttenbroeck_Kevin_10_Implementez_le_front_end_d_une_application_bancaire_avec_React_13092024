import React from 'react';
import styled from 'styled-components';
import Feature from './Feature';
import iconChat from '../assets/icon-chat.webp';
import iconMoney from '../assets/icon-money.webp';
import iconSecurity from '../assets/icon-security.webp';

const FeaturesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const features = [
  {
    icon: iconChat,
    title: "You are our #1 priority",
    description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  },
  {
    icon: iconMoney,
    title: "More savings means higher rates",
    description: "The more you save with us, the higher your interest rate will be!"
  },
  {
    icon: iconSecurity,
    title: "Security you can trust",
    description: "We use top of the line encryption to make sure your data and money is always safe."
  }
];

function FeaturesList() {
  return (
    <FeaturesContainer>
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <Feature 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </FeaturesContainer>
  );
}

export default FeaturesList;