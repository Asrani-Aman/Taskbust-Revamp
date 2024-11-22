'use client'
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import { useState } from 'react';

const Register = () => {
 const [passwords, setPasswords] = useState({
   password: '',
   confirmPassword: ''
 });
 const [passwordMatch, setPasswordMatch] = useState(true);

//this code snippet defines a function handlePasswordChange
//   that is likely used as an event handler for password input fields.
//   It extracts the name and value properties
//  from the event object and updates the state of the component with the new password value.
 const handlePasswordChange = (e) => {
   const { name, value } = e.target;
   setPasswords(prev => ({
     ...prev,
     [name]: value
   }));
 };
 //The spread operator (...prev) is used to create a shallow copy of the previous state object. 
 //Then, the value of the input field is assigned to the corresponding property ([name]: value) in the new state object.

 const validatePasswords = () => {
   setPasswordMatch(passwords.password === passwords.confirmPassword);
   return passwords.password === passwords.confirmPassword;
 };

 return (
   <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row justify-center items-center p-4">
     <div className="md:w-1/3 min-w-sm">
       <img
         src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
         alt="Register Page Illustration"
         className="w-full"
       />
     </div>

     <div className="md:w-1/3 max-w-sm space-y-8">
       <div className="text-center">
         <h2 className="text-3xl font-bold">Create Account</h2>
         <p className="text-gray-400 mt-2">Join TaskBust to start your journey</p>
       </div>

       <button
         onClick={() => signIn('google')}
         className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
       >
         <FaGoogle className="text-blue-600" />
         <span>Sign up with Google</span>
       </button>

       <div className="relative">
         <div className="absolute inset-0 flex items-center">
           <div className="w-full border-t border-gray-600"></div>
         </div>
         <div className="relative flex justify-center text-sm">
           <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
         </div>
       </div>

       <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
         <div className="space-y-2">
           <input
             type="text"
             placeholder="Full Name"
             className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
           />
           <input
             type="email"
             placeholder="Email Address"
             className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
           />
           <input
             type="password"
             name="password"
             placeholder="Password"
             value={passwords.password}
             onChange={handlePasswordChange}
             className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
           />
           <input
             type="password"
             name="confirmPassword"
             placeholder="Confirm Password"
             value={passwords.confirmPassword}
             onChange={handlePasswordChange}
             onBlur={validatePasswords}
             className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-blue-500 
               ${!passwordMatch ? 'border-red-500' : 'border-gray-700'}`}
           />
           {!passwordMatch && (
             <p className="text-red-500 text-sm">Passwords do not match</p>
           )}
         </div>

         <div className="flex items-center">
           <input type="checkbox" className="rounded border-gray-700 text-blue-600" />
           <label className="ml-2 text-sm text-gray-400">
             I agree to the Terms of Service and Privacy Policy
           </label>
         </div>

         <button
           type="submit"
           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
         >
           Create Account
         </button>
       </form>

       <p className="text-center text-gray-400">
         Already have an account?{' '}
         <Link href="/login" className="text-blue-500 hover:underline">
           Sign in
         </Link>
       </p>
     </div>
   </div>
 );
};

export default Register;