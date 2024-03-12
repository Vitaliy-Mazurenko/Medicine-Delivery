import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
	return (
		<div className='Header'>
			<ul className='course-nav'>
				<li>
					<Link to='/'>Shop</Link>
				</li>
				<li>
					<Link to='/shoppingCart'>ShoppingCart</Link>
				</li>
			</ul>
		</div>
	);
}
