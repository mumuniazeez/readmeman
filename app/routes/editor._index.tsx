import { Link } from "react-router";
import type { Route } from "./+types/editor._index";
import { Check, Copy, Download, Share2, Star, UploadIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "~/components/ui/resizable";
import EditorPanel from "~/components/editor/EditorPanel";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { useState } from "react";
import PreviewPanel from "~/components/editor/PreviewPanel";

export function meta({}: Route.MetaArgs): Route.MetaDescriptors {
  return [
    { title: "Readme Editor - ReadmeMan" },
    {
      name: "description",
      content:
        "ReadmeMan Editor - Easily generate readme files for you project",
    },
  ];
}

export default function Editor() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between border-b border-zinc-800 py-2 px-10">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold">
              Readme<span className="text-primary">Man</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <p className="font-mono text-sm text-green-400">Saved to browser</p>
        </div>
        <div className="space-x-3">
          <Button variant={"ghost"}>
            <UploadIcon />
            <span> Upload Screenshot</span>
          </Button>
          <Button variant={"ghost"}>
            <Share2 />
            <span>Share</span>
          </Button>
        </div>
      </header>
      <div className="editor-container flex flex-1 overflow-hidden">
        <ResizablePanelGroup orientation="horizontal" className="h-full">
          <ResizablePanel defaultSize={"50%"} minSize={"30%"}>
            <div className="h-full flex flex-col">
              <div className="flex-1 overflow-auto">
                <EditorPanel />
              </div>
              <div className="border-t border-[#2A2A2E] bg-[#0E0E0F] p-4 flex items-center justify-between">
                <span className="text-xs text-[#55555E] font-mono">
                  102 chars
                </span>
                <div className="flex gap-2">
                  <Button
                    // onClick={handleDownload}
                    className="bg-[#5B6CFF] hover:bg-[#7B8AFF]"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download .md
                  </Button>
                  <Button
                    // onClick={handleCopy}
                    variant="ghost"
                    className="border border-[#2A2A2E]"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 mr-2" />
                    ) : (
                      <Copy className="w-4 h-4 mr-2" />
                    )}
                    Copy Markdown
                  </Button>
                </div>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={"50%"} minSize={"30%"}>
            <PreviewPanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
