import React, { useState } from 'react';
import './order.css';
import Input from '../../common/Input/Input';

const Order = ({ item, amountChange }) => {
	const [value, setValue] = useState(item.amount);
	const handleKeyPress = (e) => {
		const keyCode = e.keyCode || e.which;
		const keyValue = String.fromCharCode(keyCode);
		if (/[+e-]/.test(keyValue)) e.preventDefault();
	};

	const valueChange = (e) => {
		const { name, value } = e.target;
		setValue(value);
		amountChange(name, value);
	};

	return (
		<li className='item'>
			<img className='item-img' src={item.im} alt='Burger' />
			<div className='group'>
				<h3>{item.title}</h3>
				<span className='item-price'>Price: {item.price}</span>
				<Input
					type='number'
					min='1'
					step='1'
					value={value}
					name={item.id}
					onKeyPress={handleKeyPress}
					onChange={valueChange}
				/>
			</div>
		</li>
	);
};

export default Order;
