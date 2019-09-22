import React from 'react';
import Cards from './cards';

const CardList=({feedingData})=>{
	const cardComponent=feedingData.map((user, i) =>{
		return <Cards key={i} id={feedingData[i].id} title={feedingData[i].title} summary={feedingData[i].summary} imagelink={feedingData[i].imagelink}/>
	})
	return (
		<div>
	        {cardComponent}
		</div>
	)
}

export default CardList;