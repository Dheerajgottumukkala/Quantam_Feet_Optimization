"use client";

import React, { useState } from 'react';
import { Mail, Lock, User, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const FalqonLanding = () => {
  const router = useRouter();
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState({
    login: false,
    signup: false,
    confirm: false
  });

  const [errors, setErrors] = useState({
    login: '',
    signup: ''
  });

  const [loading, setLoading] = useState({
    login: false,
    signup: false
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ ...errors, login: '' });
    setLoading({ ...loading, login: true });

    if (!loginData.email || !loginData.password) {
      setErrors({ ...errors, login: 'Please fill in all fields' });
      setLoading({ ...loading, login: false });
      return;
    }

    if (!validateEmail(loginData.email)) {
      setErrors({ ...errors, login: 'Please enter a valid email address' });
      setLoading({ ...loading, login: false });
      return;
    }

    try {
      const { error } = await authClient.signIn.email({
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
        callbackURL: "/"
      });

      if (error?.code) {
        toast.error("Invalid email or password. Please make sure you have already registered an account and try again.");
        setLoading({ ...loading, login: false });
        return;
      }

      toast.success("Login successful! Welcome to FALQON.");
      // The page will automatically redirect due to session state change
      
    } catch (err) {
      toast.error("Login failed. Please try again.");
      setLoading({ ...loading, login: false });
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ ...errors, signup: '' });
    setLoading({ ...loading, signup: true });

    if (!signupData.name || !signupData.email || !signupData.password || !signupData.confirmPassword) {
      setErrors({ ...errors, signup: 'Please fill in all fields' });
      setLoading({ ...loading, signup: false });
      return;
    }

    if (!validateEmail(signupData.email)) {
      setErrors({ ...errors, signup: 'Please enter a valid email address' });
      setLoading({ ...loading, signup: false });
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setErrors({ ...errors, signup: 'Passwords do not match' });
      setLoading({ ...loading, signup: false });
      return;
    }

    if (signupData.password.length < 8) {
      setErrors({ ...errors, signup: 'Password must be at least 8 characters long' });
      setLoading({ ...loading, signup: false });
      return;
    }

    try {
      const { error } = await authClient.signUp.email({
        email: signupData.email,
        name: signupData.name,
        password: signupData.password
      });

      if (error?.code) {
        const errorMap: Record<string, string> = {
          USER_ALREADY_EXISTS: "Email already registered. Please use a different email or try logging in."
        };
        toast.error(errorMap[error.code] || "Registration failed. Please try again.");
        setLoading({ ...loading, signup: false });
        return;
      }

      toast.success("Account created successfully! You can now log in.");
      // Clear signup form
      setSignupData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setLoading({ ...loading, signup: false });
      
    } catch (err) {
      toast.error("Registration failed. Please try again.");
      setLoading({ ...loading, signup: false });
    }
  };

  const features = [
    'Quantum Route Planning',
    'Real-Time Tracking',
    'Perishable Goods Priority',
    'AI Analytics'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-in fade-in duration-1000">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              FALQON
            </h1>
          </div>
          
          <div className="animate-in fade-in duration-1000 delay-300">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-300 mb-12">
              Quantum-Powered Fleet Optimization
            </h2>
          </div>

          <div className="animate-in fade-in duration-1000 delay-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-slate-400">
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-in fade-in duration-1000 delay-700">
            <button 
              onClick={() => document.getElementById('auth-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 hover:from-blue-700 hover:via-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section id="auth-section" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-slate-700/50">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Login Column */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-center text-white mb-8">Login</h3>
                
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                      disabled={loading.login}
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <input
                      type={showPassword.login ? "text" : "password"}
                      placeholder="Password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full pl-12 pr-12 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                      autoComplete="off"
                      disabled={loading.login}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword({ ...showPassword, login: !showPassword.login })}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword.login ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={loginData.rememberMe}
                      onChange={(e) => setLoginData({ ...loginData, rememberMe: e.target.checked })}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-slate-600 rounded bg-slate-700"
                      disabled={loading.login}
                    />
                    <label htmlFor="rememberMe" className="ml-2 text-sm text-slate-300">
                      Remember me
                    </label>
                  </div>

                  {errors.login && (
                    <p className="text-red-400 text-sm">{errors.login}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading.login}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading.login ? 'Signing In...' : 'Login'}
                  </button>
                </form>
              </div>

              {/* Divider */}
              <div className="hidden md:flex items-center justify-center">
                <div className="h-full w-px bg-slate-600"></div>
              </div>
              
              <div className="md:hidden">
                <div className="w-full h-px bg-slate-600"></div>
              </div>

              {/* Signup Column */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-center text-white mb-8">Sign Up</h3>
                
                <form onSubmit={handleSignupSubmit} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Full name"
                      value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                      disabled={loading.signup}
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                      disabled={loading.signup}
                    />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <input
                      type={showPassword.signup ? "text" : "password"}
                      placeholder="Password"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      className="w-full pl-12 pr-12 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                      autoComplete="off"
                      disabled={loading.signup}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword({ ...showPassword, signup: !showPassword.signup })}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword.signup ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <input
                      type={showPassword.confirm ? "text" : "password"}
                      placeholder="Confirm password"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                      className="w-full pl-12 pr-12 py-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                      autoComplete="off"
                      disabled={loading.signup}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword.confirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {errors.signup && (
                    <p className="text-red-400 text-sm">{errors.signup}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading.signup}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading.signup ? 'Creating Account...' : 'Sign Up'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FalqonLanding;