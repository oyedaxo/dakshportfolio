import { Achievement } from "@/types";
import { Trophy, Star, Medal } from "lucide-react";

export const achievementsData: Achievement[] = [
  {
    title: "Hackathon Winner",
    description: "Secured first place for developing an AI-driven accessibility tool.",
    icon: Trophy,
  },
  {
    title: "SPIC Design Lead",
    description: "Led the creative design team for major university tech events.",
    icon: Star,
  },
  {
    title: "Hack the Prompt",
    description: "Top participant in national prompt engineering competition.",
    icon: Medal,
  }
];
