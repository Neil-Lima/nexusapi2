'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const FeedMainComp = dynamic(() => import('@/components/feed/main/FeedMainComp'), {
  ssr: false
});

export default function FeedPage() {
  return (
    <div suppressHydrationWarning>
      <FeedMainComp />
    </div>
  );
}
