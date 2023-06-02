import petalsIcon from "./assets/icons/petals-icon.png";
import eyeIcon from "./assets/icons/eye-icon.png";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    // alert("data you have entered is sent to the server for processing")
    console.log("clicked!!");
  }

  function handleEyeClick() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex h-full w-full flex-col items-center font-inter">
      <div className="flex flex-col items-center gap-2">
        <img src={petalsIcon} alt="" />
        <div className="font-poppins">
          <span className="mr-3 text-[34px] font-medium text-[#020100]">
            Welcome
          </span>
          <span className="text-[34px] font-medium text-[#08A593]">Back!</span>
        </div>
        <span className="text-[#667085]">Glad to see you, Again!</span>
      </div>
      <form
        action=""
        className="mt-9 flex w-full flex-col"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-lg border-2 border-solid border-slate-300 px-6 py-4 text-lg tracking-wide text-slate-800 outline-none"
        />
        <div className="mb-10 mt-10 flex flex-col items-end">
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border-2 border-solid border-slate-300 px-6 py-4 text-lg tracking-wide text-slate-800 outline-none"
            />
            <div
              className="absolute right-3 top-5 cursor-pointer"
              onClick={() => handleEyeClick()}
            >
              <img src={eyeIcon} alt="" />
            </div>
          </div>
          <a href="#" className="mt-2 text-[#667085]">
            Forgot Password?
          </a>
        </div>
        <button className="rounded-lg bg-[#020100] px-7 py-4 text-lg font-semibold text-[#fff] shadow-2xl">
          Log In
        </button>
      </form>
      <div className="mt-auto">
        <span className="mr-1 text-[#667085]">Don’t an account yet?</span>
        <a href="#" className="font-medium text-[#08A593]">
          Sign Up
        </a>
      </div>
    </div>
  );
}
