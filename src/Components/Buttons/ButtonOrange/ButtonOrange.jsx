import React from 'react';
import './_buttonOrange.scss';

export function ButtonOrange({title, link}) {
  return (
    <a href={link}><button className='buttonOrange'>{title}</button></a>
  )
}
