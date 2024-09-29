import { getCategory } from "@/app/data/category";
import { Boundary } from "@/app/ui/boundary";
import { Counter } from "../../context-click-counter";

export default async function Page({ params, }: {
    params: { categorySlug: string; subCategorySlug: string; },
}) {
    const category = getCategory(params.subCategorySlug);

    return (
        <Boundary labels={['Page [Server Component]']} animateRerendering={false}>
            <div className="space-y-8">
                <h1 className="text-xl font-medium text-gray-400/800">{category.name}</h1>
                <Counter />
            </div>
        </Boundary>
    )
}