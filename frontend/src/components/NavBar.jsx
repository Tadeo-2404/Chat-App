import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white font-bold flex justify-center items-center w-full p-8 text-xl">
        <Link to="/">
          <h1 className="uppercase font-bold">chat app</h1>
        </Link>
    </nav>
  );
};

export default NavBar;
