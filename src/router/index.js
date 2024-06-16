import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Router = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        dispatch(
          addUser({
            id: user?.uid,
            name: user?.displayName,
            email: user?.email,
            avatar: user?.photoURL,
          })
        );
      }
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
