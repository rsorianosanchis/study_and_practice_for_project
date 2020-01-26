import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Bascket from './components/Bascket';

function App() {

  // crear listado de productos
  const [products, setProducts] = useState([
    { id: 1, nombre: 'Camisa ReactJs', pris: 50 },
    { id: 2, nombre: 'Camisa NodeJs', pris: 20 },
    { id: 3, nombre: 'Camisa Express', pris: 30 },
    { id: 4, nombre: 'Camisa Svelte', pris: 30 }]);
  //
  // state carrito de compras
  const [bascket, addProducktBasket] = useState([]);
  // logik for date and time


  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const time = new Date().toLocaleTimeString();
  const date = new Date().toLocaleDateString(undefined, options);
  //
  return (
    <Fragment>
      <Header time={time} date={date} />
      <h3>Lista de productos</h3>
      {products.map(product => (
        <Producto
          allProducts={products}
          product={product}
          key={product.id}
          bascket={bascket}
          addProducktBasket={addProducktBasket}
        />))}
      <Bascket bascket={bascket} addProducktBasket={addProducktBasket} />
      <Footer />
    </Fragment >

  );
}

export default App;
