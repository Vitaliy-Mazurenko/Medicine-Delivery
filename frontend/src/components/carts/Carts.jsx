import Cart from './Cart';

const Carts = ({ carts, addGoods }) => {
	let shopsCarts = carts.map((item) => {
		return <Cart item={item} key={item.id} addGoods={addGoods} />;
	});
	return (
		<div>
			<ul>{shopsCarts}</ul>
		</div>
	);
};

export default Carts;
