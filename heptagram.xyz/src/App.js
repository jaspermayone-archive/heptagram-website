import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import HomePage from './pages/HomePage';
import BotCommandsPage from './pages/BotCommandsPage';
import ContributorsPage from './pages/ContributorsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicesPage from './pages/TermsOfServicesPage';

function App() {
  return (
    <Router>
        <Route path="/home" component={HomePage} exact />
        <Route path="/contributors" component={ContributorsPage} />
        <Route path="/bot-commands" component={BotCommandsPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/terms-of-service" component={TermsOfServicesPage} />
    </Router>
  )
}

export default App
