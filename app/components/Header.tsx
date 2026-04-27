import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="border-b border-zinc-500 py-5 px-20 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">
          Readme<span className="text-primary">Man</span>
        </h1>
      </div>
      <div className="space-x-3">
        <Link target="_blank" to="https://github.com/mumuniazeez/readmeman">
          <Button variant={"ghost"} size={"lg"}>
            <span> Star on Github</span>
            <Star className="w-4 h-4" />
          </Button>
        </Link>
        <Button size={"lg"}>Open Editor</Button>
      </div>
    </header>
  );
}
