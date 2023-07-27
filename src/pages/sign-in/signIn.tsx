import Header1 from "../../components/Nams-Layout/header";
import { useState } from "react";
// import { IClient } from "../types/data";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Container from "../../components/containers/container";

// const apiUrl = " http://localhost:3000/clients";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [client, setClients] = useState<IClient[]>([]);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setClients(res);
  //     });
  // }, []);

  // const handleLogin1 = (event) => {
  //   event.preventDefault();

  //   // const user = client.find((user) => email === user.email);
  //   if (!email) {
  //     event.preventDefault();
  //     toast.error("Please input email address.");
  //   } else if (!password) {
  //     event.preventDefault();
  //     toast.error("Please enter your password.");
  //   } else if (user) {
  //     if (password === user.password) {
  //       navigate("/home");
  //     } else {
  //       toast.error("Incorrect password. Please try again!");
  //     }
  //   } else {
  //     toast.error(
  //       "Couldn't find user with the specified email. Please try again!"
  //     );
  //   }

  //   const users = client.find(
  //     (user) => email === user.email && password === user.password
  //   );

  //   if (users) {
  //     navigate("/home");
  //   }
  // };

  return (
    <>
      <Header1 />
      <div className="flex justify-center items-center mt-10 drop-shadow-lg">
        <div className="flex justify-center items-center bg-[url('https://logopond.com/logos/5b75fcfdf7cd91f36c1007cecb83c855.png')] bg-center bg-no-repeat bg-cover">
          <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 bg-white/90">
            <div className="flex justify-center text-2xl text-orange-600">
              Sign In
            </div>
            <div className=" sm:mx-auto sm:w-full sm:max-w-sm ">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-600">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="block w-full rounded-md py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-100"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-600">
                      Password
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-orange-600 hover:text-orange-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    // onClick={handleLogin1}
                    className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 mt-10 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Sign in{" "}
                  </button>
                </div>
              </form>
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <p className=" text-center text-sm text-gray-500 px-6 py-6">
                  Not a member yet?&nbsp;
                  <a
                    href="/register"
                    className="font-semibold leading-6 text-l text-orange-600 hover:text-orange-500 ml-2 mr-2"
                  >
                    Sign Up and Explore world of wonders
                  </a>
                  now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer position={toast.POSITION.TOP_CENTER} /> */}
      {console.log(email, password)}
    </>
  );
}

export default SignIn;
