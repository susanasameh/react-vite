import React from 'react'

const Card = ({product}) => {

  return (
    <div className="border-2 border-x-emerald-400 p-4">
      <h2 className="text-2xl font-bold">Title : {product.title}</h2>
      <p>Descreption : {product.description}</p>
      <span>Price {product.price} $</span>
      <p>Rate : {product.rate} stars</p>
    </div>
  );
}

export default Card