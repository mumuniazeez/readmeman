import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function PreviewPanel() {
  const markdown = `<div align="center">
  <img src="https://via.placeholder.com/150" alt="Project Logo" width="150" height="150" />
  <h1>✨ Project Title ✨</h1>
  <p>A short and catchy description of your amazing project.</p>

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version" />
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    <img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="Build" />
  </p>
</div>

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🚀 About the Project

Provide a more detailed introduction to your project. What problem does it solve? Why did you build it? What makes it stand out from other similar tools?

You can include screenshots or GIFs here to show what your project looks like in action.

## ✨ Features

- **Feature 1:** Description of feature 1.
- **Feature 2:** Description of feature 2.
- **Feature 3:** Description of feature 3.

## 🛠 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

List any prerequisites, libraries, or tools required before installing the project. For example:
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   \`\`\`sh
   git clone https://github.com/yourusername/project-name.git
   \`\`\`
2. Navigate to the project directory
   \`\`\`sh
   cd project-name
   \`\`\`
3. Install dependencies
   \`\`\`sh
   npm install
   \`\`\`

## 💻 Usage

Show examples of how your project can be used. Include code snippets or command-line examples.

\`\`\`javascript
import { MyAwesomeComponent } from 'my-awesome-library';

function App() {
  return <MyAwesomeComponent title="Hello World!" />;
}
\`\`\`

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See \`LICENSE\` for more information.

## 📬 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/project-name](https://github.com/yourusername/project-name)
`;
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
