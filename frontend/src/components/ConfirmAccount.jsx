import { Link, useParams } from "react-router-dom"; //import link
import { useEffect, useState } from "react";
import axios from "axios";

const ConfirmAccount = () => {
  //response server
  const [successServer, setSuccessServer] = useState("");
  const [errorServer, setErrorServer] = useState("");
  //get url params
  const { token } = useParams();

  useEffect(() => {
    const getResponse = async () => {
       try {
         const { data } = await axios.post(`http://localhost:4000/client/confirm-account/${token}`);
         setSuccessServer(data.msg)
       } catch (error) {
        setErrorServer(error.response.data.msg);
       }
    }
    getResponse();
  }, [])
  
  return (
    <div className="bg-white shadow-2xl">
      <form
        action="/confirm-account"
        method="post"
        className="p-8 flex flex-col justify-center items-center gap-8"
      >
        <legend className="text-blue-600 text-2xl uppercase font-bold">
          confirm account
        </legend>

        <div className="flex flex-col justify-center items-center gap-6 w-full">
          {errorServer && (
            <div className="w-full bg-red-600 text-white uppercase p-2 font-semibold text-md rounded-xl mt-3 text-center">
              <p>{errorServer}</p>
            </div>
          )}

          {successServer && (
            <div className="w-full bg-green-600 text-white uppercase p-2 font-semibold text-md rounded-xl mt-3 text-center">
              <p>{successServer}</p>
            </div>
          )}
        </div>

        {successServer && (
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
        )}
      </form>
    </div>
  );
};

export default ConfirmAccount;
