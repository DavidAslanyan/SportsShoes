import React, { useState } from 'react';
import { useCreditCard } from '../../Contexts/CreditCardContext';
import './_creditCard.scss';
import paypalLogo from '/src/assets/paypal-logo.png';
import mastercardLogo from '/src/assets/masterCard-logo.png';
import visaLogo from '/src/assets/visa-logo.jpg';
import eyeImg from '/src/assets/eye.png';
import hideImg from '/src/assets/hide.png';

export function CreditCard() {

  const { name, cardNumber, year, month, cvv, cardMAX, yearMAX, monthMAX, cvvMAX} = useCreditCard();

  const [showCVV, setShowCVV] = useState(false);

  const changeCVV = () => setShowCVV(!showCVV);
  
  return (
    <section className='credit__template'>

          <div className='credit__front'>
            <section className='credit__top'>
              <p className='credit__top--card'>{cardNumber < 1 ? '0000 0000 0000 0000' : cardNumber.length > cardMAX ? cardNumber.substring(0, cardMAX) : cardNumber}</p>
              <p className='credit__top--name'>{name.length < 1 ? 'NAME LASTNAME' : name.toUpperCase()}</p>
            </section>
            <section className='credit__expiration'>
              <section className='credit__expiration--date'>
                <p className='credit__expiration--month'>{month < 1 ? 'XX' : month.length > monthMAX ? month.substring(0, monthMAX) : month}</p>
                <span className='credit__expiration--slash'> / </span>
                <p className='credit__expiration--year'>{year < 1 ? 'XXXX' : year.length > yearMAX ? year.substring(0, yearMAX) : year}</p>
              </section>
              <p className='credit__expiration--title'>Expiration date <i className='bx bx-wifi credit__expiration--titleWifi'></i></p>
            </section>
            <section className='credit__banks'>
              <ul className='credit__banksList'>
                <li className='credit__banksItem'>
                  <img className='credit__banksImage' src={paypalLogo} alt="paypalLogo" />
                </li>
                <li className='credit__banksItem'>
                  <img className='credit__banksImage' src={mastercardLogo} alt="mastercardLogo" />
                </li>
                <li className='credit__banksItem'>
                  <img className='credit__banksImage' src={visaLogo} alt="visaLogo" />
                </li>
              </ul>
            </section>
          </div>

          <div className='credit__back'>
            <section className='credit__cvv'>
              <p className='credit__cvv--title'>CVV</p>
              <p className='credit__cvv--input'>{ showCVV ? cvv.length < 1 ? "XXX" : cvv.substring(0, cvvMAX) : "XXX"}</p>
              <button onClick={changeCVV} className='credit__cvv--button'>
                { !showCVV ? <img src={hideImg} alt="eye"/> : <img src={eyeImg} alt="eye"/>}
              </button>
            </section>
          </div>

        </section>
  )
}
