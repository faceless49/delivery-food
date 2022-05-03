import React, { useEffect, useState } from 'react';

import './scss/app.scss';

import { Route, Routes } from 'react-router-dom';

import { Header } from 'components';
import { Cart, Home } from 'pages';
import { PizzasType, ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const [pizzas, setPizzas] = useState<PizzasType[]>([]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={pizzas} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
