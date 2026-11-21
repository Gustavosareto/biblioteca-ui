import index from "./index.json";
import { categories } from "./categories";

export type AnimationMeta = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  demo?: "box";
  added: string;
};

export const animations = index as AnimationMeta[];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getAnimation = (slug: string) => animations.find((a) => a.slug === slug);
export const animationsIn = (category: string) => animations.filter((a) => a.category === category);
export const countLabel = (n: number) => `${n} ${n === 1 ? "exemplo" : "exemplos"}`;
