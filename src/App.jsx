import React from 'react';
import Header from './components/Layouts/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useSelector } from 'react-redux';
function App() {
  const showModal = useSelector((state) => state.modal.showModal);
  return (
    <React.Fragment>
      <Header />
      <Meals />
      {showModal && <Cart />}
    </React.Fragment>
  );
}

export default App;
