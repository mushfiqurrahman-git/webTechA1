import React from 'react'
import { PRODUCTS } from '../../products'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const { id } = useParams();
    console.log(id)
    console.log(PRODUCTS);
    const product = PRODUCTS.find((product) => product.id == id);
    const {productImage,productName,price}=product
    console.log(product);

    return (
        <section className='section product'>
            <img src={productImage}/>
            <h3>{productName}</h3>
            <p>$ {price}</p>
        </section>
    )
}
