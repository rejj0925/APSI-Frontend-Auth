// src/components/Login.js
import { useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", form.email)
      .eq("password", form.password)
      .single();

    setMessage(error || !data ? "Invalid credentials" : `Welcome, ${data.username}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}  className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-yellow-200 self-center">Login</h2>
        <div className="mx-auto items-center flex flex-col gap-3">
          <input name="email" placeholder="Email" onChange={handleChange} className="border border-solid pl-2 border-gray-900 rounded-md"/>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border border-solid pl-2 border-gray-900 rounded-md" />
          <button type="submit" className="bg-yellow-300 rounded-lg m-auto px-5 py-1">Login</button>
        </div>
      </form>
      <div className=" my-2 mx-auto text-center text-xl">
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
