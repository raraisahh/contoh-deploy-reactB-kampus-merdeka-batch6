/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from '../assets/css/ListProduct.module.css';

const ListProduct = () => {
    const [products, setProducts] = useState([]);

    // Fungsi untuk menambahkan produk ke dalam state
    const addProduct = (productData) => {
        setProducts([...products, productData]);
    };

    return (
    <>
        <div className={`mx-3 ${styles.listContainer}`}>
            <h2 className={styles.listTitle}>List Product</h2>
            <div className={styles.tableContainer}>
                <table className={`table-auto border-collapse ${styles.table}`}>
                    <thead className="border-y-2">
                        <tr>
                            <th className="px-4 py-2 text-start">No</th>
                            <th className="px-4 py-2 text-start">Product Name</th>
                            <th className="px-4 py-2 text-start">Product Category</th>
                            <th className="px-4 py-2 text-start">Product Freshness</th>
                            <th className="px-4 py-2 text-start">Product Price</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {/* Map untuk menampilkan data produk dalam tabel */}
                        {products.map((product, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{product.productName}</td>
                                <td className="px-4 py-2">{product.productCategory}</td>
                                <td className="px-4 py-2">{product.productFreshness}</td>
                                <td className="px-4 py-2">{product.productPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className= "rounded">
                <input className={styles.searchInput} type="text" value="Search by Product Name" placeholder="Search by Product Name" />
            </div>
            <div className={styles.btnContainer}>
                <button className={`px-4 ${styles.btnDelete}`}>Deletion</button>
                <button className={`px-4 ${styles.btnSearch}`}>Search</button>
            </div>
        </div>
    </>
    );
}

export default ListProduct;