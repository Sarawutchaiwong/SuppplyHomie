'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loginSuccess, setLogin] = useState(false);
  const router = useRouter();

  const login = async () => {
    try {
      setLoading(true);
      const res = await axios.post('/api/auth/login', {
        email,
        password
      });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setLogin(true);
        setMessage("Login Successful!");
        router.push('/');
      } else {
        setMessage(res.data.message || "Login failed. Please check your credentials.");
        setTimeout(() => setMessage(""), 5000);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred. Please try again.";
      setMessage(errorMessage);
      setTimeout(() => setMessage(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(v) => setEmail(v.currentTarget.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(v) => setPassword(v.currentTarget.value)}
          />
        </div>
        <button
          onClick={login}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={loading || loginSuccess}
        >
          {loginSuccess
            ? "Redirecting..."
            : loading
            ? "Logging in..."
            : "Login"}
        </button>
        {message && (
            <p className={`mt-4 text-sm text-center ${loginSuccess ? 'text-green-600' : 'text-red-600'}`}>
                {message}
            </p>
        )}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;