import React from 'react';
import ProjectCard from './projectCard';

const ProjectList=({projectListData, activeTab})=>{
	const projectComponent=projectListData.map((user, i) =>{
		if(user.projectId===activeTab){
		return <ProjectCard key={i} 
		id={projectListData[i].id} 
		projectTite={projectListData[i].projectTite} 
		summary={projectListData[i].summary} 
		imagelink={projectListData[i].imagelink} 
		github={projectListData[i].github} 
		liveLink={projectListData[i].liveLink} 
		projectdemo={projectListData[i].projectdemo}
		liveLinkTitle={projectListData[i].liveLinkTitle}
		projectdemoTitle={projectListData[i].projectdemoTitle}/>
	}
	else return false;
	});
	return (
		<div>
	        {projectComponent}
		</div>
	)
}

export default ProjectList;



