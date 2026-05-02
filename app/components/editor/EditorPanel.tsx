import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import templates, { type TemplateType } from "~/template";
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
import { useEditorStore } from "~/stores/useEditorStore";
import { Badge } from "../ui/badge";

export default function EditorPanel() {
  const editorStore = useEditorStore();

  const switchTemplate = (type: TemplateType) => {
    editorStore.setTemplateType(type);
    editorStore.setTemplateData(
      templates.find((template) => template.type === type)!.data,
    );
  };

  useEffect(() => {
    switchTemplate("blank");
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <div className="w-full">
        <Label className="text-sm font-mono text-zinc-400">Template</Label>
        <Select
          defaultValue={"blank"}
          value={editorStore.templateType}
          onValueChange={(val: TemplateType) => switchTemplate(val)}
        >
          <SelectTrigger className="w-full h-10!">
            <SelectValue placeholder="Select a template" />
          </SelectTrigger>
          <SelectContent className="h-fit">
            {templates.map((template) => (
              <SelectItem value={template.type} key={template.type}>
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
          defaultValue={["header", "about"]}
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
                    value={editorStore.projectName}
                    onChange={(e) => editorStore.setProjectName(e.target.value)}
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    One-line Description
                  </Label>
                  <Input
                    placeholder="A very awesome project"
                    className="h-9 bg-[#1E1E21] border-[#2A2A2E] "
                    value={editorStore.description}
                    onChange={(e) => editorStore.setDescription(e.target.value)}
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    Logo URL (optional)
                  </Label>
                  <Input
                    placeholder="https://example.com/logo.png"
                    className="h-9 bg-[#1E1E21] border-[#2A2A2E] "
                    value={editorStore.logoUrl}
                    onChange={(e) => editorStore.setLogoUrl(e.target.value)}
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
              <div className="justify-start grid! grid-cols-4 gap-3 py-2">
                {editorStore.badges.map((badge, idx) => (
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
                      onClick={() => editorStore.removeBadge(badge.image)}
                    >
                      <X />
                    </Button>
                  </div>
                ))}
              </div>
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
                value={editorStore.aboutProject}
                onChange={(e) => editorStore.setAboutProject(e.target.value)}
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
                {editorStore.features.map((feature, idx) => (
                  <FieldGroup>
                    <div className="flex items-center justify-center gap-x-2">
                      <Input
                        placeholder="A very cool Feature"
                        value={feature}
                        onChange={(e) =>
                          editorStore.updateFeature(idx, e.target.value)
                        }
                        className="h-9 bg-[#1E1E21] border-[#2A2A2E]"
                      />
                      <Button
                        size={"icon"}
                        variant={"secondary"}
                        onClick={() => editorStore.removeFeature(idx)}
                      >
                        <X />
                      </Button>
                    </div>
                  </FieldGroup>
                ))}
              </Field>
              <Button
                className="w-full"
                variant={"secondary"}
                onClick={() => editorStore.addFeature("")}
              >
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
                {editorStore.techStack.map((techStack, idx) => (
                  <FieldGroup>
                    <div className="flex items-center justify-center gap-x-2">
                      <Input
                        placeholder="Icon"
                        value={techStack.icon}
                        onChange={(e) =>
                          editorStore.updateTechStack(idx, {
                            icon: e.target.value,
                            name: techStack.name,
                          })
                        }
                        className="h-9 bg-[#1E1E21] border-[#2A2A2E] w-20"
                      />
                      <Input
                        placeholder="ReactJS"
                        value={techStack.name}
                        onChange={(e) =>
                          editorStore.updateTechStack(idx, {
                            icon: techStack.icon,
                            name: e.target.value,
                          })
                        }
                        className="h-9 bg-[#1E1E21] border-[#2A2A2E]"
                      />
                      <Button
                        onClick={() => editorStore.removeTechStack(idx)}
                        variant={"secondary"}
                      >
                        <X />
                      </Button>
                    </div>
                  </FieldGroup>
                ))}
              </Field>
              <Button
                className="w-full"
                variant={"secondary"}
                onClick={() => editorStore.addTechStack({ icon: "", name: "" })}
              >
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
                    value={editorStore.prerequisites}
                    onChange={(e) =>
                      editorStore.setPrerequisites(e.target.value)
                    }
                    placeholder="e.g Nodejs, Python, Docker, etc...."
                  />
                </FieldGroup>
                <FieldGroup>
                  <Label className="text-xs text-zinc-400 font-mono">
                    Installation
                  </Label>
                  <Textarea
                    className="bg-[#1E1E21] border-[#2A2A2E]"
                    value={editorStore.installation}
                    onChange={(e) =>
                      editorStore.setInstallation(e.target.value)
                    }
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
                    value={editorStore.usageInstallation}
                    onChange={(e) =>
                      editorStore.setUsageInstallation(e.target.value)
                    }
                  />
                </FieldGroup>
                <FieldGroup className="flex-row">
                  <Switch
                    checked={editorStore.includeCodeExample}
                    onCheckedChange={(checked) => {
                      editorStore.setIncludeCodeExample(checked);
                    }}
                  />
                  <Label className="text-xs text-zinc-400 font-mono">
                    Include code example?
                  </Label>
                </FieldGroup>
                {editorStore.includeCodeExample && (
                  <FieldGroup>
                    <Label className="text-xs text-zinc-400 font-mono">
                      Code Example
                    </Label>
                    <Textarea
                      className="bg-[#1E1E21] border-[#2A2A2E] "
                      value={editorStore.codeExample}
                      onChange={(e) =>
                        editorStore.setCodeExample(e.target.value)
                      }
                      placeholder="const example = 'code here'"
                    />
                  </FieldGroup>
                )}
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
                    value={editorStore.contributing}
                    onChange={(e) =>
                      editorStore.setContributing(e.target.value)
                    }
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
                    value={editorStore.license}
                    onChange={(e) => editorStore.setLicense(e.target.value)}
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
                {editorStore.acknowledgements.map((acknowledgement, idx) => (
                  <div className="flex items-center justify-center gap-x-2">
                    <Input
                      placeholder="A very cool Feature"
                      value={acknowledgement}
                      onChange={(e) =>
                        editorStore.updateAcknowledgement(idx, e.target.value)
                      }
                      className="h-9 bg-[#1E1E21] border-[#2A2A2E]"
                    />
                    <Button
                      size={"icon"}
                      variant={"secondary"}
                      onClick={() => editorStore.removeAcknowledgement(idx)}
                    >
                      <X />
                    </Button>
                  </div>
                ))}
              </Field>
              <Button
                className="w-full"
                variant={"secondary"}
                onClick={() => editorStore.addAcknowledgement("")}
              >
                <Plus /> Add Acknowledgement
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
