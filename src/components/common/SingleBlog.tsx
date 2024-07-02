import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { FaHandHoldingMedical, FaRegCommentDots } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
type Blog = {
  id: string;
  title: string;
  image: string;
  user: {
    name: string;
  };
  date: string;
  likes: Array<number>;
  comments: Array<number>;
};

/* eslint-disable @next/next/no-img-element */
function SingleBlog({ blog }: { blog: Blog }) {
  return (
    <>
      <div className=" flex flex-col flex-shrink-0 w-[calc(100vw-1rem)] md:w-auto lg:w-auto">
        <div className=" rounded-t-lg object-center object-cover h-[250px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full rounded-t-lg "
          />
        </div>

        <div className="py-1 md:py-3 md:px-1 ">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-black font-bold px-1 md:px-2 text-xs md:text-base capitalize">
              {blog.user.name}
            </div>
          </div>
          <div className="text-[10px] md:text-xs py-1 md:py-2 text-[#212121] font-normal h-8 flex gap-4 uppercase">
            <span className="pr-1">POSTED ON</span>
            <span className="pl-1 ">{blog.date}</span>
          </div>
          <h5 className="text-customBlue text-base  md:text-xl font-bold  h-8 truncate text-primary capitalize">
            {blog.title}
          </h5>
          <div className="font-light text-sm md:text-base text-para md:my-3  md:px-0 text-justify opacity-70 h-14 overflow-hidden my-2 relative ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            recusandae perferendis reiciendis numquam cupiditate corrupti cumque
            odio, tenetur deleniti, dolores corporis iste optio ea quidem nisi,
            rem doloribus aperiam consectetur! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eos qui odit necessitatibus numquam
            similique neque commodi ex deleniti earum dicta, maiores nemo,
            tenetur rem quaerat, cupiditate corrupti eligendi? Nam, tenetur.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            ullam dignissimos rem repudiandae, animi optio, quia recusandae ab
            eum ipsam ipsum beatae sapiente amet repellat! Ullam doloremque
            error veritatis ipsa.
          </div>
          <Button
            variant={"link"}
            className="text-customGreen  font-semibold md:text-base text-[10px] md:my-1 px-0"
          >
            Read More
          </Button>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <FaHandHoldingMedical size={25} />
              <span>{blog.likes.length}</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <FaRegCommentDots size={25} />
              <span>{blog.comments.length}</span>
            </div>
            <div>
              <CiShare2 size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
