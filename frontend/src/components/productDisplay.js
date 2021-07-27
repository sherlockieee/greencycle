import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';


export default function ProductDisplay() {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            const products = res.data;
            setProducts(products);
        }).catch(err => {
            console.log(err)
        });
    }, [])


    return (
        <div>
            {products.map(product => {
                return (
                    <div>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <p>{product.category}</p>
                        {/* <Image src={product.image} alt={product.title} rounded fluid></Image> */}
                    </div>
                )
                
            })}
        </div>
    )
}
