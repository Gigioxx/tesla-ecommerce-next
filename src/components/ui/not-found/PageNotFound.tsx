import Link from 'next/link';
import Image from 'next/image';

import { titleFont } from '@/config/fonts';

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle'>
      <div className='text-center px-5 mx-5'>
        <h2 className={`${titleFont.className} antialised text-9xl`}>404</h2>
        <p className='font-semibold text-xl'>Whoops! Requested page is not found</p>
        <p className='font-light'>
          <span>You can go back to </span>
          <Link className='font-normal hover:underline transition-all' href='/'>
            Home
          </Link>
        </p>
      </div>

      <div className='px-5 mx-5'>
        <Image
          alt='Starman'
          className='p-5 sm:p-0'
          height={550}
          src='/imgs/starman_750x750.png'
          width={550}
        />
      </div>
    </div>
  );
};
