import React, {Component} from 'react';
import logo from '../images/bishwajit.JPG';

let linkedinAddress='https://linkedin.com/in/bishwajit-barua-9a2139127';
let githubAddress=`https://github.com/bishwajitbd`;
let emailAddres=`mailto: bishwajitbd@gmail.com`;

class Contact extends Component{
	render(){
		return(

			<article className="tc br3  ba --black-10 mv4 w-100-m w-25-l shadow-5 center">
			<main className="pa4 black-80">
			<img src={logo} alt="Canvas Logo" className="shadow-5"/>
			<h4>Bishwajit Barua</h4>
			<p><b>Full Stack Software Developer</b></p>
				<table>
				  <tr>
				    <td>Phone:</td>
				    <td>(519) 577-8075</td>
				  </tr>
				  <tr>
				    <td>Email:</td>
				    <td><a href = {emailAddres}>{emailAddres}</a></td>
				  </tr>
				  <tr>
				    <td>Linkedin: </td>
				    <td><a href={linkedinAddress} target="_blank" rel="noopener noreferrer">{linkedinAddress}</a></td>
				  </tr>
				  <tr>
				    <td>GitHub</td>
				    <td><a href={githubAddress} target="_blank" rel="noopener noreferrer">{githubAddress}</a></td>
				  </tr>
				</table>
			</main>
			</article>
		)
	}
}

export default Contact;