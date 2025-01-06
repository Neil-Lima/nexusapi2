'use client';
import React from 'react';
import { ThemeProvider } from '@/context/theme/ThemeContext';
import FriendsMainComp from '@/components/friends/main/FriendsMainComp';

export default function FriendsPage() {
  return (
    <ThemeProvider>
      <FriendsMainComp />
    </ThemeProvider>
  );
}
