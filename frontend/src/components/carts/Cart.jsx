import './cart.css';
import Button from '../../common/Button/Button';

const Cart = ({ item, addGoods }) => (
	<li className='item'>
		<img className='item-img' src={item.im} alt='Burger' />
		<div className='group'>
			<h3>{item.title}</h3>
			<Button
				id={item.id}
				text='add to Cart'
				onClick={(e) => addGoods(e.target.id, item.shop)}
			/>
		</div>
	</li>
);

export default Cart;
