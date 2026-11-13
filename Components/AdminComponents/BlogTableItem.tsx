import React from 'react'
import Image from 'next/image'
import {assets} from '@/Assets/assets'

interface BlogTableItemProps {
    authorImg?: string;
    title?: string;
    author: string;
}

const BlogTableItem: React.FC<BlogTableItemProps> = ({authorImg,title,author}) => {
  return (
    <tr className='b-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image width={40} height={40} src = {authorImg?authorImg:assets.profile_icon}/>
            <p>{author?author:"no author"}</p>
        
        </th>
        <td className='px-6 py-4'>
            {title?title:"no title"}
        </td>
        <td className='px-6 py-4'>
            {"11 jan 2024"}
        </td>
        <td className='px-6 py-4 cursor-pointer '>
            x
        </td>
        
 
      
      
      
    </tr>
  )
}

export default BlogTableItem
