import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { useHttp } from "./hooks/http.hook";

import Dashboard from "./pages/Dashboard";
import { Finalize } from "./pages/Finalize";
import { Results } from "./pages/Results";

export const useRoutes = (props) => {
  const data = useHttp();
  return (
    <Switch>
      <Route path="/dashboard" exact>
        <Dashboard data={{ data }} />
      </Route>
      <Route path="/finalize/:testId" exact>
        <Finalize data={data} />
      </Route>
      <Route path="/results/:testId" exact>
        <Results data={data} />
      </Route>
      <Redirect to="/dashboard" />
    </Switch>
  );
};
