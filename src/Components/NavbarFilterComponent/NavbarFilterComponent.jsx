import React from 'react';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import './_navbarFilter.scss';

export function NavbarFilterComponent() {
  const { filterByFirm } = useShoppingCart();

  return (
    <ul className='brands'>
      <li className='brands__item' onClick={() => filterByFirm('Nike')}>Nike</li>
      <li className='brands__item' onClick={() => filterByFirm('Adidas')}>Adidas</li>
      <li className='brands__item' onClick={() => filterByFirm('Puma')}>Puma</li>
      <li  className='brands__item' onClick={() => filterByFirm('Reebok')}>Reebok</li>
    </ul>
  )
}
