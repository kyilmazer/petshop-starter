import React from 'react';
// import next image
import Image from 'next/image';

//import swiper react components
import { Swiper, SwiperSlide} from 'swiper/react';

//import required modules
import { Navigation } from 'swiper';
//import swiper slides
import 'swiper/css/navigation';
import 'swiper/css';

//import images
import Service1Icon from '../public/img/services/service-icon1.svg';
import Service2Icon from '../public/img/services/service-icon2.svg';
import Service3Icon from '../public/img/services/service-icon3.svg';

const services = [
  {
    image: Service1Icon,
    name: 'Pharmacy',
    description: 
    'Lorem ipsum dolor sit amet. Sit quam molestiae ea cumque aspernatur' +
     'ut natus facilis? Et cumque quasi non voluptatibus impedit et nobis' +
      'tempore ut facere omnis et ipsa corrupti qui voluptatem omnis rem',
      btnText: 'Explore'
  },
  {
    image: Service2Icon,
    name: 'Breed-specific Haircuts',
    description: 
    'Lorem ipsum dolor sit amet. Sit quam molestiae ea cumque aspernatur' +
     'ut natus facilis?',
     btnText: 'Explore'
  },
  {
    image: Service3Icon,
    name: 'Cloths',
    description: 
    'Lorem ipsum dolor sit amet. Sit quam molestiae ea cumque aspernatur' +
     'ut natus facilis? Et cumque quasi non voluptatibus impedit et nobis' +
      'tempore ut facere omnis et ipsa corrupti qui voluptatem omnis rem',
      btnText: 'Explore'
  }
];
const ServiceSlider = () => {
  return  (
  <Swiper 
    slidesPerView={1} 
    spaceBetween={30} 
    navigation={true} 
    modules={[Navigation]} 
    breakpoints={{
      768: {
        slidesPerView: 2
      }
  }}
  className='serviceSlider min-h-[680px]'
  > 
    {
    services.map((service, index) => {
      return <SwiperSlide className='border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8' key={index}>
        <Image className='mb-9' src={service.image}/>
        <div className='text-[26px] font-medium mb-4'>{service.name}</div>
        <div className='text-[20px] mb-8'>{service.description}</div>
        <button className='btn btn-primary'>{service.btnText}</button>
      </SwiperSlide>;
    })
    }
  </Swiper>
  );
};

export default ServiceSlider;
