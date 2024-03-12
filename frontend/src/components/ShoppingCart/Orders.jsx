import Order from './Order';

const Orders = ({ goods, amountChange }) => {
	let shopsCarts = [];
	let isEmpty = '';
	if (Object.keys(goods).length !== 0) {
		shopsCarts = goods.map((item) => {
			return <Order amountChange={amountChange} item={item} key={item.id} />;
		});
	} else {
		isEmpty = 'order list is empty';
	}

	return (
		<div className='section'>
			<ul className='item-order'>{shopsCarts}</ul>
			<span style={{ color: '#44014C', padding: '20px', fontSize: '24px' }}>
				{isEmpty}
			</span>
		</div>
	);
};

export default Orders;
