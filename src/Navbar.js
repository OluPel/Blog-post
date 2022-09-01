const Navbar = () => {
  const HomeLink = "https://thealtschool.com/";
  const Loginlink = "https://thealtschool.com/my-account-2/#login";
  const NewsletterLink = "NewsLetter.js";
  const BloggerlistLink = "BloggerList.js";

  const clickHome = () => {
    alert("You'll be directed to the Homepage");
  };

  const clickLogin = () => {
    alert("You'll be directed to the Login Page");
  };
  return (
    <nav className="navbar">
      <img src="./src/Images/AltSchool.svg" alt="" srcset="" />
      <a href="Home.js">
        <h1> AltSchool's Blog</h1>
      </a>

      <div className="links">
        <a href={HomeLink} onClick={clickHome}>
          Home
        </a>

        <a href={Loginlink} onClick={clickLogin}>
          Log in
        </a>

        <a href={NewsletterLink}>News-Letter</a>

        <a href={BloggerlistLink}> Bloggers-List </a>
      </div>
    </nav>
  );
};

export default Navbar;
