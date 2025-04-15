// src/components/BannerForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useBanner } from '../context/BannerContext';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #0645ad;
    box-shadow: 0 0 0 2px rgba(6, 69, 173, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #0645ad;
    box-shadow: 0 0 0 2px rgba(6, 69, 173, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #0645ad;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #043584;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const BannerForm: React.FC = () => {
  const { 
    bannerState, 
    updateBannerBackground, 
    updateBannerTextColor,
    updateBannerTitle,
    updateBannerDescription,
    updateBannerImage
  } = useBanner();

  const [formState, setFormState] = useState({
    backgroundColor: bannerState.backgroundColor,
    textColor: bannerState.textColor,
    title: bannerState.title,
    description: bannerState.description,
    imageUrl: bannerState.imageUrl,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateBannerBackground(formState.backgroundColor);
    updateBannerTextColor(formState.textColor);
    updateBannerTitle(formState.title);
    updateBannerDescription(formState.description);
    updateBannerImage(formState.imageUrl);
  };

  const handleReset = () => {
    setFormState({
      backgroundColor: bannerState.backgroundColor,
      textColor: bannerState.textColor,
      title: bannerState.title,
      description: bannerState.description,
      imageUrl: bannerState.imageUrl,
    });
  };

  return (
    <FormContainer>
      <FormTitle>Customize Banner</FormTitle>
      <form onSubmit={handleSubmit} data-testid="banner-form">
        <FormGroup>
          <Label htmlFor="backgroundColor">Background Color</Label>
          <Input
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={formState.backgroundColor}
            onChange={handleChange}
            data-testid="background-color-input"
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="textColor">Text Color</Label>
          <Input
            type="color"
            id="textColor"
            name="textColor"
            value={formState.textColor}
            onChange={handleChange}
            data-testid="text-color-input"
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formState.title}
            onChange={handleChange}
            placeholder="Enter banner title"
            data-testid="title-input"
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
            value={formState.description}
            onChange={handleChange}
            placeholder="Enter banner description"
            data-testid="description-input"
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formState.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
            data-testid="image-url-input"
          />
        </FormGroup>
        
        <ButtonGroup>
          <Button type="submit" data-testid="apply-changes-button">Apply Changes</Button>
          <Button 
            type="button" 
            onClick={handleReset}
            style={{ backgroundColor: '#6c757d' }}
            data-testid="reset-form-button"
          >
            Reset
          </Button>
        </ButtonGroup>
      </form>
    </FormContainer>
  );
};

export default BannerForm;