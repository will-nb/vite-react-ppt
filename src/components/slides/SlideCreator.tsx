// src/components/slides/SlideCreator.tsx
import React from 'react';
import './SlideCreator.css';
import { SlideProps } from './types';

const SlideCreator: React.FC<SlideProps> = ({ className }) => {
  return (
    <div className={`slide creator ${className || ''}`}>
      <div className="slide-content">
        <div className="head">
          <h2>Creator ecosystem · Activation key</h2>
          <p>Invite creators with free credits; give out activation keys for promotion and sales; partner with publishers in the future.</p>
        </div>
        <div className="grid">
          <div className="phone">
            <div className="status">Granostack</div>
            <div className="screen">
              <h3>Enter Activation Key</h3>
              <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" readOnly />
              <button>Activate</button>
              <p className="hint">You can buy or receive a key from a creator.</p>
            </div>
          </div>
          <ul className="bullets">
            <li>Use free credits to invite creators</li>
            <li>Provide activation keys (sell or give away)</li>
            <li>Extend the same model to publishers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideCreator;
