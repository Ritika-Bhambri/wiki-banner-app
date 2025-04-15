// src/components/Banner.tsx
import React from 'react';
import styled from 'styled-components';
import { useBanner } from '../context/BannerContext';

const BannerContainer = styled.div<{ backgroundColor: string; textColor: string }>`
  width: 100%;
  padding: 2rem 0;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  text-align: center;
  margin-bottom: 2rem;
`;

const BannerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const BannerDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 1.5rem;
`;

const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  max-height: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Banner: React.FC = () => {
  const { bannerState } = useBanner();
  
  return (
    <BannerContainer 
      backgroundColor={bannerState.backgroundColor}
      textColor={bannerState.textColor}
      data-testid="banner"
    >
      <BannerContent>
        <BannerTitle data-testid="banner-title">{bannerState.title}</BannerTitle>
        <BannerDescription data-testid="banner-description">
          {bannerState.description}
        </BannerDescription>
        {bannerState.imageUrl && (
          <BannerImage 
            src={bannerState.imageUrl} 
            alt={bannerState.title} 
            data-testid="banner-image"
          />
        )}
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;