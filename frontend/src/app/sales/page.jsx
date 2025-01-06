"use client";
import React from "react";
import SalesMainComp from "@/components/sales/SalesMainComp";
import { GradientBackground } from "@/styles/GlobalStyles";
import { useTheme } from "@/context/theme/ThemeContext";
import NavMenuComp from "@/shared/navbar/components/NavMenuComp";

export default function SalesPage() {
  const { theme } = useTheme();

  return (
    <>
      
      <GradientBackground theme={theme}>     
        <SalesMainComp />
      </GradientBackground>
    </>
  );
}
