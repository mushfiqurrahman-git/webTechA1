import React from 'react';
//importing PRODUCTS json
import { PRODUCTS } from '../../products';
import { Product } from "./product";
//importing shop css
import "./shop.css"; 

export const Shop = () => {
    return (
        <div className='shop'>
            <div>
                <h3>All Products</h3>
            </div>
            <div className="products">
                {" "}
                {PRODUCTS.map((product) => (
                    //map function to populate product
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
}