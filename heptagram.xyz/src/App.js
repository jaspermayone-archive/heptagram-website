import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import BotCommandsPage from './Pages/BotCommandsPage';
import ContributorsPage from './Pages/ContributorsPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import TermsOfServicesPage from './Pages/TermsOfServicesPage';

function App() {
	return (
		<Router>
			<Route exact path='/'>
				<Redirect to='/home' />
			</Route>
			<Route path='/home' component={HomePage} exact />
			<Route path='/contributors' component={ContributorsPage} />
			<Route path='/bot-commands' component={BotCommandsPage} />
			<Route path='/privacy-policy' component={PrivacyPolicyPage} />
			<Route path='/terms-of-service' component={TermsOfServicesPage} />
		</Router>
	);
}

export default App;
