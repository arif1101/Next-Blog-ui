import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { Blog } from "@/types";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,{
    next: {
      revalidate: 30,
    }
  });
  const {data:blogs} = await res.json();
  // console.log(blogs)
  
  return (
    <div className="">
      <Hero />
      <h1 className="my-5 text-4xl text-center w-full font-semibold">Feature Post</h1>
      <div className="grid grid-cols-3 max-w-6xl mx-auto gap-6 my-12">
        {
          blogs.slice(0,3).map((blog : Blog) => (
            <BlogCard key={blog?.id} post={blog}/>
          ))
        }
        
      </div>
    </div>
  );
}
