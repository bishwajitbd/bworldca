import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Tutorials from './tutorials'
import Services from './services'

const Main=()=>(
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/contact" component={Contact} />
		<Route path="/projects" component={Projects} />
		<Route path="/services" component={Services} />
		<Route path="/tutorials" component={Tutorials} />
	</Switch>
)

export default Main;