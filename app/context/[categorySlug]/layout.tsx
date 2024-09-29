import { getCategories, getCategory } from "@/app/data/category";
import { Boundary } from "@/app/ui/boundary";
import { TabGroup } from "@/app/ui/tab-group";
import { Counter } from "../context-click-counter";

export default async function Layout({ children, params, }: {
    children: React.ReactNode;
    params: { categorySlug: string};
}) {
    const category = getCategory(params.categorySlug);
    const items = getCategories(params.categorySlug);

    return (
        <Boundary labels={['Layout [Server Component]']} animateRerendering={false}>
            <div className="space-y-9">
                <TabGroup path={`/context/${category.slug}`} items={[
                    {
                        text: '전체',
                    },
                    ...items.map(x => ({
                        text: x.name,
                        slug: x.slug,
                    })),
                ]} />
                <Counter />
                <div>{children}</div>
            </div>
        </Boundary>
    )
}