/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link'

const FooterBanner = ({footerBanner: {discount,desc,largeText1,largeText2,smallText,midText,product,buttonText,image,saleTime }}) => {
  return (
    <div className='footer-banner-container'>
        <div className='banner-desc'>
            <div className='left'>
                <p>{discount}</p>
                <p>{largeText1}</p>
                <p>{largeText2}</p>
                <p>{saleTime}</p>
            </div>
            <div className='right'>
                <p>{smallText}</p>
                <p>{midText}</p>
                <p>{desc}</p>
                <Link href={`/product/${product.toLowerCase()}` } passHref>
                    <button type='button'>{buttonText}</button>
                </Link>
            </div>
            <img src={urlFor(image)} className="footer-banner-image"  />
        </div>
    </div>
  )
}

export default FooterBanner