
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './index.css';
import Main from './pages/main/Main';
import Footer from './components/footer/Footer';
import ItemPage from './pages/itemPage/ItemPage';
import About from './pages/about/About';
import Delivery from './pages/delivery/Delivery';
import { useRef } from 'react';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import Contacts from './pages/contacts/Contacts';


function App() {

  const resultRef = useRef(null);

  return (
    <div className="App">
      <Header resultRef={resultRef} />
      <div className="app_wrapper">

        <Routes>
          <Route path="/" element={<Main ref={resultRef} />} />
          <Route path='/items/:id' element={<ItemPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
