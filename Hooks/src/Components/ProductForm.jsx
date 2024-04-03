/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import styles from '../assets/css/ProductForm.module.css';
import { customAlphabet } from 'nanoid';

const ProductForm = () => {
    const generateId = customAlphabet('1234567890', 4);
    
    const [products, setProducts] = useState([
        {
            id: 1234,
            productName: "Shirt",
            productCategory: "One",
            productFreshness: "Brand New",
            productPrice: "100000",
        },
        {
            id: 5678,
            productName: "T-shirt",
            productCategory: "Two",
            productFreshness: "Brand New",
            productPrice: "150000",
        },
    ]);
    
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productFreshness, setProductFreshness] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const addDesc = useRef(null);
    const myFile = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);



    useEffect(() => {
        setProducts(products);
    }, [products]);

    const handleSubmit = () => {
        if (productName === "" || productCategory === "" || productFreshness === "" || productPrice === "") {
            alert("Please fill in all fields");
            return;
        }

        if (isEditing) {
            const updatedProducts = products.map((product) => {
                if (product.id === editId) {
                    return {
                        ...product,
                        productName: productName,
                        productCategory: productCategory,
                        productFreshness: productFreshness,
                        productPrice: productPrice,
                    };
                }
                return product;
            });

            setProducts(updatedProducts);
            setIsEditing(false);
            setEditId(null);
        } else {
            const newProduct = {
                id: generateId(),
                productName: productName,
                productCategory: productCategory,
                productFreshness: productFreshness,
                productPrice: productPrice,
            };
    
            setProducts([...products, newProduct]);
        }

        setProductName("");
        setProductCategory("");
        setProductFreshness("");
        setProductPrice("");
        addDesc.current.value = "";
        myFile.current.value = "";
    }

    const deleteData = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");

        if (confirmDelete) {
            const newProducts = products.filter((products) => products.id!== id);
            setProducts(newProducts);
        }
        else {
            return;
        }
    }

    const editData = (id) => {
        const productToEdit = products.find((product) => product.id === id);
        if (productToEdit) {
            setProductName(productToEdit.productName);
            setProductCategory(productToEdit.productCategory);
            setProductFreshness(productToEdit.productFreshness);
            setProductPrice(productToEdit.productPrice);
            setIsEditing(true);
            setEditId(id);
        }
    }

    return (
    <>
        <div className={`container mx-auto lg:w-7/12 md:w-10/12 ${styles.container}`}>
            <form className={styles.formContainer}>
                <div className="w-full lg:w-8/12 md:w-10/12">
                    <h4 className={styles.formTitle}>Detail Product</h4>

                    {/* Product Name */}
                    <div className={styles.formField}>
                        <label 
                            htmlFor="productName" 
                            className={styles.formLabel}
                        >
                            Product name
                        </label>
                        <input 
                            type="text" 
                            value={productName} 
                            onChange={(e) => setProductName(e.target.value)}
                            className={`w-6/12 ${styles.formInputName}`}
                        />
                    </div>

                    {/* Product Category  */}
                    <div className={styles.formField}>
                        <label 
                            htmlFor="productCategory" 
                            className={styles.formLabel}
                        >
                            Product Category
                        </label>
                        <select 
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)} 
                            className={`w-5/12 ${styles.formInputCategory}`}
                        >
                            <option selected disabled value="">Choose...</option>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                        </select>
                    </div>

                    {/* Image of Product */}
                    <div className={styles.formField}>
                        <label 
                            htmlFor="myfile" 
                            className={styles.formLabel}
                        >
                            Image of Product
                        </label>
                        <input 
                            type="file" 
                            id="myfile" 
                            name="myfile" 
                            ref={myFile}
                            className={`w-4/12 file:border-0 file:py-1 file:px-2 file:bg-blue-500 file:text-white ${styles.formInputFile}`} 
                            required multiple 
                        />
                    </div>

                    {/* Product Freshness */}
                    <div className={styles.formFieldFreshness}>
                        <fieldset className="mb-2">
                            <legend 
                                className={styles.formLabel}
                            >
                                Product Freshness
                            </legend>
                            <div className="flex items-center">
                                <input 
                                    type="radio" 
                                    id="brandNew"
                                    value="Brand New"
                                    checked={productFreshness === 'Brand New'}
                                    onChange={(e) => setProductFreshness(e.target.value)}
                                    className="mr-2" 
                                />
                                <label htmlFor="brandNew">
                                    Brand New
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input 
                                    type="radio" 
                                    id="secondHand" 
                                    value="Second Hand" 
                                    name="productFreshness" 
                                    checked={productFreshness === 'Second Hand'}
                                    onChange={(e) => setProductFreshness(e.target.value)}
                                    className="mr-2"
                                />
                                <label htmlFor="secondHand">
                                    Second Hand
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input 
                                    type="radio" 
                                    id="refurbished" 
                                    value="Refurbished" 
                                    name="productFreshness" 
                                    checked={productFreshness === 'Refurbished'}
                                    onChange={(e) => setProductFreshness(e.target.value)}
                                    className="mr-2"
                                />
                                <label htmlFor="refurbished">
                                    Refurbished
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    {/* Additional Description */}
                    <div className={styles.formField}>
                        <label 
                            htmlFor="addDesc" 
                            className={styles.formLabel}
                        >
                            Additional Description
                        </label>
                        <textarea 
                            className={styles.formTextarea} 
                            id="addDesc" 
                            rows="4"
                            ref={addDesc}
                            required>
                        </textarea>
                    </div>

                    {/* Product Price */}
                    <div className={styles.formField}>
                        <label 
                            htmlFor="productPrice" 
                            className={styles.formLabel}
                        >
                            Price
                        </label>
                        <input 
                            className={styles.formInputPrice} 
                            type="number" 
                            value={productPrice} 
                            placeholder="   $ 1" 
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </div>

                    {/* Submit */}
                    <div className={styles.formButton}>
                        <button 
                            className={styles.buttonSubmit}  
                            type="button"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>

        {/* List Product */}

        <div className={`mx-3 ${styles.listContainer}`}>
            <h2 className={styles.listTitle}>List Product</h2>
            <div className={styles.tableContainer}>
                <table className={`table-auto border-collapse mb-12 ${styles.table}`}>
                    <thead className="border-y-2">
                        <tr>
                            <th className="px-4 py-2 text-start">No</th>
                            <th className="px-4 py-2 text-start">Product Name</th>
                            <th className="px-4 py-2 text-start">Product Category</th>
                            <th className="px-4 py-2 text-start">Product Freshness</th>
                            <th className="px-4 py-2 text-start">Product Price</th>
                            <th className="px-4 py-2 text-start">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {/* Map untuk menampilkan data produk dalam tabel */}
                        {products.map((products, index) => (
                            <tr key={products.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="px-4 py-2">{products.id}</td>
                                <td className="px-4 py-2">{products.productName}</td>
                                <td className="px-4 py-2">{products.productCategory}</td>
                                <td className="px-4 py-2">{products.productFreshness}</td>
                                <td className="px-4 py-2">{products.productPrice}</td>
                                <td>
                                    {/* Button Delete */}
                                    <button 
                                        type="button" 
                                        className="bg-red-500 hover:bg-red-700 text-white font-md py-1 px-2 rounded" 
                                        onClick={() => deleteData(products.id)}
                                    >
                                        Delete
                                    </button>
                                    
                                    {/* Button Edit */}
                                    <button 
                                        type="button" 
                                        className="bg-green-500 hover:bg-green-700 text-white font-md py-1 px-2 rounded" 
                                        onClick={() => editData(products.id)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    );
}

export default ProductForm;