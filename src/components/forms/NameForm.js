import React from 'react';
import useForm from 'react-hook-form';

import { getDefaultFormValues } from './utils';

import { InputError } from './input/InputError';
import { InputContainer } from './input/InputContainer';
import { StepControl } from '../StepControl';

export const NameForm = ({ formKey, next, prev, formData }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: 'onBlur',
    defaultValues: getDefaultFormValues(formKey, formData),
  });

  return (
    <form name="nameForm">
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
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
      />
    </form>
  );
};
