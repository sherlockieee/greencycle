import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

export default function ProductScreen(props) {
    const [product, setProduct] = useState()
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            const products = res.data;
            const product = products.find(product => product.id.toString() === props.match.params.id);
            setProduct(product);
        }).catch(err => {
            console.log(err)
        });
    }, [props.match.params.id])
    
    return (
        <>
            {product && 
            (<div className='row'>
                <div className='col-2'>
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className='col-1'>
                    <h1>{product.title}</h1>
                    <p>Rating</p>
                    <h2>{product.price}</h2>
                    <h2>Description:</h2>
                    <p>{product.description}</p>
                </div>
                <div className='col-1'>
                    <h2>{product.price}</h2>
                    <h2>Status:</h2>
                    <p>Available</p>
                    <button class='btn btn--primary btn--block'>Add to cart</button>
                </div>
            </div>
            )}
        </>
    )
}
