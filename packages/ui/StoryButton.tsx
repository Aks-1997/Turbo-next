"use client";

import React from 'react';
import './Stories/Button/button.css';

/**
 * Primary UI component for user interaction
 */

interface StoryButtonProps {
  primary?: boolean; 
  backgroundColor?: string;
  size?: string;
  label?: string;
}

export const StoryButton = ({ primary, backgroundColor, size, label, ...props }: StoryButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};

