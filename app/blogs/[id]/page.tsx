'use client'
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { assets, blog_data } from "@/Assets/assets";

 

const PageContent =  () =>{

    const params = useParams<{id: string}>();

    const [data,setData] = useState<(typeof blog_data)[number] | null>(null);

    const fetchBlogData = () =>{
        for(let i=0;i<blog_data.length;i++){
            if(Number(params.id)=== blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
                
            }
        }
    }

    useEffect(()=>{
        fetchBlogData();
    },[params.id])

 
    return(
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <Image src ={assets.logo} alt="" className="w-[130px] sm:w-auto"/>
                <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
                    Get Started <Image src={assets.arrow} alt=""/>
                </button>
            </div>

            <div className="text-center my-24">
                <h1 className="tex-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data?.title}</h1>
               {data && <Image src={data.author_img} alt="" width={60} height={60} className="mx-auto mt-6 border-white rounded-full"/>}
               <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data?.author}</p>
            </div>
        </div>
    )
}


const page = ()=>{
    return(
        <Suspense fallback={<div>Loading..</div>}>
        <PageContent/>
        </Suspense>
    )
}
export default page;