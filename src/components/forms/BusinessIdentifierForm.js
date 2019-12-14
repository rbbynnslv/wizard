import React from 'react';
import useForm from 'react-hook-form';

import { getDefaultFormValues } from './utils';

import { InputContainer } from './input/InputContainer';
import { InputError } from './input/InputError';
import { StepControl } from '../StepControl';

export const BusinessIdentifierForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: 'onBlur',
    defaultValues: getDefaultFormValues(formKey, formData),
  });

  return (
    <form name="businessIdentifierForm">
      <InputContainer>
        <input
          name="name"
          type="text"
          placeholder="Business Name"
          ref={register({
            required: 'Your business name is required',
          })}
        />
        <InputError error={errors.name} />
      </InputContainer>
      <InputContainer>
        <input
          name="websiteURL"
          type="url"
          placeholder="Website URL"
          ref={register}
        />
      </InputContainer>
      <InputContainer>
        <input
          name="phonenumber"
          type="text"
          placeholder="Phonenumber"
          ref={register}
        />
      </InputContainer>
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
