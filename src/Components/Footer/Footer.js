import React from 'react';
import './Footer.scss';

function Footer({ user = 'John' }) {
	return <footer className='footer'>Footer, {user}</footer>;
}
export default Footer;
