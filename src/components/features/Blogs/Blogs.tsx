import GridLayout from "@/layouts/GridLayout";
import blogsItem from "@/types/BlogsItem";
import BlogsContent from "./BlogsContent";

const Blogs = () => {
  return (
    <GridLayout
      id="blogs"
      title="Blogs"
      subjudul=" Here you will find a selection of projects that showcase my growth
            and hands-on experience as a full stack developer. Each project
            demonstrates my ability to solve real-world problems by applying the
            skills I have learned, from frontend design to backend development
            and database management. Feel free to explore the details and see
            how I bring ideas to life through code."
    >
      <div className="sm:w-11/12 w-full grid grid-cols-1 sm:grid-cols-3 place-items-center gap-10 sm:gap-y-15 mt-20 xs:mt-30 ">
        {blogsItem.map((blog) => (
          <BlogsContent blog={blog} key={blog.id} />
        ))}
      </div>
    </GridLayout>
  );
};

export default Blogs;
