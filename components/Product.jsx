/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { urlFor } from '../lib/client'
import Link from 'next/link'


const Product = ({product:{image ,name, slug, price }}) => {
  return (
    <div>
        <Link href={`/product/${slug.current}`} passHref>
            <div className='product-card'>
              {
               image && (
                <img src={ urlFor(image && image[0] ) } 
                                    width={250}
                                    height={250}
                                    className="product-image"
                                />
              )
              }
                <p className='product-name'>{name}</p>
                <p className='product-price'>$ {price}</p>
            </div>
        </Link>
    </div>
  )
}

export default Product