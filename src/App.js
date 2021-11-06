import React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import HomePage from './Pages/HomePage';
import BotCommandsPage from './Pages/BotCommandsPage';
import ContributorsPage from './Pages/ContributorsPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import TermsOfServicesPage from './Pages/TermsOfServicesPage';
import Error404Page from './Pages/Error404Page';
import Error500Page from './Pages/Error500Page';

function App() {
    return (
        <ErrorBoundary FallbackComponent={Error500Page}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route exact path="/home" component={HomePage} />
                    <Route path="/contributors" component={ContributorsPage} />
                    <Route path="/bot-commands" component={BotCommandsPage} />
                    <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                    <Route path="/terms-of-service" component={TermsOfServicesPage} />
                    <Route path="*" exact={true} component={Error404Page} />
                </Switch>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
