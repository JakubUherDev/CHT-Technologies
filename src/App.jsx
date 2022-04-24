import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';

import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Kontakt from "./pages/Kontakt";
import B2B from "./pages/B2B";

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/o-nas" element={<AboutUs />} />
        <Route exact path="/kontakt" element={<Kontakt />} />
        <Route exact path="/B2B" element={<B2B />} />
        {/*<Route path="/signin" element={<SignIn />} />*/}
        {/*<Route path="/signup" element={<SignUp />} />*/}
        {/*<Route path="/reset-password" element={<ResetPassword />} />*/}
      </Routes>
    </>
  );
}

export default App;
