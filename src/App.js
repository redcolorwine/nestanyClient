
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import './index.css';
import Main from './pages/main/Main';
import Footer from './components/footer/Footer';
import ItemPage from './pages/itemPage/ItemPage';
import About from './pages/about/About';
import Delivery from './pages/delivery/Delivery';
import { useEffect, useRef } from 'react';
import Cart from './pages/cart/Cart';
import Order from './pages/order/Order';
import Contacts from './pages/contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from './redux_store/authReducer';
import AdminPanel from './pages/adminPanel/AdminPanel';
// const parseJwt = (token) => {
//   try {
//     return JSON.parse(atob(token.split(".")[1]));
//   } catch (e) {
//     return null;
//   }
// };

// const AuthVerify = (props) => {
//   props.history.listen(() => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (user) {
//       const decodedJwt = parseJwt(user.accessToken);

//       if (decodedJwt.exp * 1000 < Date.now()) {
//         props.logOut();
//       }
//     }
//   });

//   return <div></div>;
// };

function App() {

  const dispatch = useDispatch();
  const authData = useSelector(state => state.auth.authData);
  const resultRef = useRef(null);

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   const gotToken = localStorage.getItem("token");
  //   if (user) {
  //     const decodedJwt = parseJwt(gotToken);
  //     // console.log(decodedJwt.exp * 1000)
  //     // console.log(Date.now())
  //     if (decodedJwt.exp * 1000 < Date.now()) {
  //       console.log('Срок действия токена истёк')
  //       dispatch(logoutThunk());
  //     }
  //   }
  // }, [authData])

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
          <Route path='/order' element={<Order />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
