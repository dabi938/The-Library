import React from 'react'
import "./BookCards.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import profilePic from "../assets/library-img.jpg"
// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Reviews = () => {

  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-4xl font-bold  text-center'>Feedbacks form Our</h2>
        <div>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}className="mySwiper">
                <SwiperSlide className='px-12 mt-5'>
                   <div className='text-amber-500 flex gap-2'>
                    <FaStar/><FaStar/><FaStar/><FaStar/>
                   </div>
                   {/* text */}
                   <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rem pariatur repellendus iusto nostrum. Obcaecati, 
                            vitae voluptas neque unde deleniti architecto alias cupiditate omnis. Dolorem distinctio perspiciatis ipsum soluta et?
                        </p>
                        <div className='w-10 h-10'>
                            <img className='w-10 h-10 rounded-3xl mt-5' src={profilePic} alt="Dabi" />  
                        </div>
                        <h5 className='text-lg font-medium mt-2 text-blue-700'>Dabi Haile</h5>
                        <p className='text-base text-blue-700'>Software Engineering Student</p>
                   </div>
                </SwiperSlide>
                <SwiperSlide className='px-12 mt-5'>
                   <div className='text-amber-500 flex gap-2'>
                    <FaStar/><FaStar/><FaStar/><FaStar/>
                   </div>
                   {/* text */}
                   <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rem pariatur repellendus iusto nostrum. Obcaecati, 
                            vitae voluptas neque unde deleniti architecto alias cupiditate omnis. Dolorem distinctio perspiciatis ipsum soluta et?
                        </p>
                        <div className='w-10 h-10'>
                            <img className='w-10 h-10 rounded-3xl mt-5' src={profilePic} alt="Dabi" />  
                        </div>
                        <h5 className='text-lg font-medium mt-2 text-blue-700'>Dabi Haile</h5>
                        <p className='text-base text-blue-700'>Software Engineering Student</p>
                   </div>
                </SwiperSlide>
                <SwiperSlide className='px-12 mt-5'>
                   <div className='text-amber-500 flex gap-2'>
                    <FaStar/><FaStar/><FaStar/><FaStar/>
                   </div>
                   {/* text */}
                   <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora rem pariatur repellendus iusto nostrum. Obcaecati, 
                            vitae voluptas neque unde deleniti architecto alias cupiditate omnis. Dolorem distinctio perspiciatis ipsum soluta et?
                        </p>
                        <div className='w-10 h-10'>
                            <img className='w-10 h-10 rounded-3xl mt-5' src={profilePic} alt="Dabi" />  
                        </div>
                        <h5 className='text-lg font-medium mt-2 text-blue-700'>Dabi Haile</h5>
                        <p className='text-base text-blue-700'>Software Engineering Student</p>
                   </div>
                </SwiperSlide>
               
               
            </Swiper>
            
        </div>
    </div>
  )
}
export default Reviews
