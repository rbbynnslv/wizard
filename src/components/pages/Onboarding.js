import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';

// form components
import { NameForm } from '../forms/NameForm';
import { EmailForm } from '../forms/EmailForm';
import { TitleAndAccessForm } from '../forms/TitleAndAccessForm.js';
import { BusinessIdentifierForm } from '../forms/BusinessIdentifierForm';
import { BusinessAddressForm } from '../forms/BusinessAddressForm';
import { BusinessIndustryForm } from '../forms/BusinessIndustryForm';
import { BusinessSizeForm } from '../forms/BusinessSizeForm';

// components
import { WizardStep } from '../WizardStep';

const styles = {
  backgroundColor: '#ceddce',
  padding: '8px',
};

const hasStep = path => /step-[1-7]$/.test(path);

export const Onboarding = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [formData, setFormData] = React.useState({});

  React.useEffect(() => {
    // if not on valid step then update url to valid step
    if (!hasStep(location.pathname)) {
      history.push(`${path}/step-1`);
    }
  }, []);

  const nextStep = step => formValues => {
    setFormData({
      ...formData,
      ...formValues,
    });
    history.push(`${path}/step-${step + 1}`);
  };

  const previousStep = step => formValues => {
    setFormData({
      ...formData,
      ...formValues,
    });
    history.push(`${path}/step-${step - 1}`);
  };

  return (
    <div style={styles}>
      <h1>Onboarding</h1>
      <div>{JSON.stringify(formData, null, 4)}</div>
      <Switch>
        <Route path={`${path}/step-1`}>
          <WizardStep title="Step 1">
            <NameForm formKey="names" next={nextStep(1)} formData={formData} />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-2`}>
          <WizardStep title="Step 2">
            <EmailForm
              formKey="email"
              formData={formData}
              prev={previousStep(2)}
              next={nextStep(2)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-3`}>
          <WizardStep title="Step 3">
            <TitleAndAccessForm
              formKey="titleAndAccess"
              formData={formData}
              prev={previousStep(3)}
              next={nextStep(3)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-4`}>
          <WizardStep title="Step 4">
            <BusinessIdentifierForm
              formKey="businessIdentifier"
              formData={formData}
              prev={previousStep(4)}
              next={nextStep(4)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-5`}>
          <WizardStep title="Step 5">
            <BusinessAddressForm
              formKey="businessAddress"
              formData={formData}
              prev={previousStep(5)}
              next={nextStep(5)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-6`}>
          <WizardStep title="Step 6">
            <BusinessIndustryForm
              formKey="businessIndustry"
              formData={formData}
              next={nextStep(6)}
              prev={previousStep(6)}
            />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-7`}>
          <WizardStep title="Step 7">
            <BusinessSizeForm
              formKey="businessSize"
              formData={formData}
              prev={previousStep(7)}
            />
          </WizardStep>
        </Route>
      </Switch>
    </div>
  );
};
