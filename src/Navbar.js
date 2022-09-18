import { Link } from "react-router-dom";
const Navbar = () => {
  const HomeLink = "https://thealtschool.com/";
  const Loginlink = "https://thealtschool.com/my-account-2/#login";
  

  const clickHome = () => {
    alert("You'll be directed to AltSchools's Homepage");
  };

  const clickLogin = () => {
    alert("You'll be directed to your LMS Login Page");
  };
  return (
    <nav className="navbar">
      <img src="./src/Images/AltSchool.svg" alt="" srcset="" />

      

      <Link to="/">
        <h1> AltSchool's Blog</h1>
      </Link>

      <div className="links">

      <Link to=  {HomeLink}target="_blank" onClick={clickHome}>
          AltSchool Home
        </Link>

        <Link to=  {Loginlink}target="_blank" onClick={clickLogin}>
          LMS Log in

        </Link>

        

        <Link to="/NewsLetter">News-Letter</Link>

        <Link to="/BloggersPage"> Bloggers-List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
