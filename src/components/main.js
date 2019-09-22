import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Contact from './contact';
import Projects from './projects';
import Tutorials from './tutorials';
import Services from './services';
import Customer from './customer';
import Landingpage from './landingpage';
import Help from './help';
import Privacy from './privacy';

const Main=()=>(
	<Switch>
		<Route exact path="/" component={Landingpage} />
		<Route path="/contact" component={Contact} />
		<Route path="/projects" component={Projects} />
		<Route path="/services" component={Services} />
		<Route path="/tutorials" component={Tutorials} />
		<Route path="/customer" component={Customer} />
		<Route path="/help" component={Help} />
		<Route path="/privacy" component={Privacy} />
		<Route path="/about" component={Contact} />
		<Route path="/faq" component={Contact} />


		
	</Switch>
)

export default Main;