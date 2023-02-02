import React, { useState } from "react";
import Axios from "axios";
function App() {
  const [fname, setFname] = useState("");
  const [lname, setlname] = useState("");
  const [Cname, setCname] = useState("");
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      fname: fname,
      lname: lname,
      Cname: Cname,
    });
  };
  return (
    <div>
      <form>
        <label>First Name:</label>
        <br></br>
        <input
          type="text"
          placeholder="bhai kya kr rha h tu"
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <br></br>
        <label>Last Name:</label>
        <br></br>
        <input
          type="text"
          placeholder="bhai kya kr rha h tu"
          onChange={(e) => {
            setlname(e.target.value);
          }}
        />
        <br></br>
        <label>College Name:</label>
        <br></br>
        <input
          type="text"
          placeholder="kya lodu college h"
          onChange={(e) => {
            setCname(e.target.value);
          }}
        />
        <br></br>
        <button type="submit" onClick={register}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
