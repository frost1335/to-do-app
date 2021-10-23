import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { Finalize } from "./pages/Finalize";
import { Results } from "./pages/Results";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/finalize/:testId" exact>
        <Finalize />
      </Route>
      <Route path="/results/:testId" exact>
        <Results />
      </Route>
      <Redirect to="/dashboard" />
    </Switch>
  );
};
