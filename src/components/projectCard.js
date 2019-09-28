import React from 'react';
import {Card, CardTitle, CardActions, Button, CardText} from 'react-mdl';


const ProjectCard=(props)=>{
	return(
		<div className='tc dib br3 pa3 ma2 shadow-2 fl w-200 h-25 pa2'>
			<Card shadow={2} style={{width: '350px', margin: '10px'}}>
			<CardTitle style={{color: '#fff', height: '200px', 
	    	background: `url(${props.imagelink}) center / cover`}}>
	    	</CardTitle>
			<CardText>
					<p><b><u>{props.projectTite}</u></b></p>
					<p>{props.summary}</p>
		    </CardText>

			<CardActions border>
		        <Button colored><a href={props.github} target="_blank" rel="noopener noreferrer" text-left>GitHub</a></Button>
		        <Button colored><a href={props.liveLink} target="_blank" rel="noopener noreferrer" text-right>Hosted</a></Button>
		        <Button colored><a href={props.projectdemo} target="_blank" rel="noopener noreferrer" text-right>Demo</a></Button>
		    </CardActions>
			</Card>
		</div>
	);
}
export default ProjectCard;
