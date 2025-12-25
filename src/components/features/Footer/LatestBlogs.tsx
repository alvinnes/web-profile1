import { Icon } from "@iconify/react";

const LatestBlogs = () => {
  return (
    <div className="w-70 xs:w-80 sm:w-65">
      <h3 className="text-2xl font-bold relative before:w-20 before:h-1 before:bg-indigo-500 before:absolute before:-bottom-1 before:left-0.5 mb-8">
        Latest Blogs
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 group">
          <img
            src="/img/img-projects/simple-landing-page.png"
            alt="blog"
            className="size-16 object-cover rounded-md"
          />
          <div className="cursor-pointer">
            <h3 className="font-semibold text-sm line-clamp-2 text-ellipsis group-hover:underline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              quidem error incidunt magni placeat hic animi pariatur ex ipsum
              perferendis!
            </h3>
            <p className="text-[0.7em] text-[grey] mt-1 flex items-center gap-1">
              <Icon icon="ri:calendar-line" /> 24-11-2025
            </p>
          </div>
        </div>
        <div className="flex gap-2 group">
          <img
            src="/img/img-projects/project-5.png"
            alt="blog"
            className="size-16 object-cover rounded-md"
          />
          <div className="cursor-pointer">
            <h3 className="font-semibold text-sm line-clamp-2 text-ellipsis group-hover:underline">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              quidem error incidunt magni placeat hic animi pariatur ex ipsum
              perferendis!
            </h3>
            <p className="text-[0.7em] text-[grey] mt-1 flex items-center gap-1">
              <Icon icon="ri:calendar-line" /> 24-11-2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
