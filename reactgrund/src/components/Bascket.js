import React from 'react';
import Producto from './Producto';
import './carrito.css';

const Bascket = ({ bascket, addProducktBasket }) => (
  <div className='bascket'>
    <h2>tu Carrito de compras</h2>

    {bascket.length === 0 ? 'no hay productos en la cesta' : bascket.map(item => <Producto
      product={item}
      key={item.id}
      bascket={bascket}
      addProducktBasket={addProducktBasket} />)}
  </div>
);


export default Bascket
