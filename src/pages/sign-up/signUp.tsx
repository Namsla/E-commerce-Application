import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IClient } from "../types/data";
import Container from "../../components/Layout/containers/container";

const apiUrl = " http://localhost:3000/clients";

function SignUp() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
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
  const [client, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setClients(res);
      });
  }, []);

  const handleSubmit = () => {
    const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    const emailFormat = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const user = client.find((user) => email === user.email);
    if (!userName || !password || !password2 || !fName || !email) {
      event.preventDefault();
      toast.error("Please input all starred fields");
    } else if (!emailFormat.test(email)) {
      event.preventDefault();
      setEError("Invalid email.");
      toast.error("Invalid email.");
    } else if (!passwordFormat.test(password)) {
      event.preventDefault();
      setPError("Password do not satisfy criteria.");
      toast.error("Password do not satisfy criteria.");
    } else if (password !== password2) {
      event.preventDefault();
      setPError("Confirmation password does not match.");
      toast.error("Confirmation password does not match.");
    } else if (user) {
      toast.error("Looks like you already have an account with us.");
    } else {
      event.preventDefault();
      toast.error("Sign up completed.");
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: userName,
          password: password,
          fName: fName,
          lName: lName,
          email: email,
          country: country,
          street: street,
          city: city,
          state: state,
          zip: zip,
          about: about,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/");
    }
  };

  return (
    <Container>
      <>
        <div className="flex justify-center p-4">
          <div className="w-1/2">
            <form>
              <div className="space-y-12">
                <div className="border-b border-t border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                      <p className=" flex sm:col-span-6 text-xs">
                        Please complete all fields marked with an asterisk (
                        <p className="text-red-600 text-sm">*</p>)
                      </p>
                      <label className="flex text-sm font-medium leading-6 text-gray-900 mt-5">
                        Username&nbsp;<p className="text-red-500 text-md">*</p>
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">takeo.</span> */}
                          <input
                            value={userName}
                            onChange={(event) =>
                              setUserName(event.target.value)
                            }
                            type="text"
                            name="username"
                            id="username"
                            className="block px-1 sm:col-span-8 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="BFD30"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-6 text-xs">
                      {" "}
                      Password must be at least 8 characters and contain at
                      least 1 letter, 1 digit, and 1 special character
                      [!@#$%^&*].
                    </div>
                    <div className="sm:col-span-6 text-xs">
                      {pError && (
                        <p className="text-red-500 mr-auto ">{pError}</p>
                      )}
                    </div>
                    <div className="sm:col-span-3">
                      <label className="flex text-sm font-medium leading-6 text-gray-900">
                        Password&nbsp;<p className="text-red-500">*</p>
                      </label>

                      <div className="mt-2">
                        <input
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          type="password"
                          name="password"
                          id="password"
                          className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label className="flex text-sm font-medium leading-6 text-gray-900">
                        Confirm Password&nbsp;<p className="text-red-500">*</p>
                      </label>
                      <div className="mt-2">
                        <input
                          value={password2}
                          onChange={(event) => setPassword2(event.target.value)}
                          type="password"
                          name="password2"
                          id="password2"
                          className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label className="flex text-sm font-medium leading-6 text-gray-900">
                        First name&nbsp;<p className="text-red-500">*</p>
                      </label>
                      <div className="mt-2">
                        <input
                          value={fName}
                          onChange={(event) => setFname(event.target.value)}
                          type="text"
                          name="first-name"
                          id="first-name"
                          className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          value={lName}
                          onChange={(event) => setLname(event.target.value)}
                          type="text"
                          name="last-name"
                          id="last-name"
                          className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6 text-xs">
                      {eError && (
                        <p className="text-red-500 mr-auto text-xs">{eError}</p>
                      )}
                    </div>
                    <div className="sm:col-span-6">
                      <label className="flex text-sm font-medium leading-6 text-gray-900">
                        Email address&nbsp;<p className="text-red-500">*</p>
                      </label>
                      <div className="mt-2">
                        <input
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          id="email"
                          name="email"
                          type="email"
                          className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Country (Disabled option)
                      </label>
                      <div className="mt-2">
                        <select
                          value={country}
                          onChange={(event) => setCountry(event.target.value)}
                          id="country"
                          name="country"
                          className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          disabled
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                          <option>Great Britain</option>
                          <option>France</option>
                          <option>Spain</option>
                          <option>Nepal</option>
                          <option>Japan</option>
                          <option>China</option>
                          <option>Taiwan</option>
                          <option>Russia</option>
                          <option>Philipines</option>
                          <option>New Zealand</option>
                          <option>Ausrtalia</option>
                          <option>Fiji</option>
                          <option>Thailand</option>
                          <option>India</option>
                          <option>Pakistan</option>
                          <option>Saudi Arabia</option>
                          <option>Turkey</option>
                          <option>Greece</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        State
                      </label>
                      <div className="mt-2">
                        <select
                          value={state}
                          onChange={(event) => setState(event.target.value)}
                          id="state"
                          name="state"
                          className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>MA</option>
                          <option>CA</option>
                          <option>NV</option>
                          <option>NY</option>
                          <option>TX</option>
                          <option>GE</option>
                          <option>WA</option>
                          <option>WY</option>
                          <option>CO</option>
                          <option>UT</option>
                          <option>Russia</option>
                          <option>Philipines</option>
                          <option>New Zealand</option>
                          <option>Ausrtalia</option>
                          <option>Fiji</option>
                          <option>Thailand</option>
                          <option>India</option>
                          <option>Pakistan</option>
                          <option>Saudi Arabia</option>
                          <option>Turkey</option>
                          <option>Greece</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-5">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          value={street}
                          onChange={(event) => setStreet(event.target.value)}
                          type="text"
                          name="street-address"
                          id="street-address"
                          className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          value={city}
                          onChange={(event) => setCity(event.target.value)}
                          type="text"
                          name="city"
                          id="city"
                          className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP code
                      </label>
                      <div className="mt-2">
                        <input
                          value={zip}
                          onChange={(event) => setZip(event.target.value)}
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          className="block px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        About
                      </label>
                      <div className="mt-2">
                        <textarea
                          value={about}
                          onChange={(event) => setAbout(event.target.value)}
                          id="about"
                          name="about"
                          className="block w-full px-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        ></textarea>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Write a few sentences about yourself.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="border-b border-gray-900/10 pb-12">
      <div className="mt-10 space-y-10">
        <fieldset>
                    <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input  id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-gray-900">I acknowledge that I have read the terms and conditions and agree to abide by the terms and conditions.</label>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input  id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
              </div>
              <div className="text-sm leading-6">
                <label className="font-medium text-gray-900">More contracts. Blah Blah Blah Blah.</label>
                
              </div>
            </div>
            
          </div>
        </fieldset>
        
      </div>
    </div> */}
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="rounded-md bg-indigo-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
        {console.log(userName, password)}
      </>
    </Container>
  );
}

export default SignUp;
