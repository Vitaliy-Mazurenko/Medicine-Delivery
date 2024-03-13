import Orders from './Orders';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import './shoppingCart.css';

export default function ShoppingCart({ carts, amountChange, clearCart }) {
	const formatCarts = JSON.stringify(carts);
	const navigate = useNavigate();
	const [newUser, setUserState] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
	});

	let result = 0;
	if (Object.keys(carts).length !== 0) {
		result = carts.reduce(
			(sum, current) => sum + current.price * current.amount,
			0
		);
	}

	const ref = useRef(null);

	const handleChange = () => {
		setUserState({
			name: ref.current.name.value,
			email: ref.current.email.value,
			phone: ref.current.phone.value,
			address: ref.current.address.value,
		});
	};

	const orderFetch = async (cartResult, URL = 'http://localhost:4000/order') => {
		return await fetch(`${URL}`, {
			method: 'POST',
			body: JSON.stringify(cartResult),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!result) {
			alert('Cart is empty,  add goods to the cart');
		} else if (
			!newUser.name ||
			!newUser.email ||
			!newUser.phone ||
			!newUser.address
		) {
			alert('Please, fill in all fields');
		} else {
			let cartResult = {
				"items" : formatCarts,
				"customer" : newUser
			};
			localStorage.setItem('cart', JSON.stringify(cartResult));
			orderFetch(cartResult);
			clearCart();
			alert('Thank you for shopping');
			navigate('/');
		}
	};

	return (
		<div className='shoppingCart'>
			<div className='shopping'>
				<div className='sidebar'>
					<form onSubmit={handleSubmit} className='form-cart' ref={ref}>
						<label htmlFor='name'>
							<div>Name:</div>
							<Input
								required
								type='text'
								name='name'
								placeholder='Enter name'
								onChange={handleChange}
							/>
						</label>
						<label htmlFor='email'>
							<div>Email:</div>
							<Input
								required
								type='email'
								name='email'
								placeholder='Enter email'
								onChange={handleChange}
							/>
						</label>
						<label htmlFor='phone'>
							<div>Phone:</div>
							<Input
								required
								type='phone'
								name='phone'
								placeholder='Enter phone'
								onChange={handleChange}
							/>
						</label>
						<label htmlFor='address'>
							<div>Address:</div>
							<Input
								required
								type='address'
								name='address'
								placeholder='Enter address'
								onChange={handleChange}
							/>
						</label>
					</form>
				</div>
				<Orders goods={carts} amountChange={amountChange} />
			</div>

			<div className='result'>
				{' '}
				<div className='total-price'> Total price:{result}</div>
				<Button text='Submit' onClick={(e) => handleSubmit(e)} />
			</div>
		</div>
	);
}
