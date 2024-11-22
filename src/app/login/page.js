// import { signIn } from "../../../auth"

// export default function SignIn() {
//   return (
// <form
//   action={async () => {
//     "use server"
//     await signIn("google")
//   }}
// >
//       <button type="submit">Signin with Google</button>
//     </form>
//   )
// }
// login page

import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
//next-auth
import { auth, signIn, signOut } from "../../../auth";
import Link from "next/link";

const Login = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Login Page Image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="flex items-baseline w-full flex-row-reverse content-end justify-evenly">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button
              type="submit"
              className="flex items-center px-6 py-3 bg-transparent text-white font-medium border border-white rounded-lg hover:bg-white hover:text-gray-800 transition duration-300"
            >
              <span>Login With Google</span>
              <FaGoogle className="ml-2 text-blue group-hover:text-blue-500 transition duration-300" />
            </button>
          </form>
        </div>

        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
           Register
         </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
