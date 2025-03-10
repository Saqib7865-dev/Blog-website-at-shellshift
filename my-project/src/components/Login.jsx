import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async (e) => {
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
      <div className="flex min-h-full flex-1 flex-col  justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-700">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && <p className="text-red-500">{error}</p>}{" "}
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-zinc-700"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-zinc-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500 focus:ring-1 focus:ring-inset focus:ring-zinc-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-zinc-700"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-zinc-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500 focus:ring-1 focus:ring-inset focus:ring-zinc-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
                onClick={handleLogin}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
