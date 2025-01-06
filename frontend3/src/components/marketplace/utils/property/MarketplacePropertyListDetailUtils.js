"use client";
import { useState, useEffect } from "react";
import { useMarketplacePropertyList } from "./MarketplacePropertyListUtils";

export const useMarketplacePropertyListDetail = (propertyId) => {
  const [activeTab, setActiveTab] = useState("gallery");
  const [propertyDetails, setPropertyDetails] = useState(null);
  const { getPropertyById } = useMarketplacePropertyList();

  useEffect(() => {
    const property = getPropertyById(propertyId);
    setPropertyDetails(property);
  }, [propertyId]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: propertyDetails.title,
        text: propertyDetails.description,
        url: window.location.href,
      });
    }
  };

  const handleFavorite = () => {
    // Implementar lógica de favoritos
    console.log("Adicionado aos favoritos:", propertyId);
  };

  const handleScheduleVisit = () => {
    // Implementar lógica de agendamento
    console.log("Agendando visita para:", propertyId);
  };

  const handleContactAgent = () => {
    // Implementar lógica de contato
    console.log("Contatando corretor sobre:", propertyId);
  };

  return {
    activeTab,
    propertyDetails,
    handleTabChange,
    handleShare,
    handleFavorite,
    handleScheduleVisit,
    handleContactAgent,
  };
};
