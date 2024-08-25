import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/AppBar/Sidebar';
import NavBar from './components/AppBar/NavBar';
import { store } from './components/redux/store'
import { Provider } from 'react-redux';
import ValidateSim from './components/Validations/ValidateSim';
import About from './components/About';
import ContactUs from './components/Contact';
// import AboutUS from 'about/About';
// import Contact from 'contact/Contact';
import CustomerDetails from './components/Validations/CustomerDetails';
import ValidateCustomer from './components/Validations/ValidateCustomer';
import ValidateCustomerDetails from './components/Validations/ValidateCustomerDeatails';
import ValidateId from './components/Validations/ValidateId';
import SpecialOffer from './components/Validations/SpecialOffer';
import { lazy } from 'react';
const LazyCustomerDetails = lazy(() => import('./components/Validations/CustomerDetails'))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><NavBar />
            <Sidebar />
          </>}>
            <Route index element={<Suspense fallback={<h1 style={{ marginLeft: '20%', marginTop: '5%', padding: '20px' }}>Loading...</h1>}>
              <LazyCustomerDetails />
            </Suspense>} />
            <Route path='/' element={<Suspense fallback={<h1 style={{ marginLeft: '20%', marginTop: '5%', padding: '20px' }}>Loading...</h1>}>
              <LazyCustomerDetails />
            </Suspense>} />
            <Route path='/validate-sim' element={<ValidateSim />} />
            <Route path='/validate-customer' element={<ValidateCustomer />} />
            <Route path='/validate-customer-details' element={<ValidateCustomerDetails />} />
            <Route path='/validate-id' element={<ValidateId />} />
            <Route path='/special-offer' element={<SpecialOffer />} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<ContactUs />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
