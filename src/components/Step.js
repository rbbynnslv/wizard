import React from 'react';

const stepStyle = {
  backgroundColor: '#f6beb3',
  padding: '8px',
  margin: '8px',
};

export const Step = ({ step, stepKey, nextStep, previousStep, children }) => {
  const next = formData => {
    nextStep(step, stepKey, formData);
  };

  const prev = formData => {
    previousStep(step, stepKey, formData);
  };

  return (
    <div style={stepStyle}>
      <h1>Step {step}</h1>
      {children({ next, prev })}
      {!!previousStep && (
        <button onClick={() => previousStep(step)}>Previous</button>
      )}
    </div>
  );
};
