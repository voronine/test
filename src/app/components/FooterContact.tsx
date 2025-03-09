'use client';
import React from 'react';
import styles from './FooterContact.module.css';

// Импортируем иконки из MUI
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterContact: React.FC = () => {
  return (
    <footer className={styles.footerContact}>
      <div className={styles.leftSide}>
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>

        <ul className={styles.contactList}>
          <li>
            <EmailIcon className={styles.icon} />
            <span>demo@gmail.com</span>
          </li>
          <li>
            <PhoneIcon className={styles.icon} />
            <span>+1 012 3456 789</span>
          </li>
          <li>
            <LocationOnIcon className={styles.icon} />
            <span>
              120 Dartmouth Street Boston,<br />
              Massachusetts 02156 United States
            </span>
          </li>
        </ul>
      </div>

      <div className={styles.rightSide}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" placeholder="First Name" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Last Name" />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="Phone Number" />
          </div>

          <div>
            <label htmlFor="subject">Select Subject</label>
            <select id="subject">
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message..." />
          </div>

          <button type="submit">Send Message</button>
        </form>

        {/* Декоративный элемент (например, стрелка или самолёт) */}
        <div className={styles.decoration}></div>
      </div>
    </footer>
  );
};

export default FooterContact;
