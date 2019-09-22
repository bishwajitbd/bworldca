import React, {Component} from 'react';
import logo from '../images/bishwajit.JPG';

class Contact extends Component{
	render(){
		return(

			<article className="tc br3  ba --black-10 mv4 w-100-m w-25-l shadow-5 center">
			<main className="pa4 black-80">
			<img src={logo} alt="Canvas Logo"/>
			<h4>Bishwajit Barua</h4>
			<p><b>Full Stack Software Developer</b></p>
				<table>
				  <tr>
				    <td>Phone:</td>
				    <td>(519) 577-8075</td>
				  </tr>
				  <tr>
				    <td>Email:</td>
				    <td><a href = "mailto: bishwajitbd@gmail.com">bishwajitbd@gmail.com</a></td>
				  </tr>
				  <tr>
				    <td>Linkedin: </td>
				    <td><a href="https://www.linkedin.com/in/bishwajit-barua-9a2139127/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/bishwajit-barua-9a2139127/</a></td>
				  </tr>
				  <tr>
				    <td>GitHub</td>
				    <td><a href="https://github.com/bishwajitbd" target="_blank" rel="noopener noreferrer">https://github.com/bishwajitbd</a></td>
				  </tr>
				</table>
			</main>
			</article>
		)
	}
}

export default Contact;