import Logo from "@/components/Logo/Logo";
import React from "react";
import LoginImg from "@/assets/login.png";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import FieldError from "@/components/FieldError/FieldError";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left side - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-white py-8 lg:py-[80px]">
        <div className="w-full max-w-sm sm:max-w-md mx-auto">
          {/* Logo */}
          <div className="flex items-center mb-8 sm:mb-12">
            <Logo />
          </div>

          {/* Welcome Text */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-base-content mb-2">
              Welcome Back
            </h1>
            <p className="text-sm sm:text-base text-base-content/70">
              Login with Profast
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 "
          >
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-sm sm:text-base">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full text-sm sm:text-base h-10"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!",
                  },
                })}
              />
              <FieldError
                name="email"
                type="required"
                errors={errors}
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-sm sm:text-base">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full text-sm sm:text-base h-10"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "Password has to be at least 6 charecter",
                  },
                })}
              />
              <FieldError
                name="password"
                type="required"
                errors={errors}
              />
              <FieldError
                name="password"
                type="minLength"
                errors={errors}
              />
            </div>

            {/* Forget Password Link */}
            <div className="text-left">
              <a
                href="#"
                className="link link-hover text-xs sm:text-sm text-base-content/60"
              >
                Forget Password?
              </a>
            </div>

            {/* Login Button */}
            <button className="bg-primary border-primary btn w-full text-secondary font-bold text-sm sm:text-base h-10 sm:h-12">
              Login
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <span className="text-xs sm:text-sm text-base-content/70">
              Don't have any account?{" "}
            </span>
            <Link
              to="/register"
              className="text-primary link font-medium text-xs sm:text-sm"
            >
              Register
            </Link>
          </div>

          {/* Divider */}
          <div className="divider my-6 sm:my-8 text-xs sm:text-sm">
            Or
          </div>

          {/* Google Login Button */}
          <button className="btn btn-outline w-full text-sm sm:text-base h-10 sm:h-12">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="hidden xs:inline sm:inline">
              Login with google
            </span>
            <span className="xs:hidden sm:hidden">Google</span>
          </button>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="flex-1 bg-primary/10 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 min-h-[300px] lg:min-h-screen">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <div className="aspect-square  rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={LoginImg}
              alt="Login page image"
              className="w-4/5 h-4/5 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
