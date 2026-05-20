import {
  Megaphone,
  TrendingUp,
  Palette,
  Rocket,
  MessageCircle,
  LayoutDashboard,
} from "lucide-react";

export const serviceIcons = {
  traffic: Megaphone,
  strategy: TrendingUp,
  brand: Palette,
  scale: Rocket,
  chat: MessageCircle,
  ops: LayoutDashboard,
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;
