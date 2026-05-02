import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useEditorStore } from "~/stores/useEditorStore";
import type { TemplateData } from "~/template";

export default function PreviewPanel() {
  const editorStore = useEditorStore();

  const {
    markdown,
    aboutProject,
    acknowledgements,
    badges,
    codeExample,
    contributing,
    description,
    features,
    includeCodeExample,
    installation,
    license,
    logoUrl,
    prerequisites,
    projectName,
    techStack,
    usageInstallation,
  } = editorStore;


  const generateMarkdown = (
    state: ReturnType<typeof useEditorStore.getState>,
  ) => {
    const template = `
# ${state.projectName}
-----
${state.description}

${state.logoUrl ? `![Project Logo](${state.logoUrl})` : ""}

${state.aboutProject}

${state.badges.length !== 0 ? `<div align="center" class="flex flex-wrap">
  ${state.badges.map(
    (badge) => `<img src="${badge.image}" alt="${badge.name}" />`,
  )}
</div>` : ""}

## 🚀 Features

${state.features
  .map(
    (feature) => `
- ${feature} 
`,
  )
  .join("\n")}

## 🛠 Tech Stack

${state.techStack
  .map(
    (tech) => `
- ${tech.icon} ${tech.name} 
`,
  )
  .join("\n")}

## 📋 Prerequisites

${state.prerequisites}

## 📦 Installation

${state.installation}

## 💻 Usage

${"```\n" + state.usageInstallation + "\n```"}


${state.includeCodeExample ? "```\n" + state.codeExample + "\n```" : ""}


## 🤝 Contributing

${state.contributing}

## 📄 License

${state.license}

## 🌟 Acknowledgements

${state.acknowledgements
  .map(
    (ack) => `
- ${ack}
`,
  )
  .join("\n")}
    `;

    if (state.markdown !== template) {
      state.setMarkdown(template);
    }
  };

  useEffect(() => {
    generateMarkdown(useEditorStore.getState());
    const unsubscribe = useEditorStore.subscribe((state) => {
      generateMarkdown(state);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue="github">
        <div className="border-b border-zinc-800 px-6 py-3 flex items-center justify-between bg-background">
          <span className="text-sm font-medium font-mono text-zinc-400">
            Preview
          </span>
          <TabsList>
            <TabsTrigger value="github">Github Style</TabsTrigger>
            <TabsTrigger value="raw">Raw Markdown</TabsTrigger>
          </TabsList>
        </div>
        {/* Content */}
        <div className="flex-1 overflow-auto">
          <TabsContent value="github">
            <div className="bg-white min-h-full text-black">
              <div className="max-w-4xl mx-auto p-8">
                <div className="prose">
                  <Markdown rehypePlugins={[rehypeRaw]}>{markdown}</Markdown>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="raw">
            <div className="bg-[#0E0E0F] min-h-full p-6">
              <pre className="font-mono text-xs text-[#F0F0F2] whitespace-pre-wrap">
                {markdown.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-[#55555E] select-none mr-4 text-right w-8">
                      {i + 1}
                    </span>
                    <span>{line}</span>
                  </div>
                ))}
              </pre>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
