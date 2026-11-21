import { components } from "@/registry/components.generated";
import type { AnimationMeta } from "@/registry/data";

export function AnimationDemo({ meta }: { meta: AnimationMeta }) {
  const Animation = components[meta.slug];
  return (
    <Animation>
      {meta.demo === "box" ? <div className="size-24 rounded-[20px] bg-white shadow-[0_0_40px_#ffffff40]" /> : undefined}
    </Animation>
  );
}
