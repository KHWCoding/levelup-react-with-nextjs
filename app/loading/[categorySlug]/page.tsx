import type { Category } from "@/app/data/category";
import { SkeletonCard } from "@/app/ui/skeleton-card";
import { notFound } from "next/navigation";

export default async function Page({ params, }: { params: { categorySlug: string }; }) {
    const res = await fetch(`https://app-router-api.vercel.app/api/categories?delay=1000&slug=${params.categorySlug}`, {
        cache: 'no-cache',
    },);

    if (!res.ok) {
        throw new Error('무언가 잘못되었습니다!');
    }

    const category = (await res.json()) as Category;
    if (!category) {
        notFound();
    }

    return (
        <div className="space-y-4">
            <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {Array.from({ length: category.count }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </div>
    )
}