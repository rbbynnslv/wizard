import React from 'react';

export const StepControl = ({ valid, hasNext, hasPrev, onNext, onPrev }) => {
  return (
    <React.Fragment>
      {hasPrev && <button onClick={onPrev}>Previous</button>}
      {hasNext && (
        <button disabled={!valid} onClick={onNext}>
          Next
        </button>
      )}
    </React.Fragment>
  );
};
