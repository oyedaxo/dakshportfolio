import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-interview-bot",
    title: "AI Interview Bot",
    description: "An AI-powered interview simulator that conducts technical and HR interviews using conversational AI and response evaluation.",
    image: "/images/interview-bot.png",
    technologies: ["Python", "GenAI"],
    githubUrl: "",
    liveUrl: "https://ai-interviewer-bot-mu.vercel.app/",
    category: "AI / ML",
    overview: "Built an AI-based interview bot simulating technical and HR interviews.",
    problem: "Need for scalable, automated interview preparation.",
    solution: "Designed conversational workflow and response evaluation logic using GenAI.",
    features: [
      "Simulates technical and HR interviews",
      "Conversational workflow",
      "Response evaluation logic"
    ],
    screenshots: [
      "/images/interview-bot.png"
    ],
    challenges: "Handling real-time evaluation logic.",
    learned: "Advanced prompt engineering and GenAI integration.",
    future: "Add voice-based interaction."
  },
  {
    slug: "vingo-ai",
    title: "Vingo AI",
    description: "Real-time multilingual voice translation application built using speech recognition, translation and text-to-speech technologies.",
    image: "/images/vingo-ai.png",
    technologies: ["React", "WebRTC", "Socket.IO", "Node.js", "faster-whisper", "Meta NLLB", "Piper TTS"],
    githubUrl: "#",
    liveUrl: "https://vingo-ai.onrender.com/",
    category: "AI / ML",
    overview: "A real-time video calling application that bridges language barriers by automatically transcribing speech, translating it, and playing synthesized speech in the listener's native language.",
    problem: "Real-time communication across different languages is often hindered by latency and the lack of accessible, high-quality, free-to-use translation tools.",
    solution: "Designed an open-source tech pipeline capturing microphone input via Voice Activity Detection, converting speech-to-text with faster-whisper, translating via Meta NLLB, and synthesizing audio using Piper TTS—all synced over WebRTC.",
    features: [
      "Real-time video calling via WebRTC and Socket.IO",
      "Live transcription and translated captions",
      "AI-driven audio synthesis (TTS) in the listener's language"
    ],
    screenshots: [
      "/images/vingo-ai.png"
    ],
    challenges: "Optimizing end-to-end latency across STT, Translation, and TTS models while keeping video and audio in sync.",
    learned: "Working with WebRTC signaling, STUN/TURN servers, and optimizing chunked audio processing for AI models.",
    future: "Add meeting transcripts, AI summaries, and end-to-end encryption."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
