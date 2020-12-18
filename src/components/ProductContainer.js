import React, {useState, useEffect} from "react";

// import logo from "../static/img/logo.png";
import {GET_CURRENCY_VALUE} from "../actions/ActionTypes";
import ProductAction from "../actions/ProductAction";
import productList from "../utils/Product.json";
import ProductCard from "./ProductComponents/ProductCard";


const Product = () => {
    const [currencyType, setCurrencyType] = useState("INR");
    const [dollarValue, setDollarValue] = useState(0.0135891518);

    useEffect(() => {
        getCurrencyValue();
    }, [currencyType]);

    const getCurrencyValue = () => {
        ProductAction({type: GET_CURRENCY_VALUE})
        .then(response => response.json())
        .then(data => {
            setDollarValue(data.rates.USD);
        })
        .catch(error => console.log(error))
    };

    const renderProducts = () => {
        return productList.map(product => (
            <ProductCard key={product.id}
                product={product} 
                dollarValue={dollarValue} 
                currencyType={currencyType}
            />
        ));
    };

    return (
        <section className="container-fluid py-3">
            <div className="card border border-info">
                <div className="card-header bg-info text-white py-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <label className="mb-0">Product List</label>
                        <div>
                            <label className="mb-0 pr-2">Currency </label>
                            <select className="border rounded bg-white p-1"
                                value={currencyType}
                                onChange={(e) => setCurrencyType(e.target.value)}
                            >
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        {renderProducts()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;
