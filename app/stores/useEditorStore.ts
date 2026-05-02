import { create } from "zustand";
import type { TemplateType, TemplateData } from "~/template";

export interface Badge {
  name: string;
  image: string;
  category?: string;
}

export interface TechStack {
  icon: string;
  name: string;
}

export interface EditorState extends TemplateData {
  markdown: string;

  templateType: TemplateType;

  setTemplateType: (val: TemplateType) => void;

  setMarkdown: (val: string) => void;

  setTemplateData: (data: TemplateData) => void;

  setProjectName: (val: string) => void;
  setDescription: (val: string) => void;
  setLogoUrl: (val: string) => void;

  setBadges: (badges: Badge[]) => void;
  addBadge: (badge: Badge) => void;
  removeBadge: (badgeImage: string) => void;

  setAboutProject: (val: string) => void;

  setFeatures: (features: string[]) => void;
  addFeature: (feature: string) => void;
  updateFeature: (index: number, feature: string) => void;
  removeFeature: (index: number) => void;

  setTechStack: (techStack: TechStack[]) => void;
  addTechStack: (tech: TechStack) => void;
  updateTechStack: (index: number, tech: TechStack) => void;
  removeTechStack: (index: number) => void;

  setPrerequisites: (val: string) => void;
  setInstallation: (val: string) => void;

  setUsageInstallation: (val: string) => void;
  setIncludeCodeExample: (val: boolean) => void;
  setCodeExample: (val: string) => void;

  setContributing: (val: string) => void;

  setLicense: (val: string) => void;

  setAcknowledgements: (acks: string[]) => void;
  addAcknowledgement: (ack: string) => void;
  updateAcknowledgement: (index: number, ack: string) => void;
  removeAcknowledgement: (index: number) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  markdown: ``,

  templateType: "blank",

  projectName: "",
  description: "",
  logoUrl: "",

  badges: [],

  aboutProject: "",

  features: [""],

  techStack: [{ icon: "", name: "" }],

  prerequisites: "",
  installation: "",

  usageInstallation: "",
  includeCodeExample: false,
  codeExample: "",

  contributing:
    "Contributions are welcome! Please open an issue first to discuss what you would like to change.",

  license: "MIT",

  acknowledgements: [""],

  setMarkdown: (val) => set({ markdown: val }),
  setTemplateType: (val) => set({ templateType: val }),

  setTemplateData: (data: TemplateData) =>
    set((state) => ({
      ...state,
      ...data,
    })),

  setProjectName: (val) => set({ projectName: val }),
  setDescription: (val) => set({ description: val }),
  setLogoUrl: (val) => set({ logoUrl: val }),

  setBadges: (badges) => set({ badges }),
  addBadge: (badge) => set((state) => ({ badges: [...state.badges, badge] })),
  removeBadge: (badgeImage) =>
    set((state) => ({
      badges: state.badges.filter((b) => b.image !== badgeImage),
    })),

  setAboutProject: (val) => set({ aboutProject: val }),

  setFeatures: (features) => set({ features }),
  addFeature: (feature) =>
    set((state) => ({ features: [...state.features, feature] })),
  updateFeature: (index, feature) =>
    set((state) => {
      const newFeatures = [...state.features];
      newFeatures[index] = feature;
      return { features: newFeatures };
    }),
  removeFeature: (index) =>
    set((state) => ({
      features: state.features.filter((_, i) => i !== index),
    })),

  setTechStack: (techStack) => set({ techStack }),
  addTechStack: (tech) =>
    set((state) => ({ techStack: [...state.techStack, tech] })),
  updateTechStack: (index, tech) =>
    set((state) => {
      const newTechStack = [...state.techStack];
      newTechStack[index] = tech;
      return { techStack: newTechStack };
    }),
  removeTechStack: (index) =>
    set((state) => ({
      techStack: state.techStack.filter((_, i) => i !== index),
    })),

  setPrerequisites: (val) => set({ prerequisites: val }),
  setInstallation: (val) => set({ installation: val }),

  setUsageInstallation: (val) => set({ usageInstallation: val }),
  setIncludeCodeExample: (val) => set({ includeCodeExample: val }),
  setCodeExample: (val) => set({ codeExample: val }),

  setContributing: (val) => set({ contributing: val }),

  setLicense: (val) => set({ license: val }),

  setAcknowledgements: (acks) => set({ acknowledgements: acks }),
  addAcknowledgement: (ack) =>
    set((state) => ({ acknowledgements: [...state.acknowledgements, ack] })),
  updateAcknowledgement: (index, ack) =>
    set((state) => {
      const newAcks = [...state.acknowledgements];
      newAcks[index] = ack;
      return { acknowledgements: newAcks };
    }),
  removeAcknowledgement: (index) =>
    set((state) => ({
      acknowledgements: state.acknowledgements.filter((_, i) => i !== index),
    })),
}));
