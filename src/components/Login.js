import { useRef, useState } from "react";
import Header from "./Header";
import { validateSignInDetails, validateSignUpDetails } from "../utils";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignIn = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setError(validateSignInDetails(email, password));
  };

  const handleSignUp = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const fullName = fullNameRef.current.value;
    setError(validateSignUpDetails(email, password, fullName));
  };

  const handleClick = () => {
    if (isSignInForm) {
      handleSignIn();
    } else {
      handleSignUp();
    }
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

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 bg-black text-white py-8 px-16 absolute opacity-85"
      >
        <h1 className="font-bold text-3xl pb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            ref={fullNameRef}
            placeholder="Full Name"
            className="w-full mb-4 p-2 bg-gray-600"
          />
        ) : null}
        <input
          ref={emailRef}
          placeholder="Email"
          className="w-full mb-4 p-2 bg-gray-600"
        />
        <input
          ref={passwordRef}
          placeholder="Password"
          type="password"
          className="w-full mb-4 p-2 bg-gray-600"
        />
        <p className="text-sm text-red-600 mb-4">{error}</p>
        <button
          className="bg-red-600 w-full py-2 rounded-lg disabled:pointer-events-none"
          onClick={handleClick}
        >
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
