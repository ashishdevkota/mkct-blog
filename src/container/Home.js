import BlogLists from "./BlogLists";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="content">
      {isLoading && <div>Loading......</div>}
      {error && <div>{error.message}</div>}
      {blogs && <BlogLists blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
