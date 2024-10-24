import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./Auth/AuthProvider";
import Lottie from "lottie-react";
import loginAnimation from "../../src/assets/login-animation.json";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signInUser(email, password);
      console.log(result.user);
      e.target.reset();

      toast.success("Successfully logged in", {
        position: "top-right",
      });
      navigate("/");
    } catch (error) {
      console.error(error);

      toast.error(error.message, {
        position: "top-right",
      });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully logged in with Google", {
          position: "top-right",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message, {
          position: "top-right",
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Animation Section */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Lottie animationData={loginAnimation} autoPlay loop />
        </div>

        {/* Form Section */}
        <div className="card w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">Welcome Back!</h1>
            <p className="text-gray-600">Login to your account</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500"
              />
            </div>
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500"
              />
              <label className="label text-right">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-indigo-500"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-indigo-500 text-white w-full py-2 rounded-md hover:bg-indigo-600 transition-all">
                Login
              </button>
            </div>
          </form>

          <div className="divider my-6">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-indigo-600 border border-indigo-500 w-full py-2 rounded-md hover:bg-indigo-100 transition-all flex items-center justify-center"
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google Logo"
              className="mr-2"
            />
            Sign in with Google
          </button>

          <p className="text-center mt-4 text-gray-600">
            New to the site?{" "}
            <Link
              to="/Registration"
              className="text-indigo-500 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Login;
