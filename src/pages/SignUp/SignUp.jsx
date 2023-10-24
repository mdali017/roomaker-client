import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(watch("example"));
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    console.log(name);
  };
  return (
    <div className="min-h-screen flex justify-center items-center max-w-full bg-gray-300">
      <div className="text-center w-[400px]">
        <h1 className="bg-green-500 py-3 text-white font-semibold text-xl">
          Create An Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body border ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-500 text-left">Name is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-500 text-left">
                Enter Your Validate Email
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-500 text-left">
                Enter Your Validate Password
              </span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button onClick={() => handleSingUp()} className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
