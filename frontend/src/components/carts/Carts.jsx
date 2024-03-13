import Cart from './Cart';

const Carts = ({ carts, addGoods }) => {
	return (
		<ul>
		{(!!carts && typeof carts[0] !== 'undefined') && carts.map((item) =>
			<Cart item={item} key={item.id} addGoods={addGoods} />
		)}
	</ul>
	);

};

export default Carts;
