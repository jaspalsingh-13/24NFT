import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createTheme, ThemeProvider, withTheme } from "@material-ui/core";
import { observer } from "mobx-react";

import { Dashboard, IClasses, PageLayout } from "./modules";

import ProtectedRoute from "./ProtectedRoute";

import Theme from "./Theme";

type Props = {
  classes?: IClasses;
};

@observer
class App extends React.Component<Props> {
  isAuthenticated = false;

  render() {
    return (
      // use React Fragment, <>, to avoid wrapping elements in unnecessary div
      <>
        <ThemeProvider theme={createTheme(Theme)}>
          <Router>
            <PageLayout isAuthenticated={true}>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props: any) => {
                    return this.isAuthenticated ? (
                      <Redirect to="/dashboard" />
                    ) : (
                      <Redirect to="/*" />
                    );
                  }}
                ></Route>
                <ProtectedRoute
                  isAuthenticated={true}
                  path="/dashboard"
                  component={Dashboard}
                />
                <Route path="*">
                  <div>404 not found</div>
                </Route>
              </Switch>
            </PageLayout>
          </Router>
        </ThemeProvider>
      </>
    );
  }
}
export default withTheme(App);
