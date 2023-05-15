import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-10 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={true} showThumbs={false} interval={2000}>
        <div>
            <img className='h-[90vh] aspect-video ' loading='lazy' src="/hero1.jpg" />
        </div>
        <div>
            <img className='h-[90vh] aspect-video ' loading='lazy' src="/hero2.jpg" />
        </div>
        <div>
            <img className='h-[90vh] aspect-video ' loading='lazy' src="/hero3.jpg" />
        </div>
        </Carousel>
    </div>
  )
}

export default Banner