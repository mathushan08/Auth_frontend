
/*import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { User, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Full Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

      if (email && password) {
          navigate('/verify-email'); 
        } else {
          alert("Please enter email and password");
        }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden'
    >
      <div className='p-8'>
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text'>
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type='text'
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordStrengthMeter password={password} />
          <motion.button
            type='submit'
            className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-700 
            to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-emerald-700 focus:outline-none 
            focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-200'
          >
            Sign Up
          </motion.button>
        </form>
      </div>
      <div className='px-8 py-4 bg-gray-300 bg-opacity-50 flex justify-center'>
        <p className='text-sm text-gray-900'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-600 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage; */


/*
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { User, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const navigate = useNavigate();

  // Debug print for strength
  useEffect(() => {
    console.log('Password strength:', strength);
  }, [strength]);

  const isValidEmail = (email) => {
    // Basic email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      alert('Please fill all fields.');
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (strength < 3) {
      alert('Please enter a stronger password.');
      return;
    }

    console.log('Full Name:', trimmedName);
    console.log('Email:', trimmedEmail);
    console.log('Password:', trimmedPassword);

    navigate('/verify-email');
  };

  const updateStrength = (newStrength) => {
    setStrength(newStrength);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
  <Input
    icon={User}
    type="text"
    placeholder="Full Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <Input
    icon={Mail}
    type="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <Input
    icon={Lock}
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <PasswordStrengthMeter password={password} updateStrength={updateStrength} />

  {strength < 3 && password.length > 0 && (
    <p className="text-sm text-red-600 mt-1">
      Please enter a stronger password to continue.
    </p>
  )}

  <motion.button
    type="submit"
    className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-700 
               to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-emerald-700 
               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-200"
    disabled={strength < 3}
  >
    Sign Up
  </motion.button>
</form>

      </div>
      <div className="px-8 py-4 bg-gray-300 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-900">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage; 

*/
/*
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { User, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [strength, setStrength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Password strength:', strength);
  }, [strength]);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword || !userType) {
      alert('Please fill all fields and select a user type.');
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (strength < 3) {
      alert('Please enter a stronger password.');
      return;
    }

    console.log('Full Name:', trimmedName);
    console.log('Email:', trimmedEmail);
    console.log('Password:', trimmedPassword);
    console.log('User Type:', userType);

    navigate('/verify-email');
  };

  const updateStrength = (newStrength) => {
    setStrength(newStrength);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          
          <div className="mt-4">
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="" disabled>Select User Type</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <PasswordStrengthMeter password={password} updateStrength={updateStrength} />

          {strength < 3 && password.length > 0 && (
            <p className="text-sm text-red-600 mt-1">
              Please enter a stronger password to continue.
            </p>
          )}

          <motion.button
            type="submit"
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-700 
                   to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-emerald-700 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-200"
            disabled={strength < 3}
          >
            Sign Up
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-300 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-900">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage; */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { User, Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [strength, setStrength] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Password strength:', strength);
  }, [strength]);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword || !userType) {
      alert('Please fill all fields and select a user type.');
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (strength < 3) {
      alert('Please enter a stronger password.');
      return;
    }

    console.log('Full Name:', trimmedName);
    console.log('Email:', trimmedEmail);
    console.log('Password:', trimmedPassword);
    console.log('User Type:', userType);

    navigate('/verify-email');
  };

  const updateStrength = (newStrength) => {
    setStrength(newStrength);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Dropdown input for user type (no admin) */}
          <div className="mt-4">
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className='w-full pl-4 pr-3 py-2 bg-gray-100 bg-opacity-50 rounded-lg border border-purple-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-black placeholder-gray-500 transition duration-200'
            >
              <option value="" disabled>Select User Type</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          <PasswordStrengthMeter password={password} updateStrength={updateStrength} />

          {strength < 3 && password.length > 0 && (
            <p className="text-sm text-red-600 mt-1">
              Please enter a stronger password to continue.
            </p>
          )}

          <motion.button
            type="submit"
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-purple-700 
                   to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-emerald-700 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-200"
            disabled={strength < 3}
          >
            Sign Up
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-300 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-900">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
