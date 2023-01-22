import { Link } from "react-router-dom";
import { HiOutlineMail, HiOutlineKey } from "react-icons/hi";
import { MdError } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState({});
  const [errorPassword, setErrorPassword] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.length <= 0) {
      console.log("email field is requiered");
      setErrorEmail({
        name: "not-email",
        msg: "email field is requiered",
      });

      setTimeout(() => {
        setErrorEmail({})
      }, 2500);
      return;
    }

    if (password.length <= 0) {
      console.log("password field is requiered");
      setErrorPassword({
        name: "not-password",
        msg: "password field is requiered",
      });

      setTimeout(() => {
        setErrorPassword({})
      }, 2500);
      return;
    }

    if (password.length < 8) {
      setErrorPassword({
        name: "password-length",
        msg: "password field is not 8 char",
      });

      setTimeout(() => {
        setErrorPassword({})
      }, 2500);
      return;
    }

    try {
      const connect = await axios.post('http://localhost:4000/client', {email, password})
      console.log(connect);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="bg-white shadow-2xl">
      <form
        action="/"
        method="post"
        className="p-8 flex flex-col justify-center items-center gap-8"
        onSubmit={handleSubmit}
      >
        <legend className="text-blue-600 text-2xl uppercase font-bold">
          Login
        </legend>
        <fieldset className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex flex-col justify-start items-start w-full">
            <label htmlFor="email">Email</label>
            <div className="flex justify-center w-full">
              {Object.keys(errorEmail).length > 0 ? (
                <>
                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Error"
                      className="p-2 outline-none border-b-2 active:border-red-600 hover:border-red-600 focus:border-red-600 font-xl w-full"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <p className="text-sm mt-2 text-red-600">
                      {errorEmail.msg}
                    </p>
                  </div>
                  <MdError className="text-xl text-red-600" />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="p-2 outline-none border-b-2 active:border-blue-600 hover:border-blue-600 focus:border-blue-600 font-xl w-full"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <HiOutlineMail className="text-xl text-blue-600" />
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full">
            <label htmlFor="email">Password</label>
            <div className="flex justify-center w-full">
              {Object.keys(errorPassword).length > 0 ? (
                <>
                  <div className="flex flex-col w-full">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Error"
                      className="p-2 outline-none border-b-2 active:border-red-600 hover:border-red-600 focus:border-red-600 font-xl w-full"
                      minLength={8}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <p className="text-sm mt-2 text-red-600">
                      {errorPassword.msg}
                    </p>
                  </div>
                  <MdError className="text-xl text-red-600" />
                </>
              ) : (
                <>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="p-2 outline-none border-b-2 active:border-blue-600 hover:border-blue-600 focus:border-blue-600 font-xl w-full"
                    minLength={8}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <HiOutlineKey className="text-xl text-blue-600" />
                </>
              )}
            </div>
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

          <Link to="/sign-up">
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
