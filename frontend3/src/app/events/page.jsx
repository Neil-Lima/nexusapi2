"use client";
import React from "react";
import EventsMainComp from "@/components/events/main/components/EventsMainComp";
import { useTheme } from "@/context/theme/ThemeContext";
import { GradientBackground } from "@/styles/GlobalStyles";
import NavMenuComp from "@/shared/navbar/components/NavMenuComp";

export default function EventsPage() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <EventsMainComp />
    </>
  );
}
