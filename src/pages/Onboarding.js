import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { NameForm } from '../forms/NameForm';
import { EmailForm } from '../forms/EmailForm';
import { TitleAndAccessForm } from '../forms/TitleAndAccessForm.js';
import { BusinessIdentifierForm } from '../forms/BusinessIdentifierForm';
import { BusinessAddressForm } from '../forms/BusinessAddressForm';
import { BusinessIndustryForm } from '../forms/BusinessIndustryForm';
import { BusinessSizeForm } from '../forms/BusinessSizeForm';

const styles = {
  backgroundColor: '#ceddce',
  padding: '8px',
};

const stepStyles = {
  backgroundColor: '#f19485',
  padding: '8px',
  margin: '8px',
};

const Step = ({ step, nextStep, previousStep, children }) => {
  return (
    <div style={stepStyles}>
      <h1>Step {step}</h1>
      {children}
      {!!previousStep && (
        <button onClick={() => previousStep(step)}>Previous</button>
      )}
      {!!nextStep && <button onClick={() => nextStep(step)}>Next</button>}
    </div>
  );
};

const hasStep = path => /step-[1-7]$/.test(path);

export const Onboarding = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    // if not on valid step then update url to valid step
    if (!hasStep(location.pathname)) {
      history.push(`${path}/step-1`);
    }
  }, []);

  const nextStep = step => {
    history.push(`${path}/step-${step + 1}`);
  };

  const previousStep = step => {
    history.push(`${path}/step-${step - 1}`);
  };

  return (
    <div style={styles}>
      <h1>Onboarding</h1>
      <Switch>
        <Route path={`${path}/step-1`}>
          <Step step={1} nextStep={nextStep}>
            <NameForm />
          </Step>
        </Route>
        <Route path={`${path}/step-2`}>
          <Step step={2} nextStep={nextStep} previousStep={previousStep}>
            <EmailForm />
          </Step>
        </Route>
        <Route path={`${path}/step-3`}>
          <Step step={3} nextStep={nextStep} previousStep={previousStep}>
            <TitleAndAccessForm />
          </Step>
        </Route>
        <Route path={`${path}/step-4`}>
          <Step step={4} nextStep={nextStep} previousStep={previousStep}>
            <BusinessIdentifierForm />
          </Step>
        </Route>
        <Route path={`${path}/step-5`}>
          <Step step={5} nextStep={nextStep} previousStep={previousStep}>
            <BusinessAddressForm />
          </Step>
        </Route>
        <Route path={`${path}/step-6`}>
          <Step step={6} nextStep={nextStep} previousStep={previousStep}>
            <BusinessIndustryForm />
          </Step>
        </Route>
        <Route path={`${path}/step-7`}>
          <Step step={7} previousStep={previousStep}>
            <BusinessSizeForm />
          </Step>
        </Route>
      </Switch>
    </div>
  );
};
