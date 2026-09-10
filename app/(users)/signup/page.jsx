
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [statedata, Setstatedata] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Setstatedata({
      success: true,
      message: "Your account has been created successfully!",
    });

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-yellow-500 p-8 rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;