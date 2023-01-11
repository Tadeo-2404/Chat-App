import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-white shadow-2xl">
      <form
        action="/"
        method="post"
        className="p-8 flex flex-col justify-center items-center gap-8"
      >
        <legend className="text-blue-600 text-2xl uppercase font-bold">
          Login
        </legend>
        <fieldset className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex flex-col justify-start items-start w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="p-2 outline-none border-b-2 active:border-blue-600 hover:border-blue-600 focus:border-blue-600 font-xl w-full"
            />
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="p-2 outline-none border-b-2 active:border-blue-600 hover:border-blue-600 focus:border-blue-600 font-xl w-full"
            />
          </div>
        </fieldset>
        <div className="flex justify-between text-center w-full">
          <input
            type="submit"
            className="bg-blue-600 text-white p-2 font-semibold text-md w-full uppercase rounded-xl hover:bg-gradient-to-r hover:from-blue-400"
            value="Log In"
          />
        </div>

        <div className="flex justify-between w-full gap-24 text-center">
          <Link to="/forgot-password">
            <p className="text-blue-600 capitalize hover:underline">
              forgot password?
            </p>
          </Link>

          <Link to="/register">
            <p className="text-blue-600 capitalize hover:underline">
              Don't have an account?
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Home;
