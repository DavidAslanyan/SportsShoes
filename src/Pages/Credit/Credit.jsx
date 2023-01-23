import React, { useState } from 'react';
import './_credit.scss';
import { useCreditCard } from '../../Contexts/CreditCardContext';
import { CreditCard } from '../../Components/CreditCard/CreditCard';

export function Credit() {

  const { name, setName, cardNumber, setCardNumber, year, setYear, month, setMonth, cvv, setCvv, cardMAX, yearMAX, monthMAX, cvvMAX} = useCreditCard();
  
  return (
      <div className='creditMain'>
        <div className='credit'>
          <form onSubmit={() => alert("Credit Card Connected")} className='credit__form'>
            <ul className='credit__list'>

              <li className='credit__item'>
                <h1 className='credit__title'>Credit</h1>
              </li >

              <li className='credit__item'>
                <span className='credit__name'>Full Name</span>
                <input className='credit__input' placeholder='NAME LASTNAME' type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
              </li>

              <li className='credit__item'>
                <span className='credit__number'>Card Number</span>
                <input className='credit__input' type="number" placeholder='0000 0000 0000 0000' value={cardNumber.substring(0, cardMAX)} onChange={(evt) => setCardNumber(evt.target.value)}/>
              </li>

              <li className='credit__item'>
                <span className='credit__name'>CCV</span>
                <input className='credit__input' placeholder='XXX' type="password" value={cvv.substring(0, 3)} onChange={(evt) => setCvv(evt.target.value)}/>
              </li>

              <li className='credit__item'>
                <span className='credit__date'>Expiration Date </span>
                <div className='credit__date--inputs'>
                <span className='credit__month'>Month</span>
                <input className='credit__input credit__month--input' type="number" placeholder='XX' value={month.substring(0, monthMAX)} onChange={(evt) => setMonth(evt.target.value)}/>
                <span className='credit__year'>Year</span>
                <input className='credit__input credit__year--input' type="number" placeholder='XXXX' value={year.substring(0, yearMAX)} onChange={(evt) => setYear(evt.target.value)}/>
                </div>
              </li>

              <a href="/"><button type='submit' className='credit__payButton'>Pay</button></a>
        
            </ul>
          </form>

          <CreditCard />
        </div>
      </div>
  )
}
