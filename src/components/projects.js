import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import { Content } from 'react-mdl';
import {projectListData} from './Utilities/projectListData';
import ProjectList from './projectList';

class Projects extends Component{
	constructor(props){
		super(props);
		this.state={activeTab:0};
	}

	toggleCategories(){
		if(this.state.activeTab===0){
			return(
			<div className="tc">
			<h1>React</h1>
			<hr/>
		        <Content>
		            <div className="page-content" />
		            <ProjectList projectListData={projectListData} activeTab={1} />
		        </Content>
			</div>
			)
		}
		else if(this.state.activeTab===1){
			return(
			<div className="tc">
			<h1>ASP.NET</h1>
			<hr/>
		        <Content>
		            <div className="page-content" />
		            <ProjectList projectListData={projectListData} activeTab={2} />
		        </Content>
			</div>
			)
		}
		else if(this.state.activeTab===2){
			return(
				<div className="tc">
				<h1>Android</h1>
				<hr/>
			        <Content>
			            <div className="page-content" />
			            <ProjectList projectListData={projectListData} activeTab={3} />
			        </Content>
				</div>
			)
		}
		else if(this.state.activeTab===3){
			return(
				<div className="tc">
				<h1>Python</h1>
				<hr/>
			        <Content>
			            <div className="page-content" />
			            <ProjectList projectListData={projectListData} activeTab={4} />
			        </Content>
				</div>
			)
		}
		else if(this.state.activeTab===4){
			return(
				<div className="tc">
				<h1>Java</h1>
				<hr/>
			        <Content>
			            <div className="page-content" />
			            <ProjectList projectListData={projectListData} activeTab={5} />
			        </Content>
				</div>
			)
		}
		else if(this.state.activeTab===5){
			return(
				<div className="tc">
				<h1>Access</h1>
				<hr/>
			        <Content>
			            <div className="page-content" />
			            <ProjectList projectListData={projectListData} activeTab={6} />
			        </Content>
				</div>
			)
		}
	}

	render(){
		return(
			<div className="catagory-tab">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
					<Tab>React</Tab>
					<Tab>ASP.NET</Tab>
					<Tab>Android</Tab>
					<Tab>Python</Tab>
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