import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login Successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleValidateCaptcha = (event) => {
    const user_captcha_value = captchaRef.current.value;
    // console.log(value);
    if (validateCaptcha(user_captcha_value)) {
      // alert("Captcha Matched");
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center max-w-full bg-gray-300">
      <div className="text-center w-[400px]">
        <h1 className="bg-green-500 py-3 text-white font-semibold text-xl">
          Please Login
        </h1>
        <form onSubmit={handleLogin} className="card-body border">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input
              type="text"
              name="captcha"
              ref={captchaRef}
              onBlur={handleValidateCaptcha}
              placeholder="Captcha"
              className="input input-bordered"
              required
            />
            {/* <button onBlur={handleValidateCaptcha} className="btn btn-xs">
              validated
            </button> */}
          </div>

          <div className="form-control mt-6">
            <button disabled={disabled} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
