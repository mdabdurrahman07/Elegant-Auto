import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper , SwiperSlide } from 'swiper/react';
import { Navigation, Pagination , Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

import img_one from '../../public/ford Slider/ford_one.jpg'
import img_two from '../../public/ford Slider/Ford-Endeavour-New-Campaign.jpg'
import img_three from '../../public/ford Slider/ford_two.jpg'

const Ford = () => {
    const ford = useLoaderData()
    console.log(ford)
    return (
        <div className='my-7'>
        <h1 className='text-6xl font-bold text-center mb-8'>Welcome To Ford</h1>
    <Swiper
spaceBetween={60}
centeredSlides={true}
autoplay={{
delay: 2500,
disableOnInteraction: false,
}}
pagination={{
clickable: true,
}}
navigation={true}
modules={[Autoplay, Pagination, Navigation]}
className="mySwiper"
>
<SwiperSlide><img  src={img_one} alt="" /></SwiperSlide>
<SwiperSlide><img  src={img_two} alt="" /></SwiperSlide>
<SwiperSlide><img  src={img_three} alt="" /></SwiperSlide>


</Swiper>

    <div className='max-w-6xl mx-auto  my-5'>
    <div>
        <h1 className='text-4xl font-semibold text-center'>Our Available Cars </h1>
    </div>
  <div className='max-w-5xl mx-auto my-8'>
  <div className='grid grid-cols-1  md:grid-cols-2 gap-5'>
        {
            ford.map(fordcars => <div key={fordcars._id} className="card card-compact  bg-base-100 shadow-xl">
            <figure><img className='h-80' src={fordcars.photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold">{fordcars.brandname}</h2>
              <p className='font-medium text-lg'>{fordcars.description}</p>
              <p className='font-medium text-xl'>Model  <span className='font-bold ml-2'>{fordcars.name}</span></p>
              <p className='font-medium text-xl'>Type <span className='font-bold ml-2'>{fordcars.type}</span></p>
              <p className='font-medium text-xl'>Price <span className='font-bold ml-2'>{fordcars.price} BDT</span></p>
              <p  className='font-medium text-xl'>Rating  <span className='font-bold ml-2 mr-2'>{fordcars.rating}</span> Out of 10</p>
              <div className="flex justify-center items-center gap-3 p-3">
               <Link to={`/CarDetails/${fordcars._id}`}> <button className="px-5 py-2 bg-black text-white font-bold text-xl rounded-xl">Details </button></Link>
                <button className="px-5 py-2 bg-black text-white font-bold text-xl rounded-xl">Update </button>
              </div>
            </div>
          </div>)
        }
    </div>
  </div>
    </div>
</div>
    );
};

export default Ford;
