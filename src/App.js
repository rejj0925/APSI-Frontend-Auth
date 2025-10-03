// src/App.js
import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="content-center p-10 flex-col bg-[url(./Background.jpg)] bg-cover">
      <div className="m-auto p-4">
        <h1 className="font-bold underline text-center text-4xl text-white">User Auth System</h1>
        <div className="max-w-sm mx-auto">
          <div className=" bg-white bg-opacity-5 backdrop-blur-sm mt-5 border-2 p-5 rounded-md border-white-500">
            <Register />
          </div>
          <div className=" bg-white bg-opacity-5 backdrop-blur-sm mt-5 border-2 p-5 rounded-md">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
