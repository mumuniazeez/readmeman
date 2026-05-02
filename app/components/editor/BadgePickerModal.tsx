import React, { type JSX } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";
import { Button } from "../ui/button";

const SELECTED_BADGES = [
  // Downloads
  {
    name: "NPM Downloads",
    image: "https://img.shields.io/npm/dm/package.svg",
    category: "Downloads",
  },
  {
    name: "Total Downloads",
    image: "https://img.shields.io/npm/dt/package.svg",
    category: "Downloads",
  },

  // Social
  {
    name: "GitHub Stars",
    image: "https://img.shields.io/github/stars/user/repo.svg",
    category: "Social",
  },
  {
    name: "GitHub Forks",
    image: "https://img.shields.io/github/forks/user/repo.svg",
    category: "Social",
  },
  {
    name: "GitHub Issues",
    image: "https://img.shields.io/github/issues/user/repo.svg",
    category: "Social",
  },
  {
    name: "Contributors",
    image: "https://img.shields.io/github/contributors/user/repo.svg",
    category: "Social",
  },
];
const SAMPLE_BADGES = [
  // License
  {
    name: "MIT License",
    image: "https://img.shields.io/badge/License-MIT-yellow.svg",
    category: "License",
  },
  {
    name: "Apache 2.0",
    image: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    category: "License",
  },
  {
    name: "GPL v3",
    image: "https://img.shields.io/badge/License-GPLv3-blue.svg",
    category: "License",
  },

  // Build
  {
    name: "Build Passing",
    image: "https://img.shields.io/badge/build-passing-brightgreen.svg",
    category: "Build",
  },
  {
    name: "Build Failing",
    image: "https://img.shields.io/badge/build-failing-red.svg",
    category: "Build",
  },
  {
    name: "Tests Passing",
    image: "https://img.shields.io/badge/tests-passing-brightgreen.svg",
    category: "Build",
  },

  // Version
  {
    name: "Version 1.0.0",
    image: "https://img.shields.io/badge/version-1.0.0-blue.svg",
    category: "Version",
  },
  {
    name: "Release v2.0",
    image: "https://img.shields.io/badge/release-v2.0-blue.svg",
    category: "Version",
  },

  // Languages
  {
    name: "TypeScript",
    image:
      "https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white",
    category: "Language",
  },
  {
    name: "JavaScript",
    image:
      "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black",
    category: "Language",
  },
  {
    name: "React",
    image:
      "https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB",
    category: "Language",
  },
  {
    name: "Node.js",
    image:
      "https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white",
    category: "Language",
  },
  {
    name: "Python",
    image:
      "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white",
    category: "Language",
  },
  {
    name: "Go",
    image: "https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white",
    category: "Language",
  },
  {
    name: "Rust",
    image: "https://img.shields.io/badge/Rust-000000?logo=rust&logoColor=white",
    category: "Language",
  },
  {
    name: "Vue.js",
    image:
      "https://img.shields.io/badge/Vue.js-35495E?logo=vue.js&logoColor=4FC08D",
    category: "Language",
  },
  {
    name: "Next.js",
    image:
      "https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white",
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white",
    category: "Language",
  },

  // Coverage
  {
    name: "Coverage 80%",
    image: "https://img.shields.io/badge/coverage-80%25-green.svg",
    category: "Coverage",
  },
  {
    name: "Coverage 90%",
    image: "https://img.shields.io/badge/coverage-90%25-brightgreen.svg",
    category: "Coverage",
  },
  {
    name: "Coverage 100%",
    image: "https://img.shields.io/badge/coverage-100%25-brightgreen.svg",
    category: "Coverage",
  },

  // Downloads
  {
    name: "NPM Downloads",
    image: "https://img.shields.io/npm/dm/package.svg",
    category: "Downloads",
  },
  {
    name: "Total Downloads",
    image: "https://img.shields.io/npm/dt/package.svg",
    category: "Downloads",
  },

  // Social
  {
    name: "GitHub Stars",
    image: "https://img.shields.io/github/stars/user/repo.svg",
    category: "Social",
  },
  {
    name: "GitHub Forks",
    image: "https://img.shields.io/github/forks/user/repo.svg",
    category: "Social",
  },
  {
    name: "GitHub Issues",
    image: "https://img.shields.io/github/issues/user/repo.svg",
    category: "Social",
  },
  {
    name: "Contributors",
    image: "https://img.shields.io/github/contributors/user/repo.svg",
    category: "Social",
  },
];

const CATEGORIES = [
  "All",
  "Build",
  "License",
  "Version",
  "Language",
  "Coverage",
  "Downloads",
  "Social",
];

export default function BadgePickerModal({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="overflow-y-hidden">
        <DialogHeader>
          <DialogTitle>Add a Badge</DialogTitle>
          <DialogDescription>
            Browse and select a badge for your project.
          </DialogDescription>
        </DialogHeader>
        <Tabs className="max-w-md mx-auto" defaultValue="All">
          <ScrollArea className="w-full max-w-[350px]">
            <TabsList className="inline-flex w-max justify-start p-1">
              {CATEGORIES.map((c) => (
                <TabsTrigger key={c} value={c}>
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
          <TabsContent value={"All"}>
            <ScrollArea className="w-fit h-[400px]">
              <div className="grid grid-cols-2 gap-3 py-2">
                {SAMPLE_BADGES.map((badge, idx) => (
                  <button
                    key={idx}
                    // onClick={() => toggleBadge(badge.image)}
                    className={`p-3 rounded-lg border transition-all ${"border-[#2A2A2E] hover:border-[#5B6CFF]/50"}`}
                  >
                    <img
                      src={badge.image}
                      alt={badge.name}
                      className="h-5 mb-2"
                    />
                    <p className="text-xs font-mono text-[#8C8C99] text-left">
                      {badge.name}
                    </p>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          {CATEGORIES.map((c) => (
            <TabsContent value={c} key={c}>
              <div className="grid grid-cols-2 gap-3 py-2">
                {SAMPLE_BADGES.filter((s) => s.category === c).map(
                  (badge, idx) => (
                    <button
                      key={idx}
                      // onClick={() => toggleBadge(badge.image)}
                      className={`p-3 rounded-lg border transition-all ${"border-[#2A2A2E] hover:border-[#5B6CFF]/50"}`}
                    >
                      <img
                        src={badge.image}
                        alt={badge.name}
                        className="h-5 mb-2"
                      />
                      <p className="text-xs font-mono text-[#8C8C99] text-left">
                        {badge.name}
                      </p>
                    </button>
                  ),
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <DialogFooter className="sm:justify-start grid! grid-cols-2 gap-3 py-2">
          {SELECTED_BADGES.map((badge, idx) => (
            <div className="relative">
              <Badge
                variant={"secondary"}
                className="flex items-center justify-center p-2.5 w-full!"
                key={idx}
              >
                <img src={badge.image} alt={badge.name} className="h-5" />
              </Badge>
              <Button
                variant={"secondary"}
                size={"icon-xs"}
                className="absolute -right-1 -top-5 hover:bg-destructive hover:text-destructive-foreground rounded-full"
              >
                <X />
              </Button>
            </div>
          ))}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
