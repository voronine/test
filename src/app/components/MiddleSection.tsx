'use client';
import React from 'react';
import styles from './MiddleSection.module.css';

const MiddleSection: React.FC = () => {
  return (
    <section className={styles.middleSection}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>Any question or remarks? Just write us a message!</p>
    </section>
  );
};

export default MiddleSection;
