import {
  Baby,
  BriefcaseBusiness,
  CloudRain,
  Compass,
  Droplets,
  Fish,
  House,
  Leaf,
  Mountain,
  Share2,
  ShipWheel,
  Sparkles,
  Umbrella,
  Users,
  Utensils,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import type { IconName } from "@/lib/visuals";

const iconMap: Record<IconName, ComponentType<LucideProps>> = {
  fish: Fish,
  mountain: Mountain,
  baby: Baby,
  house: House,
  droplets: Droplets,
  briefcase: BriefcaseBusiness,
  leaf: Leaf,
  utensils: Utensils,
  umbrella: Umbrella,
  users: Users,
  sparkles: Sparkles,
  share2: Share2,
  shipWheel: ShipWheel,
  compass: Compass,
  cloudRain: CloudRain,
};

type CategoryIconProps = {
  icon: IconName;
  className?: string;
  strokeWidth?: number;
};

export function CategoryIcon({
  icon,
  className,
  strokeWidth = 2,
}: CategoryIconProps) {
  const Icon = iconMap[icon];
  return <Icon className={className} strokeWidth={strokeWidth} />;
}
