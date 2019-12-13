import React from 'react';
import useForm from 'react-hook-form';

import { StepControls } from '../StepControls';

export const NameForm = ({ next, prev }) => {
  const { register, errors, formState, handleSubmit, getValues } = useForm({
    mode: 'onBlur',
  });

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
      <StepControls
        next={next}
        prev={prev}
        getValues={getValues}
        isValid={formState.isValid}
      />
    </form>
  );
};
