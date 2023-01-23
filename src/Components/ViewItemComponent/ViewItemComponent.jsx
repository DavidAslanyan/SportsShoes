import React from 'react';
import products from '/src/data/data.json';
import './_viewItemComponent.scss';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import { formatCurrency } from '../../Utilities/FormatCurrency';
import { RatingComponent } from '../RatingComponent/RatingComponent';

export function ViewItemComponent(props) {
  const { viewClose, addItem, getQuantity } = useShoppingCart();
  const { id } = props;
  const item = products.find((item) => item.id === id);
  const quantity = getQuantity(id);

  const handleClick = (id) => {
    addItem(id);
    viewClose();
  }
  
  if (item === null) return null;

  return (
    <div className='viewItem'>
      <div className='viewItem__right'>
        <img className='viewItem__image' src={item.imgUrl} alt={item.id}/>
        <div className='viewItem__info'>
          <h3 className='viewItem__title'>{item.name}</h3>
          <RatingComponent id={id}/>
          <p className='viewItem__price'>Price <span className='viewItem__price viewItem__price--colored'>{formatCurrency(item.price)}</span></p>
          <p className='viewItem__producer'>Producer <span className='viewItem__producer viewItem__producer--colored'>{item.firm}</span></p>
          <span>Sizes Available</span>
          <ul className='viewItem__list'>
            <li className='viewItem__item'>XXS</li>
            <li className='viewItem__item'>XS</li>
            <li className='viewItem__item'>S</li>
            <li className='viewItem__item'>M</li>
            <li className='viewItem__item'>L</li>
            <li className='viewItem__item'>XL</li>
            <li className='viewItem__item'>XXL</li>
          </ul>
          <span className='viewItem__description'>Description</span>
          <article className='viewItem__article'>An outer covering for the human foot typically having a thick or stiff sole with an attached heel and an upper part of lighter material</article>
        </div>
      </div>
      <div className='viewItem__footer'>
        <button className='viewItem__button viewItem__button--close' onClick={() => viewClose()}>Close</button>
        {quantity === 0 ? <button className='viewItem__button viewItem__button--add' onClick={() => handleClick(item.id)}>Add to Cart</button> : <a href="/cart"><button className='viewItem__button viewItem__button--added'>In Cart</button></a>}
      </div>
    </div>
  )
}
