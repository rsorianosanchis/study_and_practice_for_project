import React from 'react'

const Producto = ({ product, bascket, addProducktBasket, allProducts }) => {
  const { id, nombre, pris } = product;

  //agrgar producto a carrito
  const selectProduct = id => {
    console.log('agregando...', id);
    const producto = allProducts.filter(prod => prod.id === id);
    console.log(producto);
    console.log(bascket);

    //const memory = [...bascket, producto[0]]
    addProducktBasket([...bascket, producto[0]]);
  }

  const deleteProduct = (id) => {
    const updateBascket = bascket.filter(item => item.id !== id);
    console.log(updateBascket);
    addProducktBasket(updateBascket);
  }

  return (
    <div>
      <h5>{nombre} => pris: {pris} </h5>
      {allProducts ?
        <button type='button' onClick={() => { selectProduct(id); }}>Add to Basket</button>
        : <button type='button' onClick={() => { deleteProduct(id); }}>Delete</button>}

    </div>
  )
}

export default Producto
