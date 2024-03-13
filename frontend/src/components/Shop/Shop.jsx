import Button from '../../common/Button/Button';
import Carts from '../carts/Carts';
import './shop.css';

export default function Shop({ shop, addGoods, makeOrder, oneShop }) {

	return (
		<div className='shop'>
			<div className='sidebar'>
				<h4>Shops:</h4>
				<Button
					id='drugs'
					text='Drugs 24'
					onClick={(e) => makeOrder(e.target.id)}
					className={oneShop && oneShop !== 'drugs' ? '' : 'activ' }
				/>
				<Button
					id='farmacy'
					text='Farmacy'
					className={oneShop && oneShop !== 'farmacy' ? '' : 'activ' }
					onClick={(e) => makeOrder(e.target.id)}
				/>
				<Button
					id='abc'
					text='ABC Farm'
					className={oneShop && oneShop !== 'abc' ? '' : 'activ' }
					onClick={(e) => makeOrder(e.target.id)}
				/>
			</div>
			<div className='section'>
				<Carts carts={shop} addGoods={addGoods} />
			</div>
		</div>
	);
}
