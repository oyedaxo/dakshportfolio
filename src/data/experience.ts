export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const experienceData: Experience[] = [
  {
    id: "software-project-contributor",
    role: "Software Developer",
    company: "Software Project Contributor",
    location: "Remote",
    period: "2024",
    highlights: [
      "Gathered client requirements and converted them into functional deliverables.",
      "Collaborated remotely through iterative feedback cycles.",
    ],
  },
  {
    id: "freelance-creative",
    role: "Creative Professional",
    company: "Freelance Video Editor & Graphic Designer",
    location: "Remote",
    period: "2021 – Present",
    highlights: [
      "Delivered creative solutions for multiple clients.",
      "Managed client communication, revisions and deadlines.",
    ],
  },
];
