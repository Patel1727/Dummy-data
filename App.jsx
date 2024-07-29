import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [firstName, setfirstName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/user/register", {
        firstName,
        password,
      });
      alert("Registration Success");
      setPassword("");
      setfirstName("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="text-2xl ">Datat here</h1>

      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          className="bg-gray-300 rounded-md border-[1px] border-zinc-800 mr-2"
          type="text"
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
          value={firstName}
        />
        Password:{" "}
        <input
          className="bg-gray-300 rounded-md border-[1px] border-zinc-800 ml-2"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
