'use client';
import React from 'react';
import Header from './components/Menu/Header';
import MiddleSection from './components/MiddleSection/MiddleSection';
import FormContainer from './components/FormContainer/FormContainer';

export default function Page() {
  return (
    <>
      <Header />
      <MiddleSection />
      <FormContainer />
    </>
  );
}
