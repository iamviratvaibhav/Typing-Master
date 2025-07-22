

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import GoogleLoginButton from './GoogleLoginButton';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
// import { useAuth } from './AuthProvider';


const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const endpoint = isLogin ? 'login' : 'signup';
    console.log(`${endpoint.toUpperCase()} data:`, data);
    await axios.post(`http://localhost:5000/typing-master/${endpoint}`, data, {
      withCredentials: true,

    })
      .then((response) => {
        console.log(response);
        if (response.data) {
          // navigate('/HeroSection');
          toast.success("Login Successfully");
          localStorage.setItem("typingMasterUser", JSON.stringify(response.data))
          // setAuthUser(response.data);
        }
      })

      .catch((error) => {
        if (error.response) {

          toast.error("Error: " + error.response.data.message);
        } else {
          toast.error("Login failed. Please try again later.");
          console.error(error);
        }
      });
    reset();
  };

  const password = watch('password');


  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Welcome to <span className="text-violet-400">Typing Master</span>
        </h2>

        {/* Tab Switch */}
        <div className="flex mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isLogin
              ? 'bg-zinc-800 text-white'
              : 'bg-zinc-900 text-zinc-400 border border-zinc-700'
              }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 rounded-md text-sm font-medium transition-all duration-200 ${!isLogin
              ? 'bg-zinc-800 text-white'
              : 'bg-zinc-900 text-zinc-400 border border-zinc-700'
              }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {!isLogin && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register('name', { required: !isLogin })}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none placeholder:text-zinc-500"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">Name is required</p>
              )}
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none placeholder:text-zinc-500"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password', {
                required: 'Password required',
                minLength: {
                  value: 8,
                  message: 'Minimum 8 characters required',
                },
              })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none placeholder:text-zinc-500"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {!isLogin && (
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register('confirmPassword', {
                  required: 'Confirm password required',
                  validate: (value) =>
                    value === password || 'Passwords do not match',
                })}
                className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none placeholder:text-zinc-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:scale-[1.02] transition duration-300"
          >
            {isLogin ? 'Sign In →' : 'Sign Up →'}
          </button>
        </form>

        <div className="my-5 text-center text-zinc-500 text-sm">or</div>
        
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            try {
              const res = await axios.post("http://localhost:5000/typing-master/google-signup-login", {
                email: decoded.email,
                name: decoded.name,
              });

              if (res.data) {
                localStorage.setItem("typingMasterUser", JSON.stringify(res.data));
                toast.success("User login Successfully");
                navigate('/HeroSection');  // ✅ redirect after login
              }
            } catch (err) {
              console.error("Google Login API Error:", err);
              toast.error("User login failed");
            }
          }}
          onError={() => {
            console.log('Google Sign In Failed');
          }}
          theme="filled_black"
          width="100%"
        />
      </div>
    </div>
    </>
  );
};

export default LoginPage;
