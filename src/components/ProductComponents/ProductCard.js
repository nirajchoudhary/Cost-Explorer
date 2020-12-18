import React from "react";
import NumberFormat from 'react-number-format';

import './ProductCard.css';


const ProductCard = (props) => {
    const {product, currencyType, dollarValue} = props;

    let pricePrefix = "Rs ", productPrice = product.price;

    if (currencyType === "USD") {
        pricePrefix = "$ ";
        productPrice = product.price * dollarValue;
    }

    return (
        <div className="col-sm-4">
            <div className="card zoom">
                <img className="card-img-top product-image" 
                    src={product.image} alt={product.name}
                />
                <div className="card-body text-center border-top bg-light p-3">
                    <div className="card-title">
                        <h5>{product.name}</h5>
                    </div>
                    <div className="card-subtitle">
                        <NumberFormat value={productPrice} 
                            displayType={'text'} decimalScale={2} 
                            thousandSeparator={true} prefix={pricePrefix}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
