"use client"
import Image from 'next/image'
import styles from './../page.module.css'
// import LogIn from './log-in'
// import { useSelector } from 'react-redux'
import Header from './../components/header'
import { useSelector } from 'react-redux';

export default function Page() {
    const products = useSelector((state) => state.product.value);

     const list= products.map((data)=> 
     
     <a href={`product/${data.node?.handle}`} className={styles.product_single_item}>
                    <div className={styles.product_tab_thumbnail_wrap}>
                        <img alt={data.node?.featuredImage?.altText} loading="lazy" src={data.node?.featuredImage?.url} className={styles.deal_image} />
                        <div className={styles.product_wishlist}>
                            <img alt="" loading="lazy" src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9df775b939f51a0b22f6d_Icon.svg" />
                        </div>
                    </div>
                    <div class="product-content">
                        <div className={styles.product_title_wrap}>
                            <h3 className={styles.product_title}>{data.node?.title}</h3>
                            <div className={styles.product_price}>
                                <span className={styles.text_span}>$</span>{data.node?.priceRange?.minVariantPrice?.amount}<span className={styles.text_span}>.00</span>
                            </div>
                        </div>
                        <div className={styles.product_color}>{data.node?.description}</div>
                        <div className={styles.product_rating}>
                            <div className={styles.star_wrap}>
                                <img alt="" loading="lazy" src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" className={styles.product_star} />
                                <img alt="" loading="lazy" src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" className={styles.product_star} />
                                <img alt="" loading="lazy" src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" className={styles.product_star} />
                                <img alt="" loading="lazy" src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" className={styles.product_star} />
                                <img alt="" loading="lazy" src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg" className={styles.product_star} />
                            </div>
                            <div className={styles.total_rating}>(121)</div>
                        </div>
                        {/* <div class="is-magnetic">
                            <div className={styles.btn_wrapper}>
                                <a href="#" className={styles.primary_button_add} >
                                    <div className={styles.button_content}>
                                        <div className={styles.button_color}>Add to Cart</div>
                                    </div>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </a>);
     
    return (
        <>
            <Header />
            {/* {JSON.stringify(products)}  */}
            <div className={styles.products_tab}>
                {list}
            </div>
        </>
    )
}
