"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto">
      <h2 className="font-heading text-red-800 mb-10">Something went wrong</h2>

      <button className="btn btn-primary" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default Error;
