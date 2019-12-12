import React from 'react';
import useForm from 'react-hook-form';

export const NameForm = ({ next, prev }) => {
  const { register, errors, formState, handleSubmit, getValues } = useForm({
    mode: 'onBlur',
  });

  const handleNext = () => {
    next(getValues());
  };

  const handlePrevious = () => {
    prev(getValues());
  };

  return (
    <form name="userInfo">
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        ref={register({ required: true })}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        ref={register({ required: true })}
      />
      {next && (
        <button disabled={!formState.isValid} onClick={handleNext}>
          Next
        </button>
      )}
      {prev && <button onClick={handlePrevious}>Previous</button>}
    </form>
  );
};
