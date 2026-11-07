'use client'

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

interface BlogData {
    title: string;
    description: string;
    category: string;
    author: string;
    authorImg: string;
}

const Page = () => {

    // Image State
    const [image, setImage] = useState<File | null>(null);

    // Data State
    const [data, setData] = useState<BlogData>({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png"
    });

    // Input Change Handler
    const onChangeHandler = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {

        const name = event.target.name;
        const value = event.target.value;

        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Submit Handler
    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!image) {
            toast.error("Please select an image");
            return;
        }

        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', image);

        try {

            const response = await axios.post('/api/blog', formData);

            if (response.data.success) {

                toast.success(response.data.msg);

                setImage(null);

                setData({
                    title: "",
                    description: "",
                    category: "Startup",
                    author: "Alex Bennett",
                    authorImg: "/author_img.png"
                });

            } else {

                toast.error("Error");

            }

        } catch (error) {

            console.error(error);
            toast.error("Something went wrong");

        }
    };

    return (

        <>

            <form
                onSubmit={onSubmitHandler}
                className='pt-5 px-5 sm:pt-12 sm:pl-16'
            >

                <p className='text-xl'>Upload thumbnail</p>

                <label htmlFor="image">

                    <Image
                        className='mt-4'
                        src={
                            image
                                ? URL.createObjectURL(image)
                                : assets.upload_area
                        }
                        width={140}
                        height={70}
                        alt="Upload thumbnail"
                    />

                </label>

                <input
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setImage(e.target.files?.[0] || null)
                    }
                    type="file"
                    id="image"
                    accept="image/*"
                    hidden
                    required
                />

                <p className='text-xl mt-4'>Blog title</p>

                <input
                    name='title'
                    onChange={onChangeHandler}
                    value={data.title}
                    className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
                    type='text'
                    placeholder='Type here'
                    required
                />

                <p className='text-xl mt-4'>Blog Description</p>

                <textarea
                    name='description'
                    onChange={onChangeHandler}
                    value={data.description}
                    className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
                    placeholder='Write content here'
                    rows={6}
                    required
                />

                <p className='text-xl mt-4'>Blog category</p>

                <select
                    name="category"
                    onChange={onChangeHandler}
                    value={data.category}
                    className='w-40 mt-4 px-4 py-3 border text-gray-500'
                >

                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>

                </select>

                <br />

                <button
                    type='submit'
                    className='mt-8 w-40 h-12 bg-black text-white'
                >
                    ADD
                </button>

            </form>

        </>

    );
};

export default Page;