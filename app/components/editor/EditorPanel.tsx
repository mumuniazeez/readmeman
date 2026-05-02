import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import templates from "~/template";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Field, FieldGroup } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";
import { Textarea } from "../ui/textarea";
import BadgePickerModal from "./BadgePickerModal";
import { Switch } from "../ui/switch";

export default function EditorPanel() {
  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <div className="w-full">
        <Label className="text-sm font-mono text-zinc-400">Template</Label>
        <Select defaultValue={"blank"}>
          <SelectTrigger className="w-full h-10!">
            <SelectValue placeholder="Select a template" />
          </SelectTrigger>
          <SelectContent className="h-fit">
            {templates.map((template) => (
              <SelectItem value={template.key} key={template.key}>
                <div className="flex flex-col items-start">
                  <h6 className="font-bold text-md">{template.title}</h6>
                  <p className="font-mono">{template.description}</p>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full">
        <Accordion
          type="multiple"
          className="space-y-3 border-none"
          defaultValue={["header",  "about"]}
        >
          {/* Project Header */}
          <AccordionItem
            value="header"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>Project Header</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <Field className="gap-y-5">
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    Project Name
                  </Label>
                  <Input
                    placeholder="my-awesome-project"
                    className="h-9 bg-[#1E1E21] border-[#2A2A2E] "
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    One-line Description
                  </Label>
                  <Input
                    placeholder="A very awesome project"
                    className="h-9 bg-[#1E1E21] border-[#2A2A2E] "
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    Logo URL (optional)
                  </Label>
                  <Input
                    placeholder="https://example.com/logo.png"
                    className="h-9 bg-[#1E1E21] border-[#2A2A2E] "
                  />
                </FieldGroup>
              </Field>
            </AccordionContent>
          </AccordionItem>
          {/* Badges */}
          <AccordionItem
            value="badges"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>Badges</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <BadgePickerModal>
                <Button className="w-full" variant={"secondary"}>
                  <Plus /> Add Badges
                </Button>
              </BadgePickerModal>
            </AccordionContent>
          </AccordionItem>
          {/* About the Project */}
          <AccordionItem
            value="about"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>About the Project</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <Textarea
                className="bg-[#1E1E21] border-[#2A2A2E] "
                placeholder="A quite long description of your project...."
              />
            </AccordionContent>
          </AccordionItem>
          {/* Features */}
          <AccordionItem
            value="feature"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>Features</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <Field>
                <FieldGroup>
                  <div className="flex items-center justify-center gap-x-2">
                    <Input
                      placeholder="A very cool Feature"
                      className="h-9 bg-[#1E1E21] border-[#2A2A2E]"
                    />
                    <Button>
                      <X />
                    </Button>
                  </div>
                </FieldGroup>
                <FieldGroup>
                  <div className="flex items-center justify-center gap-x-2">
                    <Input
                      placeholder="A very cool Feature"
                      className="h-9 bg-[#1E1E21] border-[#2A2A2E]"
                    />
                    <Button>
                      <X />
                    </Button>
                  </div>
                </FieldGroup>
              </Field>
              <Button className="w-full" variant={"secondary"}>
                <Plus /> Add Feature
              </Button>
            </AccordionContent>
          </AccordionItem>
          {/* Tech Stack */}
          <AccordionItem
            value="tech-stack"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>Tech Stack</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <Field>
                <FieldGroup>
                  <div className="flex items-center justify-center gap-x-2">
                    <Input
                      placeholder="Icon"
                      className="h-9 bg-[#1E1E21] border-[#2A2A2E] w-20"
                    />
                    <Input
                      placeholder="ReactJS"
                      className="h-9 bg-[#1E1E21] border-[#2A2A2E]"
                    />
                    <Button>
                      <X />
                    </Button>
                  </div>
                </FieldGroup>
                <FieldGroup>
                  <div className="flex items-center justify-center gap-x-2">
                    <Input
                      placeholder="Icon"
                      className="h-9 bg-[#1E1E21] border-[#2A2A2E] w-20"
                    />
                    <Input
                      placeholder="ReactJS"
                      className="h-9 bg-[#1E1E21] border-[#2A2A2E]"
                    />
                    <Button>
                      <X />
                    </Button>
                  </div>
                </FieldGroup>
              </Field>
              <Button className="w-full" variant={"secondary"}>
                <Plus /> Add Tech Stack
              </Button>
            </AccordionContent>
          </AccordionItem>
          {/* Getting Started */}
          <AccordionItem
            value="getting-started"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>Getting Started</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <Field>
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    Prerequisites
                  </Label>
                  <Textarea
                    className="bg-[#1E1E21] border-[#2A2A2E] "
                    placeholder="e.g Nodejs, Python, Docker, etc...."
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    Installation
                  </Label>
                  <Textarea
                    className="bg-[#1E1E21] border-[#2A2A2E] "
                    placeholder="e.g npm install"
                  />
                </FieldGroup>
              </Field>
            </AccordionContent>
          </AccordionItem>
          {/* Usage */}
          <AccordionItem
            value="usage"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>Usage</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <Field>
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    Installation
                  </Label>
                  <Textarea
                    className="bg-[#1E1E21] border-[#2A2A2E] "
                    placeholder="e.g npm install"
                  />
                </FieldGroup>
                <FieldGroup className="flex-row">
                  <Switch />
                  <Label className="text-xs text-zinc-400 font-mono">
                    Include code example?
                  </Label>
                </FieldGroup>
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    Code Example
                  </Label>
                  <Textarea
                    className="bg-[#1E1E21] border-[#2A2A2E] "
                    placeholder="const example = 'code here'"
                  />
                </FieldGroup>
              </Field>
            </AccordionContent>
          </AccordionItem>
          {/* Contributing */}
          <AccordionItem
            value="contributing"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>Contributing</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <Field>
                <FieldGroup>
                  <Textarea
                    className="bg-[#1E1E21] border-[#2A2A2E] "
                    placeholder="Contributions are welcome! Please open an issue first to discuss what you would like to change."
                  />
                </FieldGroup>
              </Field>
            </AccordionContent>
          </AccordionItem>
          {/* License */}
          <AccordionItem
            value="license"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>License</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <Field>
                <FieldGroup>
                  <Input
                    placeholder="MIT"
                    className="h-9 bg-[#1E1E21] border-[#2A2A2E]"
                  />
                </FieldGroup>
              </Field>
            </AccordionContent>
          </AccordionItem>
          {/* Acknowledgements */}
          <AccordionItem
            value="acknowledgements"
            className="bg-[#161618] border border-[#2A2A2E] rounded-xl overflow-hidden data-open:bg-[#161618]"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline!">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-400">
                <span>Acknowledgements</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 border-t border-[#2A2A2E] space-y-3 h-fit pt-3">
              <Field>
                <FieldGroup>
                  <Input
                    placeholder="Acknowledgement"
                    className="h-9 bg-[#1E1E21] border-[#2A2A2E]"
                  />
                </FieldGroup>
              </Field>
              <Button className="w-full" variant={"secondary"}>
                <Plus /> Add Acknowledgement
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
