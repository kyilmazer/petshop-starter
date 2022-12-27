import React, {useState} from 'react';
// import next Image
import Image from 'next/image';
// import images
import Pet1Image from '../public/img/pets/1.png';
import Pet2Image from '../public/img/pets/2.png';
import Pet3Image from '../public/img/pets/3.png';
import Pet4Image from '../public/img/pets/4.png';
import Pet5Image from '../public/img/pets/5.png';
import Pet6Image from '../public/img/pets/6.png';
import Pet7Image from '../public/img/pets/7.png';
import Pet8Image from '../public/img/pets/8.png';
import Pet9Image from '../public/img/pets/9.png';
import Pet10Image from '../public/img/pets/10.png';
import Pet11Image from '../public/img/pets/11.png';
import Pet12Image from '../public/img/pets/12.png';
import Badge from '../public/img/pets/badge.svg';

const pets = [
  {
    id: 1,
    category: 'cat',
    name: 'kyba',
    image: Pet1Image
  },
  {
    id: 2,
    category: 'bird',
    name: 'rotty',
    image: Pet2Image
  },
  {
    id: 3,
    category: 'fox',
    name: 'fexxie',
    image: Pet3Image
  },
  {
    id: 4,
    category: 'cat',
    name: 'kirra',
    image: Pet4Image
  },
  {
    id: 5,
    category: 'hamster',
    name: 'dinno',
    image: Pet5Image
  },
  {
    id: 6,
    category: 'parrot',
    name: 'paco',
    image: Pet6Image
  },
  {
    id: 7,
    category: 'parrot',
    name: 'pavo',
    image: Pet7Image
  },
  {
    id: 8,
    category: 'cat',
    name: 'ynna',
    image: Pet8Image
  },
  {
    id: 9,
    category: 'lion',
    name: 'hera',
    image: Pet9Image
  },
  {
    id: 10,
    category: 'bird',
    name: 'dimmy',
    image: Pet10Image
  },
  {
    id: 11,
    category: 'dog',
    name: 'jasper',
    image: Pet11Image
  },
  {
    id: 12,
    category: 'hamster',
    name: 'syu',
    image: Pet12Image
  }
]


const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[10]);
  const [petIndex, setPetIndex] = useState(10);
  
  const getPetDetails =  (id) => {
    const pet = pets.find((pet) => {
      return pet.id === id;
    });
    setPetDetails(pet);
  };

  return <section className='bg-pets bg-center py-6 overflow-hidden'>
    <div className='flex flex-col lg:flex-row'>
      {/* badge */}
      <div className='hidden xl:flex xl:w-[30%] xl:pl-[160px]'>
        <Image src={Badge} width={230} height={227} alt=''></Image>
      </div>
      {/* pets */}
      <div className='flex-1 flex flex-col lg:flex-row'>
        {/* pet detail */}
        <div className='lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0'>
          <div className='text-center text-white'>
            {/* category */}
            <div className='text-[32px] capitalize'>{petDetails.category}</div>
            {/* name */}
            <div className='uppercase text-[17px] mb-1'>
              ({petDetails.name})
            </div>
            {/* image */}
            <div className='w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full'>
              <Image src={petDetails.image} alt='' width={150} height={150}></Image>
            </div>
          </div>
        </div>
        {/* pet list */}
        <div className='relative lg:w-[60%] flex-1 flex items-center'>
          <div className='flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6'>
            {pets.map((pet, index) => {
              return (
              <div onClick={() => 
                {
                  getPetDetails(pet.id);
                  setPetIndex(index);
                }
                } className='cursor-pointer relative' key={index}>
                {/* overlay */}
                <div className={`w-full h-full absolute rounded-full ${petIndex === index ? 'border-2 border-white': 'bg-black/40'}`}></div>
                <Image 
                src={pet.image} 
                alt='' 
                width={93} 
                height={95} 
                draggable='false'></Image>
                </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Pets;
