import React from 'react';
import useForm from 'react-hook-form';

import { getDefaultFormValues } from './utils';

// components
import { StepControl } from '../StepControl';

export const StepForm = ({ formKey, next, prev, formData, children }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: 'onBlur',
    defaultValues: getDefaultFormValues(formKey, formData),
  });

  return (
    <form name={formKey}>
      {children({ register, errors })}
      <StepControl
        valid={formState.isValid}
        hasPrev={!!prev}
        hasNext={!!next}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
