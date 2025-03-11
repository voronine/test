'use client';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styles from './FormContainer.module.css';
import { initialValues, validationSchema, subjectOptions } from './formConfig';

const contactConfig = {
  title: 'Contact Information',
  subtitle: 'Say something to start a live chat!',
  contactList: [
    {
      type: 'phone',
      value: '+1 012 3456 789'
    },
    {
      type: 'email',
      value: 'demo@gmail.com'
    },
    {
      type: 'address',
      value: [
        '132 Dartmouth Street Boston,',
        'Massachusetts 02156 United States'
      ]
    }
  ],
  socialLinks: [
    {
      label: 'Twitter',
      url: '#'
    },
    {
      label: 'Instagram',
      url: '#'
    },
    {
      label: 'Discord',
      url: '#'
    }
  ]
};

const FormContainer: React.FC = () => {
  const handleSubmit = (values: typeof initialValues, actions: any) => {
    console.log('Submitting form', values);
    actions.setSubmitting(false);
  };

  return (
    <footer className={styles.footerContact}>
      <div className={styles.leftSide}>
        <h2>{contactConfig.title}</h2>
        <p>{contactConfig.subtitle}</p>
        <ul className={styles.contactList}>
          {contactConfig.contactList.map((item, index) => (
            <li key={index}>
              {item.type === 'phone' && (
                <>
                  <img src="/icons/phone.svg" className={styles.icon} alt="Phone Icon" />
                  <a href={`tel:${item.value}`} className={styles.link}>
                    {item.value}
                  </a>
                </>
              )}
              {item.type === 'email' && (
                <>
                  <img src="/icons/email.svg" className={styles.icon} alt="Email Icon" />
                  <a href={`mailto:${item.value}`} className={styles.link}>
                    {item.value}
                  </a>
                </>
              )}
              {item.type === 'address' && (
                <>
                  <img src="/icons/location.svg" className={styles.icon} alt="Location Icon" />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      Array.isArray(item.value) ? item.value.join(' ') : item.value
                    )}`}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Array.isArray(item.value) ? (
                      <>
                        {item.value[0]}
                        <br />
                        {item.value[1]}
                      </>
                    ) : (
                      item.value
                    )}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.socialIcons}>
          {contactConfig.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              aria-label={link.label}
              className={styles.socialIcon}
            >
              <img
                src={`/icons/${link.label.toLowerCase()}.svg`}
                alt={`${link.label} icon`}
              />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.rightSide}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="firstName">First Name</label>
                  <Field id="firstName" name="firstName" placeholder="" type="text" />
                  <ErrorMessage name="firstName" component="div" className={styles.error} />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="lastName">Last Name</label>
                  <Field id="lastName" name="lastName" placeholder="" type="text" />
                  <ErrorMessage name="lastName" component="div" className={styles.error} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="email">Email</label>
                  <Field id="email" name="email" placeholder="" type="email" />
                  <ErrorMessage name="email" component="div" className={styles.error} />
                </div>
                <div className={styles.inputWrapper}>
                  <div className={styles.phoneWrapper}>
                    <label htmlFor="phone">Phone Number</label>
                    <Field id="phone" name="phone" placeholder="" type="tel" />
                    <ErrorMessage name="phone" component="div" className={styles.error} />
                  </div>
                </div>
              </div>
              <div className={styles.inputWrapper}>
                <label>Select Subject?</label>
                <div className={styles.radioGroup}>
                  {subjectOptions.map((option) => (
                    <label key={option.value}>
                      <Field type="radio" name="subject" value={option.value} />
                      {option.label}
                    </label>
                  ))}
                </div>
                <ErrorMessage name="subject" component="div" className={styles.error} />
              </div>
              <div className={styles.inputWrapper}>
                <label htmlFor="message">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  style={{ resize: 'none' }}
                />
                <ErrorMessage name="message" component="div" className={styles.error} />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Send Message
              </button>
              <img
                src="/icons/paper.svg"
                alt="Decoration"
                className={styles.decorationImage}
              />
            </Form>
          )}
        </Formik>
        <div className={styles.decoration}></div>
      </div>
    </footer>
  );
};

export default FormContainer;
