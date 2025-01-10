'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const FeedMainComp = dynamic(() => import('@/components/feed/main/components/FeedMainComp'), {
  ssr: false,
  loading: () => <p>Carregando...</p>
});

export default function FeedPage() {
  return (
    <div suppressHydrationWarning>
      {typeof window !== 'undefined' && <FeedMainComp />}
    </div>
  );
}
