import SpotlightCard from "@/components/react-bits/SpotlightCard";
import Animate from "@/components/ui/Animate";
import type { BlogsItem } from "@/types/BlogsItem";
import { Icon } from "@iconify/react";

interface BlogsContentProps {
  blog: BlogsItem;
}

const BlogsContent = ({ blog }: BlogsContentProps) => {
  return (
    <Animate direction="vertical" delay={blog.delay}>
      <SpotlightCard
        className="border-none p-4 sm:w-100 h-100 xs:h-110 cursor-pointer rounded-md bg-indigo-500/10"
        spotlightColor="rgba(255, 255, 255, 0.2)"
      >
        <div className="mb-5 flex items-center justify-between">
          <span className="bg-slate-200/10 text-indigo-300 rounded-md py-2 px-3 text-[0.7em]">
            {blog.category}
          </span>
          <span className="flex items-center text-[#808080] gap-1 text-[0.8em]">
            <Icon icon="ri:calendar-schedule-line" />
            {blog.create_at}
          </span>
        </div>
        <img
          src={blog.img}
          alt="blog"
          className="object-cover w-full h-40 xs:h-50 rounded-md mb-3"
        />
        <h3 className="text-lg font-bold my-1 text-ellipsis line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-sm font-light line-clamp-2 text-ellipsis">
          {blog.description}
        </p>
        <a
          href=""
          target="_blank"
          className="flex items-center gap-1.5 text-sm text-[#808080] mt-2.5"
        >
          Baca selengkapnya <Icon icon="ri:arrow-right-up-line" width={20} />
        </a>
      </SpotlightCard>
    </Animate>
  );
};

export default BlogsContent;
