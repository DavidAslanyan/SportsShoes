import React from 'react';
import { LogoComponent } from '../../Components/LogoComponent/LogoComponent';
import './_footer.scss';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <section className='footer__left'>
          <span className='footer__leftTitle'><LogoComponent /></span>
        </section>
        <section className='footer__middle'>
          <ul className='footer__middleList'>
            <li className='footer__middleItem'>
              <a href="/" className='footer__middleLink'>Home</a>
            </li>
            <li className='footer__middleItem'>
              <a href="/store" className='footer__middleLink'>Store</a>
            </li>
            <li className='footer__middleItem'>
              <a href="/cart" className='footer__middleLink'>Cart</a>
            </li>
            <li className='footer__middleItem'>
              <a href="/credit" className='footer__middleLink'>Credit</a>
            </li>
          </ul>
          <p className='footer__middleCopy'>&copy; Sports Shoes 2022. All Right Reserved</p>
        </section>
        <section className='footer__right'>
        <ul className='footer__rightList'>
            <li className='footer__rightItem'>
              <a href="/" className='footer__rightLink'><i className='bx bxl-facebook-circle' ></i></a>
            </li>
            <li className='footer__rightItem'>
              <a href="/" className='footer__rightLink'><i className='bx bxl-twitter' ></i></a>
            </li>
            <li className='footer__rightItem'>
              <a href="/" className='footer__rightLink'><i className='bx bxl-instagram' ></i></a>
            </li>
            <li className='footer__rightItem'>
              <a href="/" className='footer__rightLink'><i className='bx bxl-youtube' ></i></a>
            </li>
          </ul>
          <p className='footer__rightAuthor'>Website created by David Aslanyan</p>
        </section>
      </div>
    </footer>
  )
}
