import { Link, useNavigate } from "react-router-dom";
import { EmailIcon, FBIcon, googleIcon, KeyIcon } from "../../assets/Icons";
import IMG1 from "../../assets/Login.jpg";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/AuthStore";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { login, isAuthenticated }: any = useAuthStore();

  const validatePassword = (value: string) => {
    if (!value.trim()) return "Password is required";
    if (value.length < 6)
      return "Password must be at least 6 characters";
    return "";
  };

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);

    setErrors((prev) => ({
      ...prev,
      password: validatePassword(value),
    }));
  };

  const loginHandle = async () => {
    await login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Successfully Login!");
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

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
          Log In
        </h1>

        <div className="border border-white/30 flex items-center px-3.5 py-3.5 h-11.25 rounded-lg mb-1">
          {EmailIcon}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none px-2 font-poppins bg-transparent text-white placeholder-white/70"
            placeholder="User name"
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

        <button
          onClick={loginHandle}
          className="cursor-pointer w-full bg-[#0062FF] hover:bg-[#004ecc]
                     h-11.25 text-white font-poppins font-semibold rounded-md mt-6 text-[15px]"
        >
          Log In
        </button>

        <h1 className="mt-4 text-end text-[#6aa8ff] font-semibold font-poppins cursor-pointer">
          Forgot password?
        </h1>

        <div className="flex items-center justify-between mt-6">
          <hr className="border-white/30 w-[45%]" />
          <h1 className="font-poppins text-[14px] text-white/70">or</h1>
          <hr className="border-white/30 w-[45%]" />
        </div>

        <div className="flex items-center gap-5 mt-5 justify-center">
          <div className="cursor-pointer border-white/30 w-[40%] h-11.25 border rounded-md flex items-center justify-center gap-3.75 text-white">
            {googleIcon}
            <h1 className="font-poppins font-semibold text-[14px]">
              Google
            </h1>
          </div>

          <div className="cursor-pointer border-white/30 w-[40%] h-11.25 border rounded-md flex items-center justify-center gap-3.75 text-white">
            {FBIcon}
            <h1 className="font-poppins font-semibold text-[14px]">
              Facebook
            </h1>
          </div>
        </div>

        <h1 className="mt-10 font-poppins text-[15px] text-white/70 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-semibold text-[#6aa8ff]">
            Sign Up
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
