import Header from "~/components/Header";
import type { Route } from "./+types/_index";
import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";
import Footer from "~/components/Footer";

type Feature = {
  title: string;
  description: string;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ReadmeMan - Generate Readme that actually get read." },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader(): Feature[] {
  return [
    { title: "Live Preview", description: "Updates as you type" },
    { title: "Badge Picker", description: "100+ shields.io badges" },
    {
      title: "Export Instantly",
      description: "Download .md or copy to clipboard",
    },
  ];
}

export default function Home({ loaderData: features }: Route.ComponentProps) {
  return (
    <div className="landing-page-container">
      <Header />
      <main>
        <section
          id="hero-section"
          className="my-20 flex items-center justify-center flex-col"
        >
          <div className="text-center flex flex-col gap-4 items-center justify-center">
            <h1 className="text-7xl leading-[110%] w-[90%] font-serif">
              Write READMEs that actually get read.
            </h1>
            <p className="text-lg text-zinc-500 tracking-[1px] font-mono">
              Structured Editor. Live Preview. No Login. Free Forever
            </p>

            <div className="space-x-3 mt-5">
              <Button className="group" size={"lg"}>
                <span className="group-hover:me-1 transition-all duration-150">
                  Start Building
                </span>
                <ArrowRight />
              </Button>
              <Button variant={"secondary"} size={"lg"}>
                See an Example
              </Button>
            </div>
          </div>
          <div
            id="display"
            className="w-[80%] bg-foreground border-zinc-800 border-4 mt-20 rounded-3xl h-[500px] shadow-xl shadow-primary/5"
          ></div>
        </section>

        <section
          id="feature-section"
          className="my-20 flex items-center justify-center gap-5"
        >
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-secondary-foreground border border-zinc-500 rounded-xl p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 group">
      <h3 className="font-serif text-md mb-2 group-hover:text-primary transition-colors">
        {feature.title}
      </h3>
      <p className="text-[#8C8C99] text-sm font-mono">{feature.description}</p>
    </div>
  );
}
