// import { useState, useEffect} from "react";
import BloggerList from "./BloggerList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isLoading && <div> Loading...</div>}
      {blogs && <BloggerList blogs={blogs} title="All Blogs" />}

      {/* {blogs && (
        <BloggerList
          blogs={blogs.filter((blog) => blog.author === "Pelumi Olukayode")}
          title="Pelumi's Blog"
        />
      )}

      {blogs && (
        <BloggerList
          blogs={blogs.filter((blog) => blog.author === "Oyindamola Kushimo")}
          title="Oyindamola's Blog"
        />
      )} */}
    </div>
  );
};

export default Home;
