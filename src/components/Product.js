import React, { useContext } from 'react';
import dataContext from './Context';
import { Link } from 'react-router-dom';

function Product() {
  let productsData = useContext(dataContext);
  return (
    <div id="product" className="product-container">
      {productsData.map((val, id) => {
        return (
          <div className="card" key={id}>
            <Link to={`/product/${id}`}>
              <img src={val.src} alt="" />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/product/${id}`}>
                  {val.title}
                </Link>
              </h3>
              <span>{val.price}</span>
              <p>{val.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}


export default Product;