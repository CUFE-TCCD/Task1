import React, { useState } from "react";
import tccdLogo from "@/assets/tccd_logo.png";
import { Link } from "react-router-dom";
import GradientBgTop from "../../components/GradientBgTop";
import { login } from "../../endpoints/authEndpoints";

const Signin = () => {
  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSigninForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await login(signinForm.email, signinForm.password);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(()=>{
  //   const fetchUserData=async()=>{
  //     try {
  //       const response=await function();
  //       const data=await response.json();
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // },[])

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <GradientBgTop />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img alt="TCCD Logo" src={tccdLogo} className="mx-auto h-20 w-auto" />
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={handleInputChange}
                autoComplete="email"
                className="block w-full focus:outline-none px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={handleInputChange}
                autoComplete="current-password"
                className="block w-full focus:outline-none px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to={"/sign-up"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign-up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
