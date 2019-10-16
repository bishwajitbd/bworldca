import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import {Content} from 'react-mdl';
import {projectListData} from './Utilities/projectListData';
import ProjectList from './projectList';

class Projects extends Component{
	constructor(props){
		super(props);
		this.state={activeTab:7};
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
		else if(this.state.activeTab===6){
			return(
				<div className="tc">
				<h1>Auomated Software Testing</h1>
				<hr/>
			        <Content>
			            <div className="page-content" />
			            <ProjectList projectListData={projectListData} activeTab={7} />
			        </Content>
				</div>
			)
		}
		else if(this.state.activeTab===7){
			return(
				<div className="tc">
				<h1>All</h1>
				<hr/>
			        <Content>
			            <div className="page-content" />
			            <ProjectList projectListData={projectListData} activeTab={1} />
			            <ProjectList projectListData={projectListData} activeTab={2} />
			            <ProjectList projectListData={projectListData} activeTab={7} />
			            <ProjectList projectListData={projectListData} activeTab={3} />
			            <ProjectList projectListData={projectListData} activeTab={5} />
			            <ProjectList projectListData={projectListData} activeTab={4} />
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
					<Tab><b>React</b></Tab>
					<Tab><b>ASP.NET</b></Tab>
					<Tab><b>Android</b></Tab>
					<Tab><b>Python</b></Tab>
					<Tab><b>Java</b></Tab>
					<Tab><b>Access</b></Tab>
					<Tab><b>Testing</b></Tab>
					<Tab><b>All</b></Tab>
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