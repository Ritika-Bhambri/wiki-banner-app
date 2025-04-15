// src/context/BannerContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface BannerState {
  backgroundColor: string;
  textColor: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface BannerContextType {
  bannerState: BannerState;
  updateBannerBackground: (color: string) => void;
  updateBannerTextColor: (color: string) => void;
  updateBannerTitle: (title: string) => void;
  updateBannerDescription: (description: string) => void;
  updateBannerImage: (url: string) => void;
}

const defaultBannerState: BannerState = {
  backgroundColor: '#0645ad',
  textColor: '#ffffff',
  title: 'Photography',
  description: 'Photography is the art, application, and practice of creating images by recording light. It's a passion that allows me to capture moments and freeze time, creating lasting memories while exploring the beauty of our world.',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
};

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export const BannerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bannerState, setBannerState] = useState<BannerState>(defaultBannerState);

  const updateBannerBackground = (color: string) => {
    setBannerState(prev => ({ ...prev, backgroundColor: color }));
  };

  const updateBannerTextColor = (color: string) => {
    setBannerState(prev => ({ ...prev, textColor: color }));
  };

  const updateBannerTitle = (title: string) => {
    setBannerState(prev => ({ ...prev, title }));
  };

  const updateBannerDescription = (description: string) => {
    setBannerState(prev => ({ ...prev, description }));
  };

  const updateBannerImage = (url: string) => {
    setBannerState(prev => ({ ...prev, imageUrl: url }));
  };

  return (
    <BannerContext.Provider
      value={{
        bannerState,
        updateBannerBackground,
        updateBannerTextColor,
        updateBannerTitle,
        updateBannerDescription,
        updateBannerImage,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export const useBanner = (): BannerContextType => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error('useBanner must be used within a BannerProvider');
  }
  return context;
};