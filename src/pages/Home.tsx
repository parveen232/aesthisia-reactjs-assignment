import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-between px-20 py-5">
        <div></div>
        <h1 className="text-4xl font-semibold">Home</h1>
        <Link to="login" className="text-xl font-medium">login</Link>
    </div>
  );
}
