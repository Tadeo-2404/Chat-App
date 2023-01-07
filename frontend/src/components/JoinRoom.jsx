//libraries
import io from "socket.io-client";
import { useState } from "react";

//variables and instances
const connection = io.connect("http://localhost:3000");

const JoinRoom = () => {
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!nombre || !password) {
            console.log('todos los campos son obligatorios');
            return;
        }

        console.log('enviando...')
    }
  return (
    <>
    <div className="container p-8 shadow-2xl bg-gray-200 w-full flex justify-center flex-col items-center">
        <h1 className="uppercase font-bold text-6xl text-center">Unete a una <span className="text-yellow-500">sala</span></h1>
        <form action="/post" className="p-3 flex flex-col gap-8" onSubmit={handleSubmit}>
            <legend>unete a una sala colocando su nombre y su contraseña en los campos inferiores</legend>
            <fieldset className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <label htmlFor="nombre"
                    className="uppercase text-xl">sala</label>
                    <input 
                    type="text"
                    placeholder="nombre de la sala"
                    name="nombre"
                    className="border-none outline-none p-3 uppercase hover:shadow-lg"
                    onChange={(event) => {
                        setNombre(event.target.value);
                    }}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="contraseña"
                    className="uppercase text-xl">contraseña</label>
                    <input 
                    type="password"
                    placeholder="contraseña de la sala"
                    name="contraseña"
                    className="border-none outline-none p-3 uppercase hover:shadow-lg"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    />
                </div>
            </fieldset>
            <input type="submit" 
            className="p-4 bg-yellow-500 text-white uppercase font-semibold w-full hover:transform hover:-translate-y-2 hover:bg-gradient-to-r from-yellow-200"
            value="unirse"/>
        </form>
    </div>
    </>
  )
}

export default JoinRoom