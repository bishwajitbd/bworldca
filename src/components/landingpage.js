import React, {Component} from 'react';
import { Content } from 'react-mdl';
import {feedingData} from './Utilities/feedingData';
import CardList from './cardlist';


class Landing extends Component{
	render(){
		return(
			<div className="tc">
			<h1>Our Services</h1>
			<hr/>
		        <Content>
		            <div className="page-content" />
		            <CardList feedingData={feedingData} />

		        </Content>
			</div>
		)
	}
}

export default Landing;