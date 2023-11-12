import React, { useState } from 'react';
import Pagetitle from '../../../Components/Pagetitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
// import required modules
import { Navigation } from 'swiper/modules';

import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [review, setReview] = useState([]);

    useState(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then( data => setReview(data))
    },[])
    return (
        <section className='mt-10' >
            <Pagetitle Heading="Testimonials" subHeading="What people say"></Pagetitle>

            <div>

                
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-20 flex flex-col-2">

                {
                    review.map(review => <SwiperSlide key={review._id}>



                            <div className='flex flex-col items-center mx-24 my-10 text-center font-serif'> 

                            <p className='text-3xl'>
                                <FaQuoteLeft/>
                               </p>

                                <p className='mt-10 mb-10' >
                                {
                                    <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                  />
                                }
                                </p>
                               
                                <p className='text-xl'>{review.details}</p>
                                <p className='text-2xl mt-4 text-yellow-500'>{review.name}</p>
                            </div>

                    </SwiperSlide>)
                }
                    
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;