import React, { useState } from 'react';
import { Eye, EyeOff, Droplets } from 'lucide-react';

const AnimatedSquare = () => {
  const size = Math.random() * 50 + 20;
  const duration = Math.random() * 20 + 10;
  const startPosition = Math.random() * 100;
  
  return (
    <div
      className="absolute opacity-20"  // Reduced opacity
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: 'linear-gradient(45deg, rgba(229, 231, 235, 0.08), rgba(209, 213, 219, 0.03))', // Reduced contrast
        borderRadius: '20%',
        left: `${startPosition}vw`,
        animation: `float ${duration}s infinite linear`,
        animationDelay: `-${Math.random() * 20}s`,
      }}
    />
  );
};

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden animate-pageLoad">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); }
            100% { transform: translateY(-100vh) rotate(360deg); }
          }

          @keyframes pageLoad {
            0% { 
              opacity: 0;
              transform: translateY(20px);
            }
            100% { 
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-pageLoad {
            animation: pageLoad 1s ease-out forwards;
          }
        `}
      </style>
      {[...Array(10)].map((_, i) => (
        <AnimatedSquare key={i} />
      ))}
      
      <div className="relative bg-gray-900/50 p-8 rounded-lg shadow-lg w-96 backdrop-blur-sm border border-gray-800">
        {/* Logo and Brand Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-800/50 rounded-full mb-4">
            <Droplets size={32} className="text-gray-300" />
          </div>
          <h1 className="text-4xl font-bold text-gray-300 tracking-wider">Dtox</h1>
          <p className="text-gray-500 text-sm mt-2">Refresh Your Digital Life</p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex mb-6 bg-gray-800/30 rounded-lg p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors duration-300 
              ${isLogin ? 'bg-gray-700/50 text-gray-300' : 'text-gray-500 hover:text-gray-400'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors duration-300 
              ${!isLogin ? 'bg-gray-700/50 text-gray-300' : 'text-gray-500 hover:text-gray-400'}`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-400">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-700/50 bg-gray-800/30 text-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600/30 outline-none transition-colors duration-300 placeholder-gray-600"
              placeholder="Enter your username"
            />
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-700/50 bg-gray-800/30 text-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600/30 outline-none transition-colors duration-300 placeholder-gray-600"
                placeholder="Enter your email"
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-400">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-700/50 bg-gray-800/30 text-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600/30 outline-none transition-colors duration-300 placeholder-gray-600"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-400">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-700/50 bg-gray-800/30 text-gray-300 focus:border-gray-600 focus:ring-1 focus:ring-gray-600/30 outline-none transition-colors duration-300 placeholder-gray-600"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <button type="button" className="text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300">
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-opacity-50"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button 
            onClick={toggleMode}
            className="text-gray-400 hover:text-gray-300 font-medium transition-colors duration-300"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;