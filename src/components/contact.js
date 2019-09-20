import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
	render(){
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
					<h2>Bishwajit Barua</h2>
					<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png"
					alt="avatar" style={{height:'150px'}}/>
					<p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>bfkdf fnflfd</p>
					</Cell>
					<Cell col={6}>
					<h2>Contact Us</h2>
					<hr/>

					<div className="contact-list">
						<List>
						  <ListItem>
						    <ListItemContent style={{fontSize: '25px', fontFamily:'Assistant'}}>
						    	<i className="fa fa-phone-square" aria-hidden="true" />
						    	(123) 557-8075
						    </ListItemContent>
						  </ListItem>
					  <ListItem>
						    <ListItemContent style={{fontSize: '25px', fontFamily:'Assistant'}}>
						    	<i className="fa fa-envelope" aria-hidden="true" />
						    	bworldcanada@gmail.com
						    </ListItemContent>
						  </ListItem>
						</List>
					</div>





					</Cell>
				</Grid>

			</div>

		)
	}
}

export default Contact;