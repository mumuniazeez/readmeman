import React from "react";
import { Dot } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="flex justify-center items-center px-5 py-2 font-mono text-sm text-zinc-500 border-t border-zinc-800">
      <p>MIT License</p>
      <Dot />
      <p>
        Built with {"<3"} by{" "}
        <Link
          target="_blank"
          to="https://github.com/mumuniazeez/"
          className="text-primary underline"
        >
          AzCodes
        </Link>
      </p>
    </div>
  );
}
