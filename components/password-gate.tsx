'use client';

import { useState } from 'react';

const PASSWORD = 'eat12tacos*'; // change this or store in env

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Enter Password</h2>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
// This component will render its children only if the user has entered the correct password.