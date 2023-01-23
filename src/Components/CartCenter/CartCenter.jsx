import React from 'react'
import { useShoppingCart } from '../../Contexts/ShoppingCartContext'
import { CartComponent } from '../CartComponent/CartComponent';
import { formatCurrency } from '../../Utilities/FormatCurrency';
import products from '/src/data/data.json';
import './_cartCenter.scss';
import emptyBox from '/src/assets/emptyBox.jpg';

export function CartCenter() {
  const { cartItems, close, cartQuantity } = useShoppingCart();

  return (
    <div className='cartCenter'>
        <div className='cartCenter__container'>
          <h1 className='cartCenter__title'>My Cart</h1>
          <span className='cartCenter__close' onClick={close}>&times;</span>
          <div>
          {cartItems.map((item) => (
              <CartComponent key={item.id} {...item}/>
            ))}
          </div>
          {cartQuantity === 0 ? <section>
            <img className='cartCenter__image' src={emptyBox} alt="box" />
            <p className='cartCenter__empty'>Cart Empty</p>
          </section> : 
          <div className='cartCenter__footer'>
            <h3 className='cartCenter__total'>Total Price&emsp; 
              <span className='cartCenter__total cartCenter__total--colored'>{formatCurrency(cartItems.reduce((total, cartItem) => {
                const item = products.find(item => item.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0))}</span>
            </h3>
            <a href="/cart"><button className='cartCenter__footerButton cartCenter__footerButton--top'>See / Change Whole Cart</button></a>
            <a href="/credit"><button className='cartCenter__footerButton cartCenter__footerButton--bottom'>Proceed to Checkout</button></a>
          </div>
          }
        </div>
    </div>
  )
}
