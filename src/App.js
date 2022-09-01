import React from "react";
import Navbar from "./Navbar";
import Home from "./components/Home";
import NewsLetter from "./components/NewsLetter";
// import BloggersList from "./components/BloggerList"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <NewsLetter />
      {/* <BloggersList /> */}
    </div>
  );
};

export default App;
