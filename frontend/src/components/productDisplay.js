import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import './productDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


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
        <div className='main display-products-grid'>
            {products.map(product => {
                return (
                    <Link to={`products/${product.id}`}>
                    <div key={product.id} className='display-products-card'>
                        <div className='display-products-image-container'>
                            <img className='image' src={product.image} alt={product.title}/>
                        </div>
                        <div className='display-products-text-container'>
                            <h3 className='display-products--product-title'>{product.title}</h3>
                            <p className='display-products--product-price'>${product.price}</p>
                            <div className='display-products--product-rating'>
                                {[...Array(5)].map((val, idx) => 
                                    <FontAwesomeIcon key={idx} icon={faStar} className='display-products--rating-stars'/>
                                )}
                            </div>
                            <p className='display-products--product-description'>{product.description}</p>
                        </div>
                    </div>
                    </Link>
                )
                
            })}
        </div>
    )
}
