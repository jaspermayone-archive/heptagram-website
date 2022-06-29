/* eslint-disable no-unused-vars */
import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BotCommandsPage from "./Pages/BotCommandsPage";
import ContributorsPage from "./Pages/ContributorsPage";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import BotDashboardPage from "./Pages/BotDashboardPage";
import TermsOfServicesPage from "./Pages/TermsOfServicesPage";
import Error404Page from "./Pages/Error404Page";
import Error500Page from "./Pages/Error500Page";

function App() {
  // let Navigate=useNavigate();
  return (
    <ErrorBoundary FallbackComponent={Error500Page}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/home" element={<HomePage />} />
          <Route exact path="/contributors" element={<ContributorsPage />} />
          <Route exact path="/bot-commands" element={<BotCommandsPage />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            exact
            path="/terms-of-service"
            element={<TermsOfServicesPage />}
          />
          <Route exact path="/dashboard" element={<BotDashboardPage />} />
          <Route
            exact
            path="/health"
            element={<h3>Hey There!!! The App is Healthy</h3>}
          />

          <Route path="*" exact={true} element={<Error404Page />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
