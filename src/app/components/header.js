'use client'
import Image from 'next/image'
import styles from './../page.module.css'
import { getProducts, getProduct, LoginCustomer, getCustomerdetails } from './../utils/shopify'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import React, { useState } from "react";
import { populateProducts, product, } from '@/redux/features/productSlice'
import { populateLogIn } from '@/redux/features/authSlice'
import Login from './loginModal';
import Modal from "./modal";

export default function Header() {
    // console.log(getProducts());
    const [isModalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const dispatch = useDispatch();
    const customer = useSelector((state) => state.auth);

    useEffect(() => {
        const tt = getProducts();
        tt.then((data) => {
            dispatch(populateProducts(data.products.edges))
        });

    }, []);

    useEffect(() => {
        if (customer.value.isAuth) {
            setModalOpen(false)
        }

    }, [customer.value.isAuth])

    const loginCustomer = () => {
        const yy = LoginCustomer({ email, pass });
        yy.then((data) => {
            const aat = data?.customerAccessTokenCreate?.customerAccessToken?.accessToken;
            const ci = getCustomerdetails({ at: aat })
            ci.then((data) => {
                dispatch(populateLogIn({ ...data, accesstoken: aat, isAuth: true }))
            });
        })
    }
    return (
        <header className={styles.header}>
            <a href="/">
                <svg class="alo-logo__svg" viewBox="0 0 71 48" width="71" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.826 19.591h5.771v27.43h-5.77v-1.928A13.973 13.973 0 0114.298 48C6.414 48 0 41.409 0 33.306c0-8.103 6.414-14.694 14.299-14.694 3.193 0 6.145 1.082 8.527 2.907zm-.145 13.715c0-4.861-3.76-8.816-8.382-8.816-4.623 0-8.382 3.955-8.382 8.816 0 4.862 3.76 8.816 8.382 8.816s8.382-3.954 8.382-8.816zM39.434 47.02h-5.906V0h5.906zm2.969-13.714c0-8.103 6.414-14.694 14.298-14.694C64.586 18.612 71 25.203 71 33.306 71 41.41 64.586 48 56.701 48s-14.298-6.591-14.298-14.694zm5.916 0c0 4.862 3.76 8.816 8.382 8.816 4.623 0 8.382-3.954 8.382-8.816 0-4.861-3.76-8.816-8.382-8.816s-8.382 3.955-8.382 8.816z"></path>
                    <desc>Alo</desc>
                </svg>
            </a>
            <div className={styles.headerSignin}>
                {!customer.value.isAuth ? <><span onClick={() => setModalOpen(true)} className={styles.authAction}>
                    <button aria-label="Account" data-logged-out="true" class="account-icon" ><svg class="icon-account-static" xmlns="http://www.w3.org/2000/svg" width="20" height="19"><g clip-path="url(#clip-6088CFFE-2A12-45B2-AE04-3EA94A672749)"><path fill="#000" stroke="#000" stroke-miterlimit="50" d="M10 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 18a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path></g></svg>
                    </button>
                    SignIn
                </span></>
                    :
                    <><span>{customer.value?.customer?.firstName}</span> <span className={styles.authAction} >Logout</span></>}

            </div>
            {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                    <div className={styles.modalZ}>
                        <h2 className={styles.signInheader}>Sign In</h2>
                        <div className={styles.signIndes}>Sign in so you can save items to your wishlist, track your orders, and checkout faster!</div>
                        <input className={styles.singninInput} onKeyUp={(e) => setEmail(e.target.value)} type='text' placeholder='email' /><br /><br />
                        <input className={styles.singninInput} onKeyUp={(e) => setPass(e.target.value)} type='password' placeholder='password' /><br />
                        <button className={styles.singninButton} onClick={loginCustomer}>Login</button>
                    </div>
                </Modal>
            )}
            {/* <Login /> */}
        </header>
    )
}
