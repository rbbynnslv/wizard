import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Onboarding() {
  return <h1>Onboarding</h1>;
}

function App() {
  return (
    <Router>
      <header>
        <h1>Wizard</h1>
      </header>
      <main>
        <Switch>
          <Route path="/onboarding">
            <Onboarding />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
