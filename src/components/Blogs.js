import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

function Blogs() {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("https://blog-backend-frontend.onrender.com/api/blog")
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  console.log("blogs data",blogs);
 
  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => (
          <Blog
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            content={blog.content}
            image={blog.image}
            userName={blog.userIp}
          />
        ))}
    </div>
  );
}

export default Blogs;
