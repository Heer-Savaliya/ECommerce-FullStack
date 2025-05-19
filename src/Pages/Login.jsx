import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center justify-center gap-6 p-6 w-full max-w-5xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="./images/login_bg2.jpg"
            alt="Login"
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-pink font-dancing">Welcome</h1>
          <h4 className='text-xl text-center mb-5'>Sign in to your Account!</h4>
          
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
