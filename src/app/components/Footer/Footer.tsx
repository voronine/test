'use client';

import React from 'react';
import styles from './Footer.module.css';
import { footerConfig } from './footerConfig';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.logo}>{footerConfig.logo}</h2>
      <div className={styles.divider} />
      <div className={styles.content}>
        {footerConfig.columns.map((col, idx) => (
          <div className={styles.column} key={idx}>
            <h3>{col.title}</h3>
            <ul>
              {col.items.map((item, itemIdx) => {
                if (typeof item === 'string') {
                  return (
                    <li key={itemIdx} className={styles.listItem}>
                      <a href="#" className={styles.link}>
                        {item}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={itemIdx} className={styles.listItem}>
                    {'icon' in item && item.icon && (
                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt=""
                        className={styles.icon}
                      />
                    )}
                    <a href={item.link} className={styles.link}>
                      {Array.isArray(item.text) ? (
                        <>
                          {item.text[0]}
                          <br />
                          {item.text[1]}
                        </>
                      ) : (
                        item.text
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div className={styles.newsletter}>
          <h3>{footerConfig.newsletter.title}</h3>
          <form>
            <input type="email" placeholder={footerConfig.newsletter.placeholder} />
            <button type="submit">{footerConfig.newsletter.buttonText}</button>
          </form>
          <p>{footerConfig.newsletter.description}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
