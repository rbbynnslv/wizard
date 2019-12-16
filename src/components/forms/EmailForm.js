import React from 'react';

// components
import { StepForm } from './StepForm';
import { InputError } from './input/InputError';
import { InputContainer } from './input/InputContainer';

export const EmailForm = props => {
  return (
    <StepForm {...props}>
      {({ register, errors }) => (
        <InputContainer>
          <input
            name="email"
            type="email"
            placeholder="Email"
            ref={register({
              required: 'Email address is required',
            })}
          />
          <InputError error={errors.email} />
        </InputContainer>
      )}
    </StepForm>
  );
};
