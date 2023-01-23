import React from 'react';
import products from '/src/data/data.json';
import './_ratingComponent.scss';

export function RatingComponent(props) {
  const { id } = props;
  const item = products.find((item) => item.id === id);

  if (item === null) return null;

  const stars = [];
  for (let i = 0; i < item.rating; i++) {
    stars.push(1)
  }

  return (
    <ul className='rating__list'>
      {stars.map((star, idx) => (
        <li className='rating__item' key={idx}><i className='bx bxs-star'></i></li>
      ))}
    </ul>
  )

}
