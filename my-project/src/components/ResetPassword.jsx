import { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with actual password reset logic.
    if (email === '') {
      setErrorMessage('Email is required');
    } else {
      setSuccessMessage('A password reset link has been sent to your email.');
      setErrorMessage('');
      setEmail('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-zinc-700">Reset Password</h2>
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-zinc-700 text-sm font-bold mb-2"
            >
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
