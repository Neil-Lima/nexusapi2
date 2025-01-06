"use client";
import React from "react";
import { useTheme } from "@/context/theme/ThemeContext";
import NavMenuComp from "@/shared/navbar/components/NavMenuComp";
import GalleryPhotoMainComp from "@/shared/gallery/photos/components/GalleryPhotoMainComp";

export default function GalleryPage() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GalleryPhotoMainComp />
    </>
  );
}

