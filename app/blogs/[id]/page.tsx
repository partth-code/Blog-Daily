'use client'
import React, { useEffect, useState } from "react";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

const page =  async ({params}:PageProps) =>{

    const [data,setData] = useState(null);

    const fetchBlogData = () =>{
        //continue from here
    }

    useEffect(()=>{
        fetchBlogData
    },[])

    const {id} = await params;
    return(
        <div>
            {id}
        </div>
    )
}

export default page;