import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
	const [shopCarts, setShopCarts] = useState([]);

	const newInitialCart = useCallback((shopCarts) => {
		return  {
			shops: shopCarts,
			goods: [],
			oneShop: '',
		};
	},[]);
 
	useEffect(() => {
		fetch('http://localhost:4000/api/')
		.then((res) => res.json())
		.then((result) => setShopCarts(result.data));
	}, []);


	const [cart, setCart] = useState(newInitialCart);
	const { shops, goods, oneShop } = cart;
	const [shop, setShop] = useState(shops);
	const [goodsValue, setValue] = useState({});

	const addGoods = (newGoods, shop) => {
		setCart({
			...cart,
			goods: [...goods, newGoods],
			oneShop: shop,
		});
		setValue(
			shopCarts.filter((item) =>
				[...goods, newGoods].some((id) => Number(id) === item.id)
			)
		);
	};

	const makeOrder = (id) => {
		setShop(shopCarts.filter((item) => id === item.shop));
	};

	const amountChange = (name, newValue) => {
		let goodsChange = goodsValue.filter((item) => Number(name) === item.id);
		let goodsNoChange = goodsValue.filter((item) => Number(name) !== item.id);
		goodsChange[0].amount = newValue;
		let newArr = [...goodsNoChange, ...goodsChange];

		setValue(newArr.sort((a, b) => (a.id > b.id ? 1 : -1)));
	};

	const clearCart = () => {
		setCart(newInitialCart);
		setValue({});
	};

	useEffect(() => {
		if (!newInitialCart.shops) {
			setShopCarts(shopCarts);
			setCart({
				shops: shopCarts,
				goods: [],
				oneShop: '',
			});
			setShop(shops);
		}
	}, [shopCarts, newInitialCart, shops]);

	// useEffect(() => {
	// 	let shopId = 'drugs';
	// 	setShop(shopCarts.filter((item) => shopId === item.shop));
	// }, []);


	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/'
						element={
							<Shop
								shop={shop}
								oneShop={oneShop}
								makeOrder={makeOrder}
								addGoods={addGoods}
							/>
						}
					/>
					<Route
						path='/shoppingCart'
						element={
							<ShoppingCart
								carts={goodsValue}
								amountChange={amountChange}
								clearCart={clearCart}
							/>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
