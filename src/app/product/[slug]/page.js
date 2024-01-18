"use client"
import styles from "./../../page.module.css";
import Header from './../../components/header';
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import {  getProduct } from './../../utils/shopify'
import { populatePdp, product } from '@/redux/features/pdpSlice'
import { useSelector } from 'react-redux';

export default function Page({ params }) {
    //  return <div>My Post: {params.slug}</div>
    const dispatch = useDispatch();
    const product = useSelector((state) => state.pdp.value);

    useEffect(() => {
        const tt = getProduct(params.slug);
        tt.then((data) => {
            dispatch(populatePdp(data))
              console.log("hhhhhhhhhhhhh",data);
        });
        
    }, [params.slug]);

    return (
        <> <Header />
            <div id="REACT-PDP" className={styles.REACT_PDP}>

                <div className={styles.product__wrapper}>
                    <div className={styles.product__images}>
                        <div className={styles.main__images__wrapper}>
                            <img tabindex="0" id="Image-0" className={styles.featured__image} src={product?.product?.featuredImage?.url}  alt="Goddess Ribbed Go-To Tank - Black--0" />
                        </div>
                    </div>
                    <div className={styles.product__data} >
                        <div className={styles.title__wrapper}>
                            <div className={styles.product__badge}>Best Seller</div>
                            <h1 className={styles.productTitle}>{product?.product?.title}</h1>
                            <div className={styles.price__wrapper} >
                                <div className={styles.Price}>
                                    <span className={styles.product__price}>₹&zwnj;{product?.product?.priceRange?.maxVariantPrice?.amount}</span></div>
                            </div>
                        </div>
                        <div className={styles.variant_selections}>
                            <div>
                                <div class="product__right__description ">
                                    <div id="variant-selector" class="variant__swatches variant__swatches variant__swatches--color">
                                        <p className={styles.quickFitText}><span>Fit:</span>True to size—designed with light compression and no built-in bra</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.top_margin}>
                            <button className={styles.product__buy__button} type="button" tabindex="0">Add to bag</button>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.description__row}>
                    <div className={styles.col6}>
                        <h4 className={styles.h4__black}>description</h4>
                        <div className={styles.small_p}>
                            <p>{product?.product?.description}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>)
}
