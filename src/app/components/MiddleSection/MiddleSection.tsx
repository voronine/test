'use client';
import React from 'react';
import { Poppins } from 'next/font/google';
import styles from './MiddleSection.module.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

const MiddleSection: React.FC = () => {
  return (
    <section className={`${styles.middleSection} ${poppins.className}`}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>Any question or remarks? Just write us a message!</p>
    </section>
  );
};

export default MiddleSection;
