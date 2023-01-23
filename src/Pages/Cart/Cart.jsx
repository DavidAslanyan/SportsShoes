import React from 'react'
import { CartPageComponent } from '../../Components/CartPageComponent/CartPageComponent';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import { formatCurrency } from '../../Utilities/FormatCurrency';
import products from '/src/data/data.json';
import box from '/src/assets/box.png';
import './_cart.scss';

export function Cart() {
  const { cartItems, removeAll, cartQuantity} = useShoppingCart();
  return (
    <div className='cartMain'>
      <h1 className='cartMain__title'>Cart</h1>
      {cartQuantity === 0 ? 
      <div className='cartMain__empty'>
        <img className='cartMain__emptyImage' src={box} alt="box" />
        <h1 className='cartMain__emptyTitle'>Cart Empty</h1>
        <a href='/store'><button className='cartMain__emptyButton'>Visit Store to Buy Some Sneakers</button></a>
      </div> :
       <div className='cartMain__container'>
        <div className='cartMain__upper'>
        <div className='cartMain__left'>
        <h3 className='cartMain__total cartMain__total--title'>Total Price&emsp;
        <span className='cartMain__total cartMain__total--colored'>{formatCurrency(cartItems.reduce((total, cartItem) => {
          const item = products.find(item => item.id === cartItem.id)
          return total + (item?.price || 0) * cartItem.quantity
        }, 0))}</span>
        </h3>
        <a href="/credit"><button className='cartMain__purchaseButton'>Proceed to Checkout <i className='bx bxs-credit-card' ></i></button></a>
        </div>
        <button className='cartMain__clearButton' onClick={() => removeAll()}>Clear Cart    <i className='bx bxs-minus-circle'></i></button>
        </div>
      {cartItems.map((item) => (
        <CartPageComponent key={item.id} {...item}/>
      ))}
        </div>}
    </div>
  )
}
