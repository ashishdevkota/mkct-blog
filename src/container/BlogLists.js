import { Link } from "react-router-dom";

const BlogLists = ({ blogs, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <Link to={`/blogs/${blog.id}`}>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-author">Written by : {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogLists;
