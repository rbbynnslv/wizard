import React from 'react';

export const StepControls = ({ next, prev, isValid, getValues }) => {
  const handleNext = () => {
    next(getValues());
  };

  const handlePrevious = () => {
    prev(getValues());
  };

  return (
    <React.Fragment>
      {prev && <button onClick={handlePrevious}>Previous</button>}
      {next && (
        <button onClick={handleNext} disabled={!isValid}>
          Next
        </button>
      )}
    </React.Fragment>
  );
};
