import React from 'react';
// import next image
import Image from 'next/image';
//import images
import Img1 from '../public/img/adoption/img1.png';

const Adoption = () => {
  return <section className='bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex'>
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16">
      {/* image */}
      <div className='flex-1 mb-6 lg:mb-0'>
        <Image src={Img1} style={{width: '100%', height: '100%'}} alt=''></Image>
      </div>
      {/* text */}
      <div className='flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none'>
        <h2 className='h2 mb-6'>Making pet parenting easy fro everyone</h2>
        <p className='mb-6'>
        Lorem ipsum dolor sit amet. Sit quam molestiae ea cumque aspernatur
     ut natus facilis? Et cumque quasi non voluptatibus impedit et nobis
      tempore ut facere omnis et ipsa corrupti qui voluptatem omnis rem
        </p>
        <ul className='mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4'>
          <li>Adoption</li>
          <li>Frozen Raw</li>
          <li>Next Day Delivery</li>
        </ul>
        <button className='btn btn-primary mx-auto lg:mx-0'>Explore</button>
      </div>
    </div>
  </section>;
};

export default Adoption;
