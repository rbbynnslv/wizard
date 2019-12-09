import React from 'react';

const styles = {
  backgroundColor: '#ceddce',
  padding: '8px',
};

const stepStyle = {
  backgroundColor: '#f6beb3',
  padding: '8px',
  margin: '8px',
};

const Step = () => (
  <div style={stepStyle}>
    <h1>Step</h1>
  </div>
);

export const Onboarding = () => (
  <div style={styles}>
    <h1>Onboarding</h1>
    <Step />
    <Step />
    <Step />
    <Step />
    <Step />
  </div>
);
