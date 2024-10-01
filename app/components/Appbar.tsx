"use client";
import { signIn, signOut } from "next-auth/react";

export const Appbar = () => {
  return (
    <div>
      <button
        className="border-2 border-white rounded-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
      <button
        className="border-2 border-white rounded-md"
        onClick={() => signOut}
      >
        SignOut
      </button>
    </div>
  );
};
