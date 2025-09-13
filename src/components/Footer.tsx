// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

interface FooterProps {
  slideIndex: number;
  totalSlides: number;
}

const Footer: React.FC<FooterProps> = ({ slideIndex, totalSlides }) => {
  return (
    <footer className="footer">
      <span>HKSTP Pitch</span>
      <span>{slideIndex + 1} / {totalSlides}</span>
    </footer>
  );
};

export default Footer;
