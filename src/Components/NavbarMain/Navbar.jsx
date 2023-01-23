import React from 'react';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import './_navbar.scss';

export function Navbar() {
  const { open, cartQuantity } = useShoppingCart();

  return (
    <div className='navbar'>
      <ul className='navbar__list pageContent'>
      <li className='navbar__item'>
        <a href="/" className='navbar__link'>Home</a>
      </li>
      <li className='navbar__item'>
        <a href="/store" className='navbar__link'>Store</a>
      </li>
      <li className='navbar__item'>
        <a href="/cart" className='navbar__link'>Cart</a>
      </li>
      <li className='navbar__item'>
        <button className='navbar__button' onClick={open}>
          <i className='bx bx-shopping-bag navbar__buttonIcon'></i>
          {cartQuantity === 0 ? null : <span className='navbar__cartQuantity'>{cartQuantity}</span>}
        </button>
      </li>
      <li className='navbar__item'>
        <a href="/credit" className='navbar__link navbar__link'>Card<i className='bx bx-credit-card-alt'></i></a>
      </li>
    </ul>
    </div>
  )
}
