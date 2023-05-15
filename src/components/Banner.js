import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
  return (
    <div className='relative w-[66vw] mt-[1rem]'>
        {/* <div className='absolute w-full h-10 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' /> */}
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={2000}>
        <div>
            <img loading='lazy' src="/imgc2.png" />
        </div>
        <div>
            <img loading='lazy' src="/imgc1.png" />
        </div>
        <div>
            <img loading='lazy' src="/banner2.jpg" />
        </div>
        </Carousel>
    </div>
  )
}

export default Banner