import ExoLogo from "./assets/logo/exo-logo.png";
import InternetIcon from "./assets/icons/internet-icon.png";
import LinkedinIcon from "./assets/icons/linkedin-icon.png";
import igIcon from "./assets/icons/ig-icon.png";
import fbIcon from "./assets/icons/fb-icon.png";

export default function Card() {
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-info-img bg-cover  bg-top p-7 font-poppins">
      <div>
        <img src={ExoLogo} alt="exo-logo" />
      </div>
      <div className="mt-28 max-w-[300px]">
        <h1 className="mb-0 text-[38px] font-bold text-[#fff]">
          100% Uptime😎
        </h1>
        <span className="text-[28px] text-[#BFBFBF]">
          Zero Infrastructure Management
        </span>
        <div className="mt-5 flex gap-1">
          <div className="h-[6px] w-[18px] rounded-2xl bg-slate-100"></div>
          <div className="h-[6px] w-[6px] rounded-full bg-slate-700"></div>
          <div className="h-[6px] w-[6px] rounded-full bg-slate-700"></div>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div className="flex items-center gap-1">
          <img src={InternetIcon} alt="internet-icon" />
          <span className="text-sm text-slate-200">aesthisia.com</span>
        </div>
        <ul className="flex list-none items-center gap-2">
          <li>
            <a href="#">
              <img src={LinkedinIcon} alt="linkedin-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={fbIcon} alt="facebook-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={igIcon} alt="instagram-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
