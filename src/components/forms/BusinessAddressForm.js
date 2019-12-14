import React from 'react';
import useForm from 'react-hook-form';

import { getDefaultFormValues } from './utils';

import { InputContainer } from './input/InputContainer';
import { InputError } from './input/InputError';
import { StepControl } from '../StepControl';

export const BusinessAddressForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: 'onBlur',
    defaultValues: getDefaultFormValues(formKey, formData),
  });

  return (
    <form name="businessAddressForm">
      <InputContainer>
        <input
          name="street"
          type="text"
          placeholder="Street"
          ref={register({ required: 'A street name is required' })}
        />
        <InputError error={errors.street} />
      </InputContainer>
      <InputContainer>
        <input
          name="city"
          type="text"
          placeholder="City"
          ref={register({ required: 'A city is required' })}
        />
        <InputError error={errors.city} />
      </InputContainer>
      <InputContainer>
        <select name="state" ref={register({ required: 'State is required' })}>
          <option value="">Please select a state</option>
          <option value="utah">Utah</option>
          <option value="albay">Albay</option>
        </select>
        <InputError error={errors.state} />
      </InputContainer>
      <InputContainer>
        <select
          name="country"
          ref={register({ required: 'Country is required' })}
        >
          <option value="">Please select country</option>
          <option value="usa">U.S.A.</option>
          <option value="philippines">Philippines</option>
        </select>
        <InputError error={errors.country} />
      </InputContainer>
      <InputContainer>
        <input
          name="postalCode"
          type="text"
          placeholder="Postal Code"
          ref={register({ required: 'Postal code is required' })}
        />
        <InputError error={errors.postalCode} />
      </InputContainer>
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
