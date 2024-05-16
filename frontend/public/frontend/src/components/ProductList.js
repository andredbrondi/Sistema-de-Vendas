import React, { useEffect, useState } from 'react';
import axios from '../services/api';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error('There was an error fetching the products!', error));
    }, []);

    const addToCart = (product) => {
        // Add product to cart logic
        console.log('Product added to cart:', product);
    };

    return (
        <div className="product-list">
            <h3>Produtos</h3
