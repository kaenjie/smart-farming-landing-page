import {
  SlidersHorizontal,
  BellRing,
  Wheat,
  Radar,
} from "lucide-react";

export const features = [
  {
    id: "conditioning",
    icon: SlidersHorizontal,
    title: "Smart Conditioning Control",
    description:
      "Automatically controls environmental conditions based on real-time sensor data to maintain optimal temperature, humidity, and area quality.",
    featured: false,
  },
  {
    id: "alerts",
    icon: BellRing,
    title: "Smart Alert & Preventive Insight",
    description:
      "Provides early warnings and preventive insights when the system detects potential issues before they impact productivity.",
    featured: true,
  },
  {
    id: "harvest-prediction",
    icon: Wheat,
    title: "Harvest Prediction",
    description:
      "Predicts harvest time more accurately using growth data analysis, environmental conditions, and historical patterns.",
    featured: false,
  },
  {
    id: "multi-area",
    icon: Radar,
    title: "Real-Time Multi-Area Monitoring",
    description:
      "Monitors multiple areas simultaneously through a single dashboard for fast, accurate, and centralized field visibility.",
    featured: false,
  },
];
