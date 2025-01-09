'use client';
import React, { useEffect, useState } from 'react';
import FeedMainComp from '@/components/feed/main/FeedMainComp';

export default function FeedPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <FeedMainComp />
    </div>
  );
}
