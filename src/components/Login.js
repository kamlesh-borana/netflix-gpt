import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { validateSignInDetails, validateSignUpDetails } from "../utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { BANNER_IMG_URL, DEFAULT_USER_AVATAR_URL } from "../config";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    //   const user = auth.currentUser;
    if (user?.isLoggedIn) {
      navigate("/browse");
    }
  }, [user]);

  if (!user || user?.isLoggedIn) {
    return <h1>Loading...</h1>;
  }

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignIn = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const validationErrorMsg = validateSignInDetails(email, password);
    setError(validationErrorMsg);

    if (validationErrorMsg) return;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user -=> ", user);
        // dispatch(
        //   addUser({
        //     id: user?.uid,
        //     name: user?.displayName,
        //     email: user?.email,
        //     avatar: user?.photoURL,
        //   })
        // );
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleSignUp = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const fullName = fullNameRef.current.value;

    const validationErrorMsg = validateSignUpDetails(email, password, fullName);
    setError(validationErrorMsg);

    if (validationErrorMsg) return;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user -=> ", user);
        updateProfile(user, {
          displayName: fullName,
          photoURL: DEFAULT_USER_AVATAR_URL,
        })
          .then(() => {
            // Profile updated!
            console.log("user -=> ", user);
            dispatch(
              addUser({
                id: user?.uid,
                name: user?.displayName,
                email: user?.email,
                avatar: user?.photoURL,
              })
            );
            navigate("/browse");
          })
          .catch((error) => {
            // An error occurred
            setError(error?.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
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
          src={BANNER_IMG_URL}
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
