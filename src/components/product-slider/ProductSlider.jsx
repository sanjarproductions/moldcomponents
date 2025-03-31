// import React, { useRef, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ProductItem from '../product-item/ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './ProductSlider.css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ProductSlider = ({ categoryData }) => {
    // console.log(categoryData)

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                className="mySwiper"

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {
                    categoryData.allRefinedProducts.map(i =>
                        <SwiperSlide key={i._id}>
                            <ProductItem productItemData={i}/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}

export default ProductSlider
