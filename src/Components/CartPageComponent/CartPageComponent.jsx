import React from 'react';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import products from '/src/data/data.json';
import './_cartPageComponent.scss';
import { formatCurrency } from '../../Utilities/FormatCurrency';
import { RatingComponent } from '../RatingComponent/RatingComponent';

export function CartPageComponent(props) {
  const { id, quantity } = props;
  const { addItem, subtractItem, removeItem} = useShoppingCart();
  const item = products.find((item) => item.id === id);
  
  if (item === null) return null;

  return (
    <ul className='cartPage'>
      <li className='cartPage__item pageContent'>
        <img className='cartPage__image' src={item.imgUrl} alt={item.name} />
        <p className='cartPage__title'>Product name <span className='cartPage__title cartPage__title--bold'>{item.name}</span></p>
        <RatingComponent id={id}/>
        <p className='cartPage__price'>Price <span className='cartPage__price cartPage__price--bold'>{formatCurrency(item.price)}</span></p>
        <button className='cartPage__button cartPage__button--subtract' onClick={() => subtractItem(id)}>-</button>
        <p className='cartPage__quantity'>Quantity <span className='cartPage__quantity cartPage__quantity--bold'>{quantity}</span></p>
        <button className='cartPage__button cartPage__button--add' onClick={() => addItem(id)}>+</button>
        <p className='cartPage__total'>Total <span className='cartPage__total cartPage__total--bold'>{formatCurrency(quantity * item.price)}</span></p>
        <button className='cartPage__trash' onClick={() => removeItem(id)}><i className='bx bx-trash'></i></button>
      </li>
    </ul>
  )
}
