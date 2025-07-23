import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
    if (!email || !password) {
      alert("Please enter both the credentials first");
      return;
    }
    e.preventDefault();
    try {
      await axios
        .get(`http://localhost:3005/login?email=${email}&password=${password}`)
        .then((response) => {
          response.data.message === "Login successful"
            ? (localStorage.setItem("loggedIn", true),
              navigator("/private/crud"))
            : alert("Login failed");
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log(err.message);
      console.log("User not found");
    }
  };

  return (
    <div>
      <div className="flex min-h-screen flex-1 flex-col  justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl text-teal-500 font-bold leading-9 tracking-tight capitalize">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && <p className="text-red-500">{error}</p>}{" "}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              {/* <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-zinc-700"
              >
                Email address
              </label> */}
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded border-none outline-none py-1.5 text-zinc-700 shadow placeholder:text-zinc-500 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded border-none outline-none py-1.5 text-zinc-700 shadow placeholder:text-zinc-500 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-500 hover:bg-teal-600 transition-all duration-300 ease-in-out px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow outline-none border-none"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
            <div>
              <Link to="/">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-transparent px-3 py-1.5 text-sm font-semibold leading-6 text-teal-500 shadow outline-none border-none"
                >
                  Go Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
