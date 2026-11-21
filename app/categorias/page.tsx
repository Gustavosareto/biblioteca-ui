import { CategoryCard } from "@/components/CategoryCard";
import { SectionTitle } from "@/components/SectionTitle";
import { categories } from "@/registry/categories";

export const metadata = { title: "Categorias · UI Motion" };

export default function CategoriesPage() {
  return (
    <div className="px-4 py-8 sm:px-10">
      <SectionTitle as="h1">Todas as categorias</SectionTitle>
      <div className="mt-7 grid grid-cols-1 gap-x-[21px] gap-y-[17px] sm:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[166px]">
        {categories.map((c) => (
          <CategoryCard key={c.slug} category={c} />
        ))}
      </div>
    </div>
  );
}
