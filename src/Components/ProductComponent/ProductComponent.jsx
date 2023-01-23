import React from 'react';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import './_productComponent.scss';
import { formatCurrency } from '../../Utilities/FormatCurrency';

export function ProductComponent(props) {
  const { id, name, price, imgUrl } = props;
  const { addItem, getQuantity, viewOpen } = useShoppingCart();
  const quantity = getQuantity(id);

  return (
    <li className='product__item'>
      <img className='product__image' src={imgUrl} />
      <h3 className='product__title'>{name}</h3>
      <p className='product__price'>{formatCurrency(price)}</p>
      <div className='product__buttons'>
      <button onClick={() => viewOpen(id)} className='product__button product__button--view'>View Product</button>
      {quantity === 0 ? <button className='product__button product__button--add' onClick={() => addItem(id)}>Add to Cart <i className='bx bxs-wallet'></i></button> : <button className='product__button product__button--added'>In Cart</button>}
      </div>
    </li>
  )
}
