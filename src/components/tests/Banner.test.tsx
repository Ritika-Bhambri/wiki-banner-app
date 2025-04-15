// src/components/__tests__/Banner.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../Banner';
import { BannerProvider } from '../../context/BannerContext';

describe('Banner component', () => {
  it('renders with default values', () => {
    render(
      <BannerProvider>
        <Banner />
      </BannerProvider>
    );
    
    // Check if the banner title is rendered
    expect(screen.getByTestId('banner-title')).toBeInTheDocument();
    
    // Check if the banner description is rendered
    expect(screen.getByTestId('banner-description')).toBeInTheDocument();
    
    // Check if the banner image is rendered
    expect(screen.getByTestId('banner-image')).toBeInTheDocument();
  });
  
  it('has the correct default title', () => {
    render(
      <BannerProvider>
        <Banner />
      </BannerProvider>
    );
    
    expect(screen.getByTestId('banner-title').textContent).toBe('Photography');
  });
  
  it('has the correct default description', () => {
    render(
      <BannerProvider>
        <Banner />
      </BannerProvider>
    );
    
    expect(screen.getByTestId('banner-description').textContent).toContain('Photography is the art');
  });
});