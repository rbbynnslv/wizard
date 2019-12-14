import React from 'react';
import useForm from 'react-hook-form';

import { getDefaultFormValues } from './utils';

import { InputContainer } from './input/InputContainer';
import { InputError } from './input/InputError';
import { StepControl } from '../StepControl';

export const BusinessIndustryForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: 'onBlur',
    defaultValues: getDefaultFormValues(formKey, formData),
  });

  return (
    <form name="businessIndustryForm">
      <fieldset>
        <legend>Industry</legend>
        <InputContainer>
          <select
            name="industry"
            ref={register({ required: 'An industry is required' })}
          >
            <option value="">Please select an industry</option>
            <option value="enterprise software">Enterprise Software</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="ecommerce">Ecommerce</option>
            <option value="constructions">Construction</option>
            <option value="logistics">Logistics</option>
            <option value="saas">SAAS</option>
            <option value="telephony">Telephony</option>
            <option value="consumer electronics">Consumer Electronics</option>
            <option value="transportation">Transportation</option>
          </select>
          <InputError error={errors.industry} />
        </InputContainer>
      </fieldset>
      <fieldset>
        <legend>Customer Segment</legend>
        <InputContainer>
          <select
            name="segment"
            ref={register({ required: 'A segment is required' })}
          >
            <option value="">Please select a segment</option>
            <option value="consumer">Consumer</option>
            <option value="enterprise">Enterprise</option>
            <option value="both">Both</option>
          </select>
          <InputError error={errors.segment} />
        </InputContainer>
      </fieldset>
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
