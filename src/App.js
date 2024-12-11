import React from 'react';
import ProductList from './components/ProductList';
import {CartProvider} from './context/CartContext';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
