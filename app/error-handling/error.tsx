'use client';
import { Boundary } from "../ui/boundary";
import React, { useEffect } from 'react';

export default function Error({ error, reset }: any) {
    useEffect(() => {
        console.log('logging error:', error);
    }, [error]);

    return (
        <Boundary labels={['./[categorySlug]/error.tsx']} color="pink">
            <div className="space-y-4">
                <h2 className="text-lg font-bold">에러 발생</h2>
                <p className="text-sm">{error?.message}</p>
                <div>
                    <button onClick={() => reset()}>재시도하기</button>
                </div>
            </div>
        </Boundary>
    )
}