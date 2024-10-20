/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { AuthContext } from "./Auth/AuthProvider";
import { updateProfile } from "firebase/auth"; // Import Firebase updateProfile
import Lottie from "lottie-react";
import registerAnimation from "../../src/assets/login-animation.json"; // Correct animation path

const Registration = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Create user with email and password
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update the user's profile with name and photoURL
        updateProfile(user, {
          displayName: name,
          photoURL: photo || "https://example.com/default-profile.png", // Default photo if not provided
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration successful!",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
            navigate("/"); // Navigate to home page after successful registration
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            Swal.fire({
              icon: "error",
              title: "Profile update failed",
              text: "An error occurred while updating the profile.",
            });
          });
      })
      .catch((error) => {
        console.error("Registration error:", error);
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: "An error occurred during registration.",
        });
      });
  };

  const handleGoogleRegister = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Google Sign-In successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Sign-In error:", error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-In failed",
          text: "An error occurred during Google Sign-In.",
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Animation Section */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <Lottie animationData={registerAnimation} autoPlay loop />
        </div>

        {/* Form Section */}
        <div className="card w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Create Your Account
            </h1>
            <p className="text-gray-600">Sign up to get started</p>
          </div>

          <form onSubmit={handleRegister}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700 font-semibold">
                  Photo URL (optional)
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500"
              />
            </div>

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
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-indigo-500 text-white w-full py-2 rounded-md hover:bg-indigo-600 transition-all">
                Register Now
              </button>
            </div>
          </form>

          <div className="divider my-6">OR</div>

          <button
            onClick={handleGoogleRegister}
            className="btn bg-white text-indigo-600 border border-indigo-500 w-full py-2 rounded-md hover:bg-indigo-100 transition-all flex items-center justify-center"
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google Logo"
              className="mr-2"
            />
            Sign up with Google
          </button>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/Login" className="text-indigo-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
