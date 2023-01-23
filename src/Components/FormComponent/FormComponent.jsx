import React from 'react';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import './_formComponent.scss';

export function FormComponent() {
  const { setInput } = useShoppingCart();

  return (
    <form onSubmit={(evt) => evt.preventDefault()} className='form'>
      <input className='form__input' autoFocus autoComplete='false' placeholder='Find your product...' onChange={(evt) => setInput(evt.target.value)} type="text" />
      <span><i className='bx bx-search form__search'></i></span>
    </form>
  )
}
