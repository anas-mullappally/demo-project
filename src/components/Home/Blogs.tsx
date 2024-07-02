/* eslint-disable @next/next/no-img-element */
"use client";
import ViewAll from "../common/ViewAll";
import { demoStore } from "@/store/store";
import SingleBlog from "../common/SingleBlog";

export default function Blogs() {
  const { blogs } = demoStore();

  return (
    <>
      <div className="md:px-14 px-3 lg:py-8 ">
        <div className="bg-white text-black text-lg md:text-5xl font-bold  self-start py-3 md:py-4">
          Blogs
        </div>
        <div className="w-[100%] py-3 md:py-4">
          <div className=" flex flex-nowrap overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogs.map((blog) => (
              <SingleBlog blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
        <ViewAll redirectTo="/blogs" />
      </div>
    </>
  );
}
