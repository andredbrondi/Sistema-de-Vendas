import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Inventory from './components/Inventory';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>EcoPower Solutions</h1>
                <h2>Sistema de Vendas de Energia Sustentável</h2>
            </header>
            <main>
                <ProductList />
                <Cart />
                <Inventory />
            </main>
        </div>
    );
}

export default App;
