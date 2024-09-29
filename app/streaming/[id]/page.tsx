import { RecommendedProducts, RecommendedProductsSkeleton } from "@/app/ui/product/recommeded-product";
import { Reviews, ReviewsSkeleton } from "@/app/ui/product/reviews";
import { SingleProduct } from "@/app/ui/product/single-product";
import { Ping } from "@/app/ui/product/ping";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
    return (
        <div className="space-y-8 lg:space-y-14">
            <SingleProduct data={fetch(
                `https://app-router-api.vercel.app/api/products?id=${params.id}`,
            )} />
            <div className="relative">
                <div className="absolute -left-4 top-2">
                    <Ping />
                </div> 
            </div>
            <Suspense fallback={<RecommendedProductsSkeleton />}>
                <RecommendedProducts path="/streaming/" data={fetch(`https://app-router-api.vercel.app/api/products?delay=500&filter=${params.id}`, { cache: 'no-store' }, )} />
            </Suspense>
            <div className="relative">
                <div className="absolute -left-4 top-2">
                    <Ping />
                </div>
            </div>
            <Suspense fallback={<ReviewsSkeleton />}>
                <Reviews data={fetch(`https://app-router-api.vercel.app/api/reviews?delay=1000`, { cache: 'no-store' },)} />
            </Suspense>
        </div>
    );
}