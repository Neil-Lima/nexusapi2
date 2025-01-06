'use client';
import { useState } from "react";

export const useMarketplaceFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    ratings: [],
    shipping: [],
    payments: [],
  });

  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
  });

  const categories = [
    { id: 1, name: "Eletrônicos" },
    { id: 2, name: "Moda" },
    { id: 3, name: "Casa" },
    { id: 4, name: "Esportes" },
    { id: 5, name: "Automotivo" },
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId],
    }));
  };

  const handlePriceChange = (type, value) => {
    setPriceRange((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setSelectedFilters((prev) => ({
      ...prev,
      ratings: prev.ratings.includes(rating)
        ? prev.ratings.filter((r) => r !== rating)
        : [...prev.ratings, rating],
    }));
  };

  const handleShippingChange = (option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      shipping: prev.shipping.includes(option)
        ? prev.shipping.filter((s) => s !== option)
        : [...prev.shipping, option],
    }));
  };

  const handlePaymentChange = (option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      payments: prev.payments.includes(option)
        ? prev.payments.filter((p) => p !== option)
        : [...prev.payments, option],
    }));
  };

  return {
    categories,
    priceRange,
    selectedFilters,
    handleCategoryChange,
    handlePriceChange,
    handleRatingChange,
    handleShippingChange,
    handlePaymentChange,
  };
};
