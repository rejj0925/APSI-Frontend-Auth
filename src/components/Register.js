// src/components/Register.js
import { useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("users")
      .insert([{ username: form.username, email: form.email, password: form.password }]);

    setMessage(error ? error.message : "User registered successfully");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}  className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-yellow-200 self-center">Register</h2>
        <div className="mx-auto items-center flex flex-col gap-3">
          <input name="username" placeholder="Username" onChange={handleChange} className="border border-solid pl-2 border-gray-900 rounded-md"/>
          <input name="email" placeholder="Email" onChange={handleChange} className="border border-solid pl-2 border-gray-900 rounded-md"/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border border-solid pl-2 border-gray-900 rounded-md" />
          <button type="submit" className="bg-yellow-300 rounded-lg m-auto px-5 py-1">Register</button>
        </div>
      </form>
      <div className=" my-2 mx-auto text-center text-xl">
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
