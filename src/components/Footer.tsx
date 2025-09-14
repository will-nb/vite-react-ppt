// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

interface FooterProps {
  slideIndex: number;
  totalSlides: number;
  title: string;
}

const Footer: React.FC<FooterProps> = ({ slideIndex, totalSlides, title }) => {
  return (
    <footer className="footer">
      <div className="slide-title">{title}</div>
      <div className="slide-number">{`${slideIndex + 1} / ${totalSlides}`}</div>
    </footer>
  );
};

export default Footer;
