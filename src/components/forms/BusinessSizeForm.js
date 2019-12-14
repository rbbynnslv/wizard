import React from 'react';
import useForm from 'react-hook-form';

import { getDefaultFormValues } from './utils';

import { InputContainer } from './input/InputContainer';
import { InputError } from './input/InputError';
import { StepControl } from '../StepControl';

export const BusinessSizeForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: 'onBlur',
    defaultValues: getDefaultFormValues(formKey, formData),
  });

  React.useEffect(() => console.log(formState.isValid));

  return (
    <form name="businessSizeForm">
      <fieldset>
        <legend>Number of Employees</legend>
        <InputContainer>
          <select
            name="numEmployees"
            ref={register({ required: 'Number of employees is required' })}
          >
            <option value="">Choose an option</option>
            <option value="1-50">1-50</option>
            <option value="51-100">51-100</option>
            <option value="101-500">101-500</option>
            <option value="501-1000">501-1000</option>
            <option value=">1000">>1000</option>
          </select>
          <InputError error={errors.numEmployees} />
        </InputContainer>
      </fieldset>
      <fieldset>
        <legend>Typical Deal Size</legend>
        <InputContainer>
          <select
            name="typicalDeal"
            ref={register({ required: 'Deal size is required' })}
          >
            <option value="$1-$20">$1-$20</option>
            <option value="$21-$50">$21-$50</option>
            <option value="$51-$100">$51-$100</option>
            <option value="$100-$500">$100-$500</option>
            <option value="$501-$1,000">$501-$1,000</option>
            <option value="$1,001-$10,000">$1,001-$10,000</option>
            <option value=">$10,000">>$10,000</option>
          </select>
          <InputError error={errors.typicalDeal} />
        </InputContainer>
      </fieldset>
      <fieldset>
        <legend>Publicly Traded</legend>
        <InputContainer>
          <label>
            <input
              value="yes"
              type="radio"
              name="publiclyTraded"
              ref={register}
            />
            Yes
          </label>
          <label>
            <input
              checked
              value="no"
              type="radio"
              name="publiclyTraded"
              ref={register}
            />
            No
          </label>
          <InputError error={errors.publiclyTraded} />
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
