// eslint-disable-next-line no-unused-vars
import React from "react";

const Login = () => {
  return (

    <div>
      <div className="flex min-h-full flex-1 flex-col  justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-700">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
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
                  className="block w-full rounded-md border-0 py-1.5 text-zinc-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500 focus:ring-1 focus:ring-inset focus:ring-zinc-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-zinc-700"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-teal-500 hover:text-teal-400"
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
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-zinc-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-zinc-500 focus:ring-1 focus:ring-inset focus:ring-zinc-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  const navigator = useNavigate();
  return (
    <div>
      <button onClick={()=>navigator('/crud')}>Submit</button>
    </div>
  );
};

export default Login;
