/* eslint-disable no-unused-vars */
import React from 'react';
import styles from '../assets/css/Header.module.css'

const Header = () => {
  
    return (
    <>
        <header>
            <nav className={styles.navbar}>
                <div className="container mx-auto flex justify-between items-center">
                    <a className={styles.navbarBrand} href="#">Simple Header</a>
                    <button className="block lg:hidden border border-gray-500 rounded p-1 focus:outline-none">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <div className="hidden lg:flex flex-grow justify-end">
                        <ul className="flex">
                            <li className="nav-item">
                                <a className={styles.navLink} href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={styles.navLink} href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className={styles.navLink} href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className={styles.navLink} href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className={styles.navLink} href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
    );
}

export default Header;