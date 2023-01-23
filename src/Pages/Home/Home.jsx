import React from 'react';
import seaScape from '/src/assets/peakpx.jpg';
import './_home.scss';
import { useShoppingCart } from '../../Contexts/ShoppingCartContext';
import videoUrl from '/src/assets/videos/Shoes TV Ad – High Performance Running Shoes TVC by Yepme.mp4';
import { ButtonOrange } from '../../Components/Buttons/ButtonOrange/ButtonOrange';
import { ButtonBlack } from '../../Components/Buttons/ButtonBlack/ButtonBlack';
import { LogoComponent } from '../../Components/LogoComponent/LogoComponent';

export function Home() {
  return (
    <main className='homepage'>
      <div className='homepage__top'>
        <div className='homepage__text'>
          <span className='homepage__title'><LogoComponent/></span>
          <h2 className='homepage__quote'>It's not about perfect. It's about effort.</h2>
          <ButtonOrange title="Explore" link="/store"/>
        </div>
      </div>
      <div className='homepage__bottom'>
        <div className='homepage__bottomContainer pageContent'>
          <section className='homepage__bottomLeft'>
            <video className='homepage__video' autoPlay loop muted place-inline="true">
              <source src={videoUrl} type="video/mp4"/>
            </video>
          </section>
          <section className='homepage__bottomRight'>
            <h2 className='homepage__bottomTitle'>Stay Fit</h2>
            <article className='homepage__bottomArticle'>
            Running, or jogging, is one of the best cardio exercises you can do. Running for at least 10 minutes a day can significantly lower your risk of cardiovascular disease. Runners lower their chances of dying from heart disease by half.
            </article>
            <ButtonBlack title="Get Equipment" link="/store"/>
          </section>
        </div>
      </div>
      
    </main>
  )
}
