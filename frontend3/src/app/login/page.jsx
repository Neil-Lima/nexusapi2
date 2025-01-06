'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/components/login/main/styles/LoginMainStyles';
import LoginMainComp from '@/components/login/main/components/LoginMainComp';

export default function LoginPage() {
  const { theme } = useTheme();
  return (
    <GradientBackground theme={theme}>
      <LoginMainComp />
    </GradientBackground>
  );
}
