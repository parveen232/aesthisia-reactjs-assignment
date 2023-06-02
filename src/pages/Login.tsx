import ExoCard from "../components/ExoCard";
import LoginCard from "../components/LoginCard";

export default function Login() {
  return (
    <main>
      <div className="flex h-screen w-full flex-col p-3 md:flex-row md:p-10">
        <div className="md:w-2/4">
          <ExoCard />
        </div>
        <div className="py-10 pl-[7%] pr-[7%] md:w-2/4 md:pl-[10%]">
          <LoginCard />
        </div>
      </div>
    </main>
  );
}
