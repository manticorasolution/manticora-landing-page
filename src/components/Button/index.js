import React from 'react';
import Container from './styles';
import { FaAndroid, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Button = ({ icon, redirectTo, text, className }) => {
	return (
		<Link to={{ pathname: redirectTo }} style={{ textDecoration: "none" }} target="_blank" >
			<Container className={className}>
				{icon === 'android' &&
					<FaAndroid color="#fefefe" size="2rem" className="icon" />
				}
				{icon === 'link' &&
					<FaExternalLinkAlt color="#fefefe" size="1.5rem" className="icon" />
				}
				<p>{text}</p>
			</Container>
		</Link >
	);
}

export default Button;