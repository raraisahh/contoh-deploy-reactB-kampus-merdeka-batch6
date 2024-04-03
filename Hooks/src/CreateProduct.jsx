/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Header from './Components/Header'
import Content from './Components/Content'
import ProductForm from './Components/ProductForm'
// import ListProduct from './Components/ListProduct'

function CreateProduct () {
    useEffect(() => {
        alert("Welcome");
    }, []);

    return (
        <>
            <Header />
            <Content />
            <ProductForm />
            {/* <ListProduct /> */}
        </>
    );
}
export default CreateProduct;