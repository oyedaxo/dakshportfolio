import { Stat } from "@/types";
import { Calendar, Code, Coffee, Users } from "lucide-react";

export const statsData: Stat[] = [
  {
    label: "AI Projects",
    value: 2,
    suffix: "+",
    icon: Code
  },
  {
    label: "Creative Experience",
    value: 4,
    suffix: "+ Years",
    icon: Calendar
  },
  {
    label: "AI & ML",
    value: "Specialization",
    suffix: "",
    icon: Coffee
  },
  {
    label: "Hackathon",
    value: "Winner",
    suffix: "",
    icon: Users
  }
];
