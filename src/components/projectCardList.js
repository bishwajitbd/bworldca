import React, {Component} from 'react';
import { Content } from 'react-mdl';
import {projectListData} from './Utilities/projectListData';
import ProjectList from './projectList';

class ProjectCardList extends Component{
	render(){
		return(
			<div className="tc">
			<h1>Projects</h1>
			<hr/>
		        <Content>
		            <div className="page-content" />
		            <ProjectList projectListData={projectListData} />
		        </Content>
			</div>
		)
	}
}

export default ProjectCardList;