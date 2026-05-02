import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="border-b border-zinc-800 py-2 px-20 flex justify-between items-center">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold">
            Readme<span className="text-primary">Man</span>
          </h1>
        </Link>
      </div>
      <div className="space-x-3">
        <Link target="_blank" to="https://github.com/mumuniazeez/readmeman">
          <Button variant={"ghost"}>
            <span> Star on Github</span>
            <Star className="w-4 h-4" />
          </Button>
        </Link>
        <Link to={"/editor"}>
          <Button>Open Editor</Button>
        </Link>
      </div>
    </header>
  );
}
