import React from "react";
import NumberFormat from 'react-number-format';


const ProductCard = (props) => {
    const {product, currencyType, dollarValue} = props;

    let pricePrefix = "Rs ", productPrice = product.price;

    if (currencyType === "USD") {
        pricePrefix = "$ ";
        productPrice = product.price * dollarValue;
    }

    // const images = require.context('../static/img', true);
    // let productImage = images(`./${product.image}`);

    return (
        <div className="col-sm-4">
            <div className="card">
                <img className="card-img-top" src={product.image} 
                    alt={product.name} height="280"
                />
                <div className="card-body text-center border-top">
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
