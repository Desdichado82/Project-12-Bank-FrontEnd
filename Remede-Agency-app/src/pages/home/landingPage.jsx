import GlobalStyle from '../../components/styles/globalStyles';
import {
  Main,
  Hero,
  HeroContent,
  Subtitle,
  Text,
  Features,
  FeatureItem,
  FeatureIcon,
  FeatureItemTitle,
} from '../Home/LandingStyles';




// Import images
import chatIcon from '../../assets/img/icon-chat.png';
import moneyIcon from '../../assets/img/icon-money.png';
import securityIcon from '../../assets/img/icon-security.png';

const LandingPage = () => {
  return (
    <Main>
      <GlobalStyle />
      <Hero>
        <HeroContent>
          <h2 className="sr-only">Promoted Content</h2>
          <Subtitle>No fees.</Subtitle>
          <Subtitle>No minimum deposit.</Subtitle>
          <Subtitle>High-interest rates.</Subtitle>
          <Text>Open a savings account with Argent Bank today!</Text>
        </HeroContent>
      </Hero>
      <Features>
        <h2 className="sr-only">Features</h2>
        <FeatureItem>
          <FeatureIcon src={chatIcon} alt="Chat Icon" />
          <FeatureItemTitle>You are our #1 priority</FeatureItemTitle>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src={moneyIcon} alt="Money Icon" />
          <FeatureItemTitle>More savings means higher rates</FeatureItemTitle>
          <p>The more you save with us, the higher your interest rate will be!</p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src={securityIcon} alt="Security Icon" />
          <FeatureItemTitle>Security you can trust</FeatureItemTitle>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </FeatureItem>
      </Features>
    </Main>
  );
};

export default LandingPage;
