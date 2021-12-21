import React from 'react';
import './Header.scss';

function Header({ user = 'John' }) {
	return (
		<header className='header'>
			<h1>Header</h1>

			<p>{user}</p>
		</header>
	);
}
export default Header;
