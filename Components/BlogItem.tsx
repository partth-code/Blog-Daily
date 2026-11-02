import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { assets, blog_data } from '@/Assets/assets';
import { title } from 'process';

type BlogItemProps = {
    title:string;
    description:string;
    category:string;
    image:StaticImageData;
    id:number;
}
const BlogItem = ({title,description,category,image,id}:BlogItemProps) =>{
    return(
        <div className='max-w-[300px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
            <Link href={`/blogs/${id}`}>
            <Image src={image} alt="" width={400} height={400} className='border-b border-black'/>
            </Link>
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
            <div className="p-5">
                <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
                <p className='mb-3 test-sm tracking-tight test-gray-700'>{description}</p>
            </div>
            <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                Read More 
                <Image src={assets.arrow} className="ml-3" alt="" width={13}/>
            </Link>
        </div>
    );
}

export default BlogItem;