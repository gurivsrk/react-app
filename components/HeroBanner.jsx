/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { client } from '../lib/client'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{heroBanner.smallText}</p>
            <h3 >{heroBanner.medText}</h3>
            <h1> {heroBanner.largeText1 } </h1>
            <img src={urlFor(heroBanner.image)} alt="Liquor bottles" className='hero-banner-image'/>
        </div>
        <div>
            <Link href={`/product/${heroBanner.product}`} passHref>
                <button className='button'>{heroBanner.buttonText}</button>
            </Link>
        </div> 
        <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
        </div>
    </div>
  )
}

export default HeroBanner