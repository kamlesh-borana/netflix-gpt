import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative flex justify-center items-center bg-black bg-opacity-60">
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_small.jpg"
          className="relative -z-10"
          alt="wall of movie and shows on netflix"
        />
      </div>

      <form className="w-4/12 bg-black text-white py-8 px-16 absolute opacity-85">
        <h1 className="font-bold text-3xl pb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            placeholder="Full Name"
            className="w-full mb-4 p-2 bg-gray-600"
          />
        ) : null}
        <input
          placeholder="Email or mobile number"
          className="w-full mb-4 p-2 bg-gray-600"
        />
        <input placeholder="Password" className="w-full mb-4 p-2 bg-gray-600" />
        <button className="bg-red-600 w-full py-2 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <h2 className="mt-8 cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign in now."}
        </h2>
      </form>
    </div>
  );
};

export default Login;
