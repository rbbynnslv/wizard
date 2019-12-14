import React from 'react';
import useForm from 'react-hook-form';

import { getDefaultFormValues } from './utils';

import { InputContainer } from './input/InputContainer';
import { InputError } from './input/InputError';
import { StepControl } from '../StepControl';

export const TitleAndAccessForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: 'onBlur',
    defaultValues: getDefaultFormValues(formKey, formData),
  });

  return (
    <form name="titleAndAccessForm">
      <InputContainer>
        <input
          name="jobTitle"
          type="text"
          placeholder="Job Title"
          ref={register}
        />
      </InputContainer>
      <InputContainer>
        <select
          name="access"
          ref={register({ required: 'An access level is required' })}
        >
          <option value="">Select a role</option>
          <option value="ADMIN">Administrator</option>
          <option value="EMPLOYEE">Employee</option>
        </select>
        <InputError error={errors.access}/>
      </InputContainer>
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
