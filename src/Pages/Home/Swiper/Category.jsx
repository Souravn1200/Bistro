import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'

import image1 from '../../../assets/assets/home/slide1.jpg'
import image2 from '../../../assets/assets/home/slide2.jpg'
import image3 from '../../../assets/assets/home/slide3.jpg'
import image4 from '../../../assets/assets/home/slide4.jpg'
import image5 from '../../../assets/assets/home/slide5.jpg'
import Pagetitle from '../../../Components/Pagetitle';

const Category = () => {
    return (
        
       <section>

        <Pagetitle subHeading="From 10 am to 11 pm" Heading="Order online"></Pagetitle>

         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
            <img src={image1} alt="" />
            <h2 className='text-3xl font-serif italic text-white text-center -mt-16 drop-shadow-md text-shadow'>Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={image2} alt="" />
            <h2 className='text-3xl font-serif italic text-white text-center -mt-16 drop-shadow-md text-shadow'>Pizza</h2>

        </SwiperSlide>
        <SwiperSlide>
            <img src={image3} alt="" />
            <h2 className='text-3xl font-serif italic text-white text-center -mt-16 drop-shadow-md text-shadow'>Soup</h2>

        </SwiperSlide>
        <SwiperSlide>
            <img src={image4} alt="" />
            <h2 className='text-3xl font-serif italic text-white text-center -mt-16 drop-shadow-md text-shadow'>Cake</h2>

        </SwiperSlide>
        <SwiperSlide>
            <img src={image5} alt="" />
            <h2 className='text-3xl font-serif italic text-white text-center -mt-16 drop-shadow-md text-shadow'>Salad</h2>
        </SwiperSlide>
      </Swiper>
       </section>
    );
};

export default Category;