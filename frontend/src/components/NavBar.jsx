import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white font-bold flex justify-between items-center w-full p-8 text-xl">
      <div>
        <Link to="/">
          <h1 className="capitalize">chat app</h1>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-20 uppercase">
        <Link className="hover:-translate-y-1" to="/">
          <p>Home</p>
        </Link>
        <Link className="hover:-translate-y-1" to="/join-room">
          <p>Join Room</p>
        </Link>
        <Link className="hover:-translate-y-1" to="/profile">
          <p>Profile</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
