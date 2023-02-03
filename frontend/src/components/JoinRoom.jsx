import { Link, useNavigate } from "react-router-dom";
import { HiOutlineKey } from "react-icons/hi";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import axios from "axios";

const JoinRoom = () => {
    const [room_id, setRoomID] = useState("");
    const [errorServer, setErrorServer] = useState("");
    const [load, setLoad] = useState(false);
    const nav = useNavigate();

    const handleSubmit = () => {
        console.log('joining');
    }

  return (
    <div className="bg-white shadow-2xl">
      <form
        action="/user"
        method="post"
        className="p-8 flex flex-col justify-center items-center gap-8"
        onSubmit={handleSubmit}
      >
        <legend className="text-blue-600 text-2xl uppercase font-bold">
          Join Room
        </legend>
        <fieldset className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex flex-col justify-start items-start w-full">
            <label htmlFor="room_id">Room ID</label>
            <div className="flex justify-center w-full">
                  <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Join a Room"
                    className="p-2 outline-none border-b-2 active:border-blue-600 hover:border-blue-600 focus:border-blue-600 font-xl w-full"
                    value={room_id}
                    onChange={(event) => setRoomID(event.target.value)}
                  />
                  <HiOutlineKey className="text-xl text-blue-600" />
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
            value="Join a Room"
          />

          {errorServer && (
            <div className="w-full bg-red-600 text-white uppercase p-2 font-semibold text-md rounded-xl mt-3">
              <p>{errorServer}</p>
            </div>
          )}
        </div>

      </form>
    </div>
  )
}

export default JoinRoom