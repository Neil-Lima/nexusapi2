"use client";
import { useState } from "react";

export const useMarketplacePropertyOptions = () => {
  const [options, setOptions] = useState({
    includeCondoFee: false,
    isFinanceable: false,
  });

  const handleOptionChange = (option) => {
    setOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return {
    options,
    handleOptionChange,
  };
};
