// src/components/__tests__/BannerForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BannerForm from '../BannerForm';
import { BannerProvider } from '../../context/BannerContext';

describe('BannerForm component', () => {
  it('renders form elements correctly', () => {
    render(
      <BannerProvider>
        <BannerForm />
      </BannerProvider>
    );
    
    // Check if the form is rendered
    expect(screen.getByTestId('banner-form')).toBeInTheDocument();
    
    // Check for input fields
    expect(screen.getByTestId('background-color-input')).toBeInTheDocument();
    expect(screen.getByTestId('text-color-input')).toBeInTheDocument();
    expect(screen.getByTestId('title-input')).toBeInTheDocument();
    expect(screen.getByTestId('description-input')).toBeInTheDocument();
    expect(screen.getByTestId('image-url-input')).toBeInTheDocument();
    
    // Check for buttons
    expect(screen.getByTestId('apply-changes-button')).toBeInTheDocument();
    expect(screen.getByTestId('reset-form-button')).toBeInTheDocument();
  });
  
  it('updates input values when changed', () => {
    render(
      <BannerProvider>
        <BannerForm />
      </BannerProvider>
    );
    
    const titleInput = screen.getByTestId('title-input') as HTMLInputElement;
    
    // Change the title input
    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    
    // Check if the input value was updated
    expect(titleInput.value).toBe('New Title');
  });
  
  it('resets form values when reset button is clicked', () => {
    render(
      <BannerProvider>
        <BannerForm />
      </BannerProvider>
    );
    
    const titleInput = screen.getByTestId('title-input') as HTMLInputElement;
    const resetButton = screen.getByTestId('reset-form-button');
    
    // Change the title input
    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    expect(titleInput.value).toBe('New Title');
    
    // Click the reset button
    fireEvent.click(resetButton);
    
    // Check if the value was reset to default
    expect(titleInput.value).toBe('Photography');
  });
});