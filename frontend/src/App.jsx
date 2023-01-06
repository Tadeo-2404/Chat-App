import io from "socket.io-client";
const connection = io.connect("http://localhost:3000");
function App() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
