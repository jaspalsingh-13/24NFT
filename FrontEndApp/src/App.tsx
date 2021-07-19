import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createTheme, ThemeProvider, withTheme } from "@material-ui/core";
import { observer } from "mobx-react";

import { Dashboard, IClasses, PageLayout, ModalKeeper } from "./modules";

import ProtectedRoute from "./ProtectedRoute";

import Theme from "./Theme";
import { NFTDetailsView } from "./modules/NFTDetailsView";

type Props = {
  classes?: IClasses;
};

@observer
class App extends React.Component<Props> {
  isAuthenticated = true;

  render() {
    return (
      // use React Fragment, <>, to avoid wrapping elements in unnecessary div
      <>
        <ThemeProvider theme={createTheme(Theme)}>
          <Router>
            <PageLayout isAuthenticated={true}>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route
                    path="/"
                    exact
                    render={(props: any) => {
                      return this.isAuthenticated ? (
                        <Redirect to="/dashboard" />
                      ) : (
                        <div>testing</div>
                      );
                    }}
                  ></Route>
                  <ProtectedRoute
                    isAuthenticated={true}
                    path="/dashboard"
                    component={Dashboard}
                  />
                  <ProtectedRoute
                    isAuthenticated={true}
                    path="/nft-details"
                    component={NFTDetailsView}
                  />
                  <Route path="/">
                    <div>404 not found</div>
                  </Route>
                </Switch>
                <ModalKeeper />
              </Suspense>
            </PageLayout>
          </Router>
        </ThemeProvider>
      </>
    );
  }
}
export default withTheme(App);
