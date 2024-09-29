'use client';
import React, { useState } from 'react';

export default function BuggyButton() {
    const [clicked, setClicked] = React.useState(false);
    if (clicked) {
        throw new Error('문제가 발생했습니다.');
    }
    return (
        <button onClick={() => { setClicked(true); }}>강제로 에러 발생 시키기</button>
    );
}