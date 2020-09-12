import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import dataContext from './Context';

function Productitem() {
  const { id } = useParams();
  const shoeDetail = useContext(dataContext);
  const Shoes = shoeDetail[id]
  return (
    <div className="product-container">
      <div className="detail">
        <img src={Shoes.src} alt="" />
        <div className="box">
          <div className="row">
            <h2>{Shoes.title}</h2>
            <span>${Shoes.price}</span>
            <p className="colors"> {Shoes.color.map((item) => {
              return (
                <button style={{ background: item }}></button>
              )
            })}</p>
            <p>{Shoes.description}</p>
            <p>{Shoes.context}</p>
            <Link to="/cart" className="cart">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Productitem;