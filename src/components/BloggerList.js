// const BlogList = (props) =>
//  const blogs = props.blogs;
//  const title = props.title;

// const BloggerList = ({ blogs, title, blogDelete }) => {
//   return (
//     <div className="blog-list">
//       <h2>{title}</h2>
//       {blogs.map((blog) => (
//         <div className="blog-preview" key={blog.id}>
//           <h2>{blog.title}</h2>
//           <p>Written by {blog.author}</p>
//           <button onClick={() => blogDelete(blog.id)}> Delete Blog </button>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default BloggerList;

const BloggerList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>

          {/* {blogs && <BloggerList
        blogs={blogs.filter((blog) => blog.author === "Pelumi Olukayode")}
        title="Pelumi's Blog"
      />}

{blogs && <BloggerList
        blogs={blogs.filter((blog) => blog.author === "Oyindamola Kushimo")}
        title="Oyindamola's Blog"
      />} */}
          {/* <button onClick={() => blogDelete(blog.id)}> Delete Blog </button> */}
        </div>
      ))}
    </div>
  );
};
export default BloggerList;
