"use client";
import { useTheme } from "@/context/theme/ThemeContext";
import JobsMainComp from "@/components/jobs/main/components/JobsMainComp";
import { GradientBackground } from "@/styles/GlobalStyles";
import NavMenuComp from "@/shared/navbar/components/NavMenuComp";

export default function JobsPage() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <JobsMainComp />
      </GradientBackground>
    </>
  );
}
