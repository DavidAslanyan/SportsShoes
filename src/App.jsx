import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/NavbarMain/Navbar';
import { Home } from './Pages/Home/Home';
import { Store } from './Pages/Store/Store';
import { Cart } from './Pages/Cart/Cart';
import { Credit } from './Pages/Credit/Credit';
import { ShoppingCartProvider } from './Contexts/ShoppingCartContext';
import './_style.scss';
import { CartSideComponent } from './Components/CartSideComponent/CartSideComponent';
import { Footer } from './Pages/Footer/Footer';
import { CreditCardProvider } from './Contexts/CreditCardContext';

function App() {
  return (
    <>
    <ShoppingCartProvider>
      <Navbar />
      <main className='pageMain'>
      <CreditCardProvider>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/store" element={<Store/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/credit" element={<Credit/>}></Route>
        </Routes>
      </CreditCardProvider>
      </main>
      <CartSideComponent />
      <Footer />
    </ShoppingCartProvider>
    </>
  )
}

export default App