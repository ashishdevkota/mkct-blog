import { useState } from "react";

import { useNavigate } from "react-router";

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mkctII");

  const handleForm = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="create-blog">
      <h2>Create page</h2>
      <form onSubmit={handleForm}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <input
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mkct">mkct</option>
          <option value="mkctII">lukas</option>
        </select>
        <button>Add a Blog</button>
      </form>
    </div>
  );
};

export default Create;
