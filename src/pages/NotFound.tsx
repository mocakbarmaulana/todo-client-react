import { ErrorNotFound } from "@assets/index";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-96 h-96 flex flex-col items-center">
        <img src={ErrorNotFound} alt="not-found" className="w-[100%] h-[100%]" />
        <Link to="/" className="font-semibold text-xl my-3 text-primary hover:text-secondary w-fit">
          Home
        </Link>
      </div>
    </main>
  );
}
