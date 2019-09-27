import React from 'react'


const Card=(props)=>{
	return(
		<div className='tc --black-10 dib br3 pa3 ma2 grow bw2 shadow-2 fl w-25 h-25 pa2'>
		<img alt='logo' src={props.imagelink} height="90" width="100"/>
		<div>
		<p><b>{props.title}</b></p>
		<p>{props.summary}</p>
		</div>
		</div>
	);
}
export default Card;
