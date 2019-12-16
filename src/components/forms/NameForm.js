import React from 'react';

import { StepForm } from './StepForm';
import { InputError } from './input/InputError';
import { InputContainer } from './input/InputContainer';

export const NameForm = props => {
  return (
    <StepForm {...props}>
      {({ register, errors }) => (
        <React.Fragment>
          <InputContainer>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              ref={register({
                required: 'First Name is required',
              })}
            />
            <InputError error={errors.firstName} />
          </InputContainer>
          <InputContainer>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              ref={register({
                required: 'Last Name is required',
              })}
            />
            <InputError error={errors.lastName} />
          </InputContainer>
        </React.Fragment>
      )}
    </StepForm>
  );
};
