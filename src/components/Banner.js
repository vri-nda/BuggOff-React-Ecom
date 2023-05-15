import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
  return (
    <div className='relative w-[90vw] mt-4'>
        {/* <div className='absolute w-full h-10 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' /> */}
        <Carousel  autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={true} interval={2000}>
        <div>
            <img loading='lazy' src="/b1.jpg"  />
        </div>
        <div>
            <img loading='lazy' src="/b2.jpg" />
        </div>
        <div>
            <img loading='lazy' src="/b3.jpg" />
        </div>
          </Carousel>  
    </div>
  )
}

export default Banner