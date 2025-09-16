import React from 'react';
import styles from './DeviceMockup.module.css';

interface DeviceMockupProps {
  children: React.ReactNode;
  type?: 'phone' | 'browser';
}

const DeviceMockup: React.FC<DeviceMockupProps> = ({ children, type = 'phone' }) => {
  return (
    <div className={styles[type]}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default DeviceMockup;
