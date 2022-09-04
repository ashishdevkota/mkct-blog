import useFetch from "./useFetch.js";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { data: blog } = useFetch("http://localhost:8000/blogs/" + id);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      {blog && (
        <div className="blog">
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-description">{blog.body}</p>
          <p className="blog-author">Written By: {blog.author}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Blog;
