import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../Components/Styles/Styles.css';


const Footer = () => {
	return (
		<div id="footer" className=" sticky-bottom">
				<Row noGutters={true}>

					<Col md={6}>
						<h1 className="footerLogo">MPACHARLOTTE</h1>
					</Col>
					<Col md={6}>
						<h4 className="footerTag">Copyright 2021 © Mecklenburg Psychological Association. <br /> All rights reserved.</h4>
					</Col>
				</Row>

		</div>

	);
}

export default Footer;