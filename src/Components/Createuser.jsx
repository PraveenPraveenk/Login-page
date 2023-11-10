import React, { useState } from "react";
import style from "./home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  let [input, setinput1] = useState("");
  let [input1, setinput2] = useState("");
  let [input2, setinput3] = useState("");

  let nav = useNavigate("http://localhost:3000/employees");

  let inputData = (x) => {
    setinput1(x.target.value);
  };
  let inputData1 = (x) => {
    setinput2(x.target.value);
  };
  let inputData2 = (x) => {
    setinput3(x.target.value);
  };

  let submit = (x) => {
    if (input.length>0 && input1.length>0 && input2.length>0) {
    x.preventDefault();
    let payload = {
      ename: input,
      ecompany: input1,
      esalary: input2,
    };
    axios
      .post("http://localhost:3000/employees", payload)
      .then(() => {
        console.log("Data has been stored");
        nav("/user")
      })
    }
    else{
      alert("fill the form")
      }
  };

  return (
    <div id={style.c1}>
      <form action="">
        <label htmlFor="">Name:</label>
        <input type="text" value={input} onChange={inputData} />
        <label htmlFor="">Company:</label>
        <input type="text" value={input1} onChange={inputData1} />
        <label htmlFor="">Salary:</label>
        <input type="text" value={input2} onChange={inputData2} />
        <br />
        <button onClick={submit}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Createuser;
