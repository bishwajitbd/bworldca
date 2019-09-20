import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';


class Projects extends Component{
	constructor(props){
		super(props);
		this.state={activeTab:0};
	}

	toggleCategories(){
		if(this.state.activeTab===0){
			return(
				<div className="projects-grid">
				<Card shadow={0} style={{width: '350px', margin: '10px'}}>
				    <CardTitle style={{color: '#fff', height: '200px', 
				    	background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
				    	React Project #1</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Mauris sagittis pellentesque lacus eleifend lacinia...
				    </CardText>
				    <CardActions border>
				        <Button colored>GitHub</Button>
				        <Button colored>CodePen</Button>
				        <Button colored>Live Demo</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>

				<Card shadow={0} style={{width: '350px', margin: '10px'}}>
				    <CardTitle style={{color: '#fff', height: '200px', 
				    	background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
				    	React Project #1</CardTitle>
				    <CardText>
				        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				        Mauris sagittis pellentesque lacus eleifend lacinia...
				    </CardText>
				    <CardActions border>
				        <Button colored>GitHub</Button>
				        <Button colored>CodePen</Button>
				        <Button colored>Live Demo</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
				</div>


			)
		}
		else if(this.state.activeTab===1){
			return(
				<div><h1>This is ASP.NET</h1></div>
			)
		}
		else if(this.state.activeTab===2){
			return(
				<div><h1>This is SQL Server</h1></div>
			)
		}
		else if(this.state.activeTab===3){
			return(
				<div><h1>This is Java</h1></div>
			)
		}
		else if(this.state.activeTab===4){
			return(
				<div><h1>This is Access</h1></div>
			)
		}
	}




	render(){
		return(
			<div className="catagory-tab">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
					<Tab>React</Tab>
					<Tab>ASP.NET</Tab>
					<Tab>SQL Server</Tab>
					<Tab>Java</Tab>
					<Tab>Access</Tab>
				</Tabs>

				<section className="projects-grid">
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
				</section>
			</div>

		)
	}
}

export default Projects;