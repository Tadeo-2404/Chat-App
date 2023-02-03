import { useNavigate } from "react-router-dom";
import { HiOutlineKey } from "react-icons/hi";
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import { io } from "socket.io-client";
const socket = io.connect("ws://localhost:4000");

const JoinRoom = () => {
    const [room_id, setRoomID] = useState("");
    const [errorServer, setErrorServer] = useState("");
    const [load, setLoad] = useState(false);
    const nav = useNavigate();

    const handleSubmit = () => {
        socket.emit("join-room", room_id);
    }

  return (
    <div className="bg-white shadow-2xl">
      <div
        className="p-8 flex flex-col justify-center items-center gap-8"
      >
        <h1 className="text-blue-600 text-2xl uppercase font-bold">
          Join Room
        </h1>
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
            onClick={handleSubmit}
          />

          {errorServer && (
            <div className="w-full bg-red-600 text-white uppercase p-2 font-semibold text-md rounded-xl mt-3">
              <p>{errorServer}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default JoinRoom