import React from 'react'
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import { LogoComponent } from '../LogoComponent/LogoComponent';
import { ViewItemComponent } from '../ViewItemComponent/ViewItemComponent';
import './_viewProductComponent.scss'

export function ViewProductComponent() {
  const { view, myId } = useShoppingCart();

  if (view) {
    return (
      <div className='viewProduct'>
        <div className='viewProduct__container'>
          <div className='viewProduct__center'>
            <span className='viewProduct__title'><LogoComponent padding="0px 0 40px 0" align="center" color="#000"/></span>
            <ViewItemComponent id={myId}/>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}
