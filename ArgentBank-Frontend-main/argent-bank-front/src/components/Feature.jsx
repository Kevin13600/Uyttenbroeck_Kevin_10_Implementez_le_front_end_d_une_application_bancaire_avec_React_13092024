import React from 'react';
import styled from 'styled-components';

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

function Feature({ icon, title, description }) {
  return (
    <FeatureItem>
      <FeatureIcon src={icon} alt={`${title} Icon`} />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureText>{description}</FeatureText>
    </FeatureItem>
  );
}

export default Feature;