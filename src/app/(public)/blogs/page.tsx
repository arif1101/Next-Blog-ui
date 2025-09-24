import BlogCard from '@/components/modules/Blogs/BlogCard';
import { Blog } from '@/types';
import React from 'react'


export const generateMetadata = async ({
  params
}: {
  params: Promise<{blogId: string}>
}) => {
  const {blogId}=await params;
  const res = await  fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blog = await res.json();

  return {
    title: blog?.title,
    description: blog?.content
  }
}



export default async function page() {

  const  res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store"
  })

  const { data: blogs } = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className='grid gap-6'>
        {
          blogs.map((blog : Blog) => (
            <BlogCard post={blog} key={blog?.id}/>
          ))
        }
      </div>
    </div>
  )
}