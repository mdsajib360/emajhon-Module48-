import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock } = props.productprops;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller} </small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                    onClick={()=>props.handleAddToCart(props.productprops)}
                    className="btn-regular"
                >{<FontAwesomeIcon icon={faShoppingCart} />}add to cart</button>
            </div>
        </div>
    );
};

//font awesome useing 
// <FontAwesomeIcon icon={faShoppingCart} />
//or, const element = <FontAwesomeIcon icon={faShoppingCart} /> , then use it dynamicly {}
export default Product;