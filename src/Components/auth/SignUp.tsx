import { Link, useNavigate } from "react-router-dom";
import { EmailIcon, FBIcon, googleIcon, KeyIcon } from "../../assets/Icons";
import IMG1 from "../../assets/Signup.jpg";
import { useState } from "react";
import { useAuthStore } from "../../store/AuthStore";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const navigate = useNavigate();

  const signup = useAuthStore((state: any) => state.signup);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const validateEmail = (value: any) => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Invalid email format";
    return "";
  };

  const validatePassword = (value: any) => {
    if (!value.trim()) return "Password is required";
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (!passRegex.test(value))
      return "Password must be min 6 chars, 1 letter & 1 number";
    return "";
  };

  const validateRepeatPassword = (value: any) => {
    if (!value.trim()) return "Please repeat password";
    if (value !== password) return "Passwords do not match";
    return "";
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);

    setErrors((prev) => ({
      ...prev,
      password: validatePassword(value),
      repeatPassword: repeatPassword
        ? validateRepeatPassword(repeatPassword)
        : "",
    }));
  };

  const handleRepeatPasswordChange = (e: any) => {
    const value = e.target.value;
    setRepeatPassword(value);
    setErrors((prev) => ({
      ...prev,
      repeatPassword: validateRepeatPassword(value),
    }));
  };

  const isFormValid =
    !errors.email &&
    !errors.password &&
    !errors.repeatPassword &&
    email &&
    password &&
    repeatPassword;

  const signupHandle = async () => {
    if (!isFormValid) return;
    await signup(email, password);
    navigate("/");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${IMG1})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div
        className="relative z-10 w-[90%] max-w-md rounded-2xl p-8
                   bg-white/20 backdrop-blur-xl
                   border border-white/30 shadow-2xl"
      >
        <h1 className="font-semibold text-[30px] text-white font-poppins mb-10 text-center">
          Sign Up
        </h1>

        <div className="border border-white/30 flex items-center px-3.5 py-3.5 h-11.25 rounded-lg">
          {EmailIcon}
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full outline-none px-2 font-poppins bg-transparent text-white placeholder-white/70"
            placeholder="Your email"
          />
        </div>
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}

        <div className="mt-4 border border-white/30 flex items-center px-3.5 py-3.5 h-11.25 rounded-lg">
          {KeyIcon}
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            className="w-full outline-none px-2 font-poppins bg-transparent text-white placeholder-white/70"
            placeholder="Password"
          />
          <span
            className="cursor-pointer text-white/70"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && (
          <p className="text-red-400 text-xs mt-1">{errors.password}</p>
        )}

        <div className="mt-4 border border-white/30 flex items-center px-3.5 py-3.5 h-11.25 rounded-lg">
          {KeyIcon}
          <input
            type={showRepeatPassword ? "text" : "password"}
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            className="w-full outline-none px-2 font-poppins bg-transparent text-white placeholder-white/70"
            placeholder="Repeat Password"
          />
          <span
            className="cursor-pointer text-white/70"
            onClick={() => setShowRepeatPassword((prev) => !prev)}
          >
            {showRepeatPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.repeatPassword && (
          <p className="text-red-400 text-xs mt-1">
            {errors.repeatPassword}
          </p>
        )}

        <button
          disabled={!isFormValid}
          onClick={signupHandle}
          className={`w-full h-11.25 mt-6 rounded-md font-poppins font-semibold text-white
            ${
              isFormValid
                ? "bg-[#0062FF] hover:bg-[#004ecc]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Sign Up
        </button>

        <div className="flex items-center justify-between mt-8">
          <hr className="border-white/30 w-[45%]" />
          <h1 className="font-poppins text-[14px] text-white/70">or</h1>
          <hr className="border-white/30 w-[45%]" />
        </div>

        <div className="flex items-center justify-center gap-5 mt-5">
          <div className="cursor-pointer w-[40%] h-11.25 border border-white/30 rounded-md flex items-center justify-center gap-3.75 text-white">
            {googleIcon}
            <h1 className="font-poppins font-semibold text-[14px]">
              Google
            </h1>
          </div>
          <div className="cursor-pointer w-[40%] h-11.25 border border-white/30 rounded-md flex items-center justify-center gap-3.75 text-white">
            {FBIcon}
            <h1 className="font-poppins font-semibold text-[14px]">
              Facebook
            </h1>
          </div>
        </div>

        <h1 className="mt-10 font-poppins text-[15px] text-white/70 text-center">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold text-[#6aa8ff]"
          >
            Log In
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
