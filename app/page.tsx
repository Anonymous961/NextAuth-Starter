"use client";
import { useSession } from "next-auth/react";
import { Appbar } from "./components/Appbar";

export default function Home() {
  const session = useSession();
  return (
    <div className="w-full h-screen">
      <Appbar />
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl">NextAuth Starter</h1>
        <p>
          Check out{" "}
          <a
            className="text-blue-500 underline"
            href="https://github.com/Anonymous961/NextAuth-Starter/blob/main/README.md"
          >
            README.md
          </a>
        </p>
        {JSON.stringify(session.data?.user)}
      </div>
    </div>
  );
}
