import { Link } from "react-router-dom";
import Header1 from "../components/Nams-Layout/header";

function Protected({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("session-token");

  if (token) {
    return <div>{children}</div>;
  }

  return (
    <>
      <Header1 />
      <div className="mt-5">
        <div className="flex justify-center">
          Oops.. looks like you are not signed in. Please sign in to continue.
        </div>
        <Link to="/signin" className="flex justify-center m-2 mt-4">
          <button className="bg-amber-600 text-white p-2 mt-2 rounded-lg hover:bg-amber-500 ">
            Sign-In
          </button>
        </Link>
        <div className="flex justify-center m-2 mt-4">
          Don't have account? Create an account in less than 2 minutes.
        </div>
        <Link to="/signup" className="flex justify-center">
          <button className="bg-amber-600 text-white p-2 mt-2 rounded-lg hover:bg-amber-500 ">
            Sign-Up
          </button>
        </Link>
      </div>
    </>
  );
}

export default Protected;
