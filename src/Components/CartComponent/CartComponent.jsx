import React from 'react';
import products from '/src/data/data.json';
import './_cartComponent.scss';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import { formatCurrency } from '../../Utilities/FormatCurrency';

export function CartComponent(props) {
  const { id, quantity } = props;
  const { removeItem } = useShoppingCart();
  const item = products.find((item) => item.id === id);
  
  if (item === null) return null;

  return (
    <div className='cart'>
      <div className='cart__container'>
      <div className='cart__left'>
        <img className='cart__image' src={item.imgUrl} />
      </div>
      <div className='cart__center'>
        <p className='cart__title'>{item.name}</p>
        <p className='cart__price'>{formatCurrency(item.price)}</p>
        <p className='cart__quantity'>Quantity: {quantity}</p>
      </div>
      <div className='cart__right'>
        <button onClick={() => removeItem(id)} className='cart__button'><i className='bx bxs-trash'></i></button>
      </div>
    </div>
    </div>
  )
}
