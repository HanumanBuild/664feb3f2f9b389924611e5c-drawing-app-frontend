import React from 'react';

function Signup() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Signup</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Signup</button>
      </form>
    </div>
  );
}

export default Signup;