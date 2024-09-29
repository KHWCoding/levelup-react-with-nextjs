import { getCategories, getCategory } from "@/app/data/category";
import { ClickCounter } from "@/app/ui/clock-counter";
import { TabGroup } from "@/app/ui/tab-group";

export default async function Layout({ children, params, }: {
    children: React.ReactNode;
    params: { categorySlug: string };
}) {
    const category = getCategory(params.categorySlug);
    const items = getCategories(params.categorySlug);

    return (
        <div className="space-y-9">
            <div className="flex justify-between">
                <TabGroup path={`/dynamic-routing/${category.slug}`} items={[
                    {
                        text: '전체',
                    },
                    ...items.map(x => ({
                        text: x.name,
                        slug: x.slug,
                    }))
                ]}
                />
                <div className="self-start">
                    <ClickCounter />
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}