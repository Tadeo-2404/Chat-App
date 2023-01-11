import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill, BsFillHouseDoorFill } from "react-icons/bs";

const Error404 = () => {
  let navigate = useNavigate();

  let goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <p className="text-7xl"><span className="text-blue-600">4</span>0<span className="text-blue-600">4</span></p>
      <h1 className="uppercase font-semibold">the page you requested could not be found</h1>
      <div className="flex justify-between text-center w-full">
        <button onClick={goBack} className="bg-blue-600 text-white p-3 font-semibold text-md rounded-xl hover:bg-gradient-to-r hover:from-blue-400 flex items-center justify-center gap-4 uppercase">
          <BsFillArrowLeftCircleFill className="text-xl"/>
          <p>go back</p>
        </button>
        <Link  to="/" className="bg-blue-600 text-white p-3 font-semibold text-md rounded-xl hover:bg-gradient-to-r hover:from-blue-400 flex items-center justify-center gap-4 uppercase">
          <p>go home</p>
          <BsFillHouseDoorFill className="text-xl"/>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
