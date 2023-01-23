import React from 'react';
import { ProductComponent } from '../../Components/ProductComponent/ProductComponent';
import products from '/src/data/data.json';
import './_store.scss';
import { FormComponent } from '../../Components/FormComponent/FormComponent';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import { ViewProductComponent } from '../../Components/ViewProductComponent/ViewProductComponent';
import { NavbarFilterComponent } from '../../Components/NavbarFilterComponent/NavbarFilterComponent';
import { LogoComponent } from '../../Components/LogoComponent/LogoComponent';

export function Store() {
  const { filteredList } = useShoppingCart();

  if (filteredList.length === 0) {
    return (
      <div className='store store__no'>
      <LogoComponent align="center" color="#000"/>
      <div className='store__products'>
        <FormComponent />
        <p className='store__noResults'>No results<i className='bx bx-search store__search'></i></p>
      </div>
    </div>
    )
  }
  return (
    <div className='store'>
      <LogoComponent align="center" color="#000"/>
      <div className='store__products pageContent'>
        <FormComponent />
        <NavbarFilterComponent />
        <ul className='store__productsList'>
          {filteredList.map((product) => (
            <ProductComponent key={product.id} {...product}/>
          ))}
        </ul>
        <ViewProductComponent />
      </div>
    </div>
  )
}
