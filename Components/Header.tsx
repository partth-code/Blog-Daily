import React from 'react';
import { assets } from '@/Assets/assets';
import Image from 'next/image';

const Header = () =>{
    return(
        <div className='px-5 py-5 md:px-13 lg:px-28'>
            <div className="flex justify-between items-center">
                <Image src={assets.logo} alt='' width={180} className='w-[130px] sm:w-auto'/>
            </div>

        </div>
    )
}

export default Header;