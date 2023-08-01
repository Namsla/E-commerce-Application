import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header1 from "../../components/Nams-Layout/header";
import Footer1 from "../../components/Nams-Layout/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/use-title";
import { Country } from "./country";
import { State } from "./state";

function SignUp() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [about, setAbout] = useState("");
  const [pError, setPError] = useState("");
  const [eError, setEError] = useState("");

  const navigate = useNavigate();

  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate("/signin");
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const emailFormat = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // const user = client.find((user) => email === user.email);
    if (!password || !password2 || !fName || !email) {
      toast.error("Please input all starred fields");

      return;
    } else if (!emailFormat.test(email)) {
      setEError("Invalid email.");
      toast.error("Invalid email.");
      return;
    } else if (!passwordFormat.test(password)) {
      setPError("Password do not satisfy above criteria.");
      toast.error("Password do not satisfy criteria.");
      return;
    } else if (password !== password2) {
      setPError("Confirmation password does not match.");
      toast.error("Confirmation password does not match.");
      return;
    }
    axios
      .post("http://localhost:3000/signup", { email, password, fName })
      .then((response) => {
        toast.success("Welcome");
        localStorage.setItem("token", response.data.accessToken);
        navigate("/signin");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useTitle("Sign Up Page");
  return (
    <div className="dark:bg-dark">
      <Header1 />
      <main className="flex justify-center drop-shadow-lg drop-shadow-lg dark:bg-dark  ">
        <div className="flex justify-center ">
          <div className="w-1/2 border-2 border-gray-900/10 rounded-lg dark:bg-gray-800 p-8 ">
            <form>
              {/* <div className="space-y-12"> */}
              <div className="border-b border-gray-900/10 pb-6">
                <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-6 dark:text-slate-100">
                    <p className="text-2xl text-amber-600 mb-5 flex justify-center ">
                      Sign Up
                    </p>
                    <p className=" flex sm:col-span-6 text-xs mb-5">
                      Please complete all fields marked with asterisk (
                      <p className="text-red-600 text-sm">*</p>)
                    </p>
                    <div className="col-span-6 ">
                      <label className="flex text-sm leading-6 text-gray-900 dark:text-slate-100 dark:text-slate-100">
                        Email address&nbsp;<p className="text-red-500">*</p>
                      </label>
                      <div className="mt-2">
                        <input
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          id="email"
                          name="email"
                          type="email"
                          className="block w-full dark:bg-slate-200/20 dark:text-slate-100 rounded-md py-1.5 px-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-100"
                        />
                      </div>
                      <div className="sm:col-span-6 text-xs mt-2">
                        {eError && (
                          <p className="text-red-500 mr-auto text-xs">
                            {eError}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-6 text-xs dark:text-slate-100">
                    Password must be at least 8 characters long and it should
                    contain at least 1 letter, 1 digit, and 1 special character
                    [!@#$%^&*].
                  </div>
                  <div className="sm:col-span-6 text-xs">
                    {pError && (
                      <p className="text-red-500 mr-auto ">{pError}</p>
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label className="flex text-sm font-medium leading-6 text-gray-900 dark:text-slate-100 dark:text-slate-100">
                      Password&nbsp;<p className="text-red-500">*</p>
                    </label>

                    <div className="mt-2">
                      <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        name="password"
                        id="password"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label className="flex text-sm font-medium leading-6 text-gray-900 dark:text-slate-100 dark:text-slate-100">
                      Confirm Password&nbsp;<p className="text-red-500">*</p>
                    </label>
                    <div className="mt-2">
                      <input
                        value={password2}
                        onChange={(event) => setPassword2(event.target.value)}
                        type="password"
                        name="password2"
                        id="password2"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label className="flex text-sm font-medium leading-6 text-gray-900 dark:text-slate-100 dark:text-slate-100">
                      First Name&nbsp;<p className="text-red-500">*</p>
                    </label>
                    <div className="mt-2">
                      <input
                        value={fName}
                        onChange={(event) => setFname(event.target.value)}
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="flex text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        value={lName}
                        onChange={(event) => setLname(event.target.value)}
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      Country (Disabled option)
                    </label>
                    <div className="mt-2">
                      <select
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        id="country"
                        name="country"
                        className="block w-full px-1 dark:bg-slate-200/20 dark:text-slate-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        // disabled
                      >
                        {Country.map((item) => (
                          <option key={item.text}>{item.text}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      State
                    </label>
                    <div className="mt-2">
                      <select
                        value={state}
                        onChange={(event) => setState(event.target.value)}
                        id="state"
                        name="state"
                        className="block w-full px-1 dark:bg-slate-200/20 dark:text-slate-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        {State.map((item) => (
                          <option key={item.text}>{item.text}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-5">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      Street Address
                    </label>
                    <div className="mt-2">
                      <input
                        value={street}
                        onChange={(event) => setStreet(event.target.value)}
                        type="text"
                        name="street-address"
                        id="street-address"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        type="text"
                        name="city"
                        id="city"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      ZIP
                    </label>
                    <div className="mt-2">
                      <input
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      About
                    </label>
                    <div className="mt-2">
                      <textarea
                        value={about}
                        onChange={(event) => setAbout(event.target.value)}
                        id="about"
                        name="about"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
                      Write a few sentences about yourself.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-900/10 pb-5 mt-5">
                {/* <div className=" space-y-10"> */}
                <fieldset>
                  {/* <div className=" space-y-6"> */}
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label className="font-medium text-gray-900 dark:text-slate-100">
                        I acknowledge that I have read the terms and conditions
                        and agree to abide by the terms and conditions.
                      </label>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label className="font-medium text-gray-900 dark:text-slate-100">
                        More contracts.
                      </label>
                    </div>
                  </div>
                  {/* </div> */}
                </fieldset>
                {/* </div> */}
              </div>
              {/* </div> */}
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="rounded-md bg-amber-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <Footer1 />
    </div>
  );
}

export default SignUp;
