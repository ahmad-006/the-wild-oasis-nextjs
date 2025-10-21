"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border border-primary-800">
      <p className="mb-2">There are {users.length} users</p>
      <button
        className="px-4 py-2 bg-accent-500 text-primary-800"
        onClick={() => setCount((c) => c + 1)}
      >
        {count}
      </button>
    </div>
  );
}
