// LandingPageStyles.js

import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
`;

export const Hero = styled.div`
  background-image: url('/src/assets/img/bank-tree.jpeg');
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

export const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 100%;
  background: var(--background-light);
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

export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;

  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

export const Features = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

export const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid var(--accent-color);
  border-radius: 50%;
  padding: 1rem;
`;

export const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

export const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

