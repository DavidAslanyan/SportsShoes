import React from 'react';
import './_buttonBlack.scss';

export function ButtonBlack({title, link}) {
  return (
    <a href={link}><button className='buttonBlack'>{title}</button></a>
  )
}
