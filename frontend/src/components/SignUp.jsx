import { Link } from "react-router-dom";
import { HiOutlineMail, HiOutlineKey, HiOutlineUser } from "react-icons/hi";
import { MdError } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState({});
  const [errorEmail, setErrorEmail] = useState({});
  const [errorPassword, setErrorPassword] = useState({});
  const [errorServer, setErrorServer] = useState("");
  const [successServer, setSuccessServer] = useState("");
  const [load, setLoad] = useState(false);
  const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/; //regex validar password

  const handleSubmit = async (event) => {
    setLoad(true);
    event.preventDefault();

    if (username.length <= 0) {
      console.log("username field is requiered");
      setErrorUsername({
        name: "not-username",
        msg: "username field is requiered",
      });
      setLoad(false);
      setTimeout(() => {
        setErrorUsername({});
      }, 2500);
      return;
    }

    if (email.length <= 0) {
      console.log("email field is requiered");
      setErrorEmail({
        name: "not-email",
        msg: "email field is requiered",
      });
      setLoad(false);
      setTimeout(() => {
        setErrorEmail({});
      }, 2500);
      return;
    }

    if (password.length <= 0) {
      console.log("password field is requiered");
      setErrorPassword({
        name: "not-password",
        msg: "password field is requiered",
      });
      setLoad(false);
      setTimeout(() => {
        setErrorPassword({});
      }, 2500);
      return;
    }

    if (!validatePassword.test(password)) {
      setErrorPassword({
        name: "password-incorrect",
        msg: "password not strong",
      });
      setLoad(false);
      setTimeout(() => {
        setErrorPassword({});
      }, 2500);
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:4000/client/sign-up", {
        username,
        email,
        password,
      });
      setLoad(false);
      setSuccessServer(data.msg);
      setTimeout(() => {
        setSuccessServer("");
      }, 2500);
      console.log(data);
    } catch (error) {
      setErrorServer(error.response.data.msg);
      setLoad(false);
      setTimeout(() => {
        setErrorServer("");
      }, 2500);
    }
  };

  return (
    <div className="bg-white shadow-2xl">
      <form
        action="/sign-up"
        method="post"
        className="p-8 flex flex-col justify-center items-center gap-8"
        onSubmit={handleSubmit}
      >
        <legend className="text-blue-600 text-2xl uppercase font-bold">
          sign up
        </legend>

        <fieldset className="flex flex-col justify-center items-center gap-6 w-full">

        <div className="flex flex-col justify-start items-start w-full">
            <label htmlFor="username">Username</label>
            <div className="flex justify-center w-full">
              {Object.keys(errorUsername).length > 0 ? (
                <>
                  <div className="flex flex-col w-full">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Error"
                      className="p-2 outline-none border-b-2 active:border-red-600 hover:border-red-600 focus:border-red-600 font-xl w-full"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                    <p className="text-sm mt-2 text-red-600">
                      {errorUsername.msg}
                    </p>
                  </div>
                  <MdError className="text-xl text-red-600" />
                </>
              ) : (
                <>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    className="p-2 outline-none border-b-2 active:border-blue-600 hover:border-blue-600 focus:border-blue-600 font-xl w-full"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                  <HiOutlineUser className="text-xl text-blue-600" />
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-start items-start w-full">
            <label htmlFor="email">Email</label>
            <div className="flex justify-center w-full">
              {Object.keys(errorEmail).length > 0 ? (
                <>
                  <div className="flex flex-col w-full">
                    <input
                      type="email"
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
            <label htmlFor="password">Password</label>
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

        <div className="flex flex-col justify-center items-center text-center w-full">
          {load && (
            <ClipLoader
              aria-label="Loading Spinner"
              data-testid="loader"
              color="blue"
              size={70}
              className="mb-10"
            />
          )}

          <input
            type="submit"
            className="bg-blue-600 text-white p-2 font-semibold text-md w-full uppercase rounded-xl hover:bg-gradient-to-r hover:from-blue-400"
            value="Sign Up"
          />

          {errorServer && (
            <div className="w-full bg-red-600 text-white uppercase p-2 font-semibold text-md rounded-xl mt-3">
              <p>{errorServer}</p>
            </div>
          )}

        {successServer && (
            <div className="w-full bg-green-600 text-white uppercase p-2 font-semibold text-md rounded-xl mt-3">
              <p>{successServer}</p>
            </div>
          )}
        </div>

        <div className="flex justify-between w-full gap-24 text-center">
          <Link to="/forgot-password">
            <p className="text-blue-600 capitalize hover:underline">
              forgot password?
            </p>
          </Link>

          <Link to="/">
            <p className="text-blue-600 capitalize hover:underline">
              Already have an account?
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
