import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard'
import { Blog } from '@/types';
import React from 'react'


export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const {data : blogs} = await res.json();

  return blogs.slice(0,2).map((blog: Blog) => ({
    blogId: String(blog.id)
  }))
}


export default async function page({params} : {params : Promise<{blogId : string}>}) {
    const {blogId} = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    const blog = await res.json()
    console.log(blog)
    
  return (
    <div className='py-32 px-4 max-w-6xl mx-auto'>
      <BlogDetailsCard blog={blog} />
    </div>
  )
}
