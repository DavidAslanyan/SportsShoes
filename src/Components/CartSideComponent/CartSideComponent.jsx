import React, { useState } from 'react'
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import { CartComponent } from '../CartComponent/CartComponent';
import './_cartSideComponent.scss';
import { formatCurrency } from '../../Utilities/FormatCurrency';
import products from '/src/data/data.json';
import emptyBox from '/src/assets/emptyBox.jpg';
import { CartCenter } from '../CartCenter/CartCenter';

export function CartSideComponent() {
  const { cartItems, isOpen, close, cartQuantity } = useShoppingCart();
  const [screenWidth, setScreenWidth] = useState(true);

  window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1100px)").matches) {
      setScreenWidth(true);
    } else {
      setScreenWidth(false);
    }
  })

  if (isOpen) {
      if (screenWidth) {
        return (
          <div className='cartSide'>
            <h1 className='cartSide__title'>My Cart</h1>
            <span className='cartSide__close' onClick={close}>&times;</span>
            <div>
            {cartItems.map((item) => (
                <CartComponent key={item.id} {...item}/>
              ))}
            </div>
            {cartQuantity === 0 ? <section>
              <img className='cartSide__image' src={emptyBox} alt="box" />
              <p className='cartSide__empty'>Cart Empty</p>
            </section> : 
            <div className='cartSide__footer'>
              <h3 className='cartSide__total'>Total Price&emsp; 
                <span className='cartSide__total cartSide__total--colored'>{formatCurrency(cartItems.reduce((total, cartItem) => {
                  const item = products.find(item => item.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0))}</span>
              </h3>
              <a href="/cart"><button className='cartSide__footerButton cartSide__footerButton--top'>See / Change Whole Cart</button></a>
              <a href="/credit"><button className='cartSide__footerButton cartSide__footerButton--bottom'>Proceed to Checkout</button></a>
            </div>
            }
          </div>
        )
      } else {
        return (
          <CartCenter />
        )
      }
    }
  }
