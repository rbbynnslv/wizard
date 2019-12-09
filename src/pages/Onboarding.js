import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';

const styles = {
  backgroundColor: '#ceddce',
  padding: '8px',
};

const stepStyle = {
  backgroundColor: '#f6beb3',
  padding: '8px',
  margin: '8px',
};

const Step = ({ step, nextStep, previousStep }) => (
  <div style={stepStyle}>
    <h1>Step {step}</h1>
    {!!previousStep && (
      <button onClick={() => previousStep(step)}>Previous</button>
    )}
    {!!nextStep && <button onClick={() => nextStep(step)}>Next</button>}
  </div>
);

const hasStep = path => {
  const parts = path.split('/');
  const step = parts[parts.length - 1];
  return /step-[1-5]$/.test(step);
};

export const Onboarding = () => {
  const { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (!hasStep(location.pathname)) {
      history.push(`${path}/step-1`);
    }
  }, [location.pathname, history, path]);

  const nextStep = step => history.push(`${path}/step-${step + 1}`);
  const previousStep = step => history.push(`${path}/step-${step - 1}`);

  return (
    <div style={styles}>
      <h1>Onboarding</h1>
      <Switch>
        <Route path={`${path}/step-1`}>
          <Step step={1} nextStep={nextStep} />
        </Route>
        <Route path={`${path}/step-2`}>
          <Step step={2} nextStep={nextStep} previousStep={previousStep} />
        </Route>
        <Route path={`${path}/step-3`}>
          <Step step={3} nextStep={nextStep} previousStep={previousStep} />
        </Route>
        <Route path={`${path}/step-4`}>
          <Step step={4} nextStep={nextStep} previousStep={previousStep} />
        </Route>
        <Route path={`${path}/step-5`}>
          <Step step={5} previousStep={previousStep} />
        </Route>
      </Switch>
    </div>
  );
};
