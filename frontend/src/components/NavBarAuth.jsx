import { Link } from "react-router-dom";
import { HiUserGroup, HiUser } from 'react-icons/hi'
import { RiLogoutBoxLine } from "react-icons/ri";

const NavBarAuth = () => {
  return (
    <nav className="bg-blue-600 text-white font-bold flex justify-between items-center w-full p-8 text-xl">
    <div>
      <Link to="/">
        <h1 className="uppercase">chat app</h1>
      </Link>
    </div>
    <div className="flex justify-between items-center gap-20 uppercase">
      <Link className="hover:-translate-y-1 flex justify-center items-center gap-4" to="/join-room">
        <HiUserGroup />
        <p>Join Room</p>
      </Link>
      <Link className="hover:-translate-y-1 flex justify-center items-center gap-4" to="/">
        <HiUser />
        <p>Profile</p>
      </Link>
      <Link className="hover:-translate-y-1 flex justify-center items-center gap-4" to="/profile">
        <RiLogoutBoxLine />
        <p>Log Out</p>
      </Link>
    </div>
  </nav>
  )
}

export default NavBarAuth