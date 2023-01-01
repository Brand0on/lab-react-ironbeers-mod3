import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavBar">
      <Link className="link" to="/home">
        Home
      </Link>
    </div>
  );
};

export default Navbar;
