import { Link } from "react-router-dom";
import Header1 from "../components/Nams-Layout/header";
import Footer1 from "../components/Nams-Layout/footer";

function Protected({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("session-token");

  if (token) {
    return <div>{children}</div>;
  }

  return (
    <>
      <Header1 />
      <main>
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 m-10">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-yellow-50 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-sans ...">
                Oops.. Looks Like You Are Not Signed In!
              </h3>
              <p className="my-4">Please Sign In To Continue</p>
            </blockquote>

            <figcaption className="flex items-center justify-center space-x-3">
              <div className="flex flex-col gap-2 items-center">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>
                    <Link to="/signin" className="flex justify-center m-2 mt-4">
                      <button className="bg-amber-600 text-white p-2 rounded-lg hover:bg-amber-500 ">
                        Sign-In
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 m-10">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-yellow-50 border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Don't Have An Account?
              </h3>
              <p className="my-4">Create An account In Less Than 2 Minutes</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <div className="flex flex-col gap-2 items-center">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>
                    <Link to="/signup" className="flex justify-center m-2 mt-4">
                      <button className="bg-amber-600 text-white p-2 rounded-lg hover:bg-amber-500 ">
                        Sign-Up
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </main>

      <Footer1 />
    </>
  );
}

export default Protected;
