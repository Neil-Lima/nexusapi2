"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faHeart,
  faCalendar,
  faUser,
  faBed,
  faBath,
  faCar,
  faRuler,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import { GradientBackground } from "@/styles/GlobalStyles";
import MarketplaceProperty3DViewerComp from "./MarketplaceProperty3DViewerComp";
import MarketplacePropertyGalleryComp from "./MarketplacePropertyGalleryComp";
import MarketplacePropertyBlueprintViewerComp from "./MarketplacePropertyBlueprintViewerComp";
import MarketplacePropertyFinancingComp from "./MarketplacePropertyFinancingComp";
import MarketplacePropertyDocumentsComp from "./MarketplacePropertyDocumentsComp";
import MarketplacePropertyNeighborhoodStatsComp from "./MarketplacePropertyNeighborhoodStatsComp";
import {
  DetailContainer,
  PropertyHeader,
  ActionButtons,
  TabContainer,
  PropertyFeatures,
  PropertyDescription,
  AmenitiesList,
} from "../../styles/property/MarketplacePropertyListDetailStyles";
import { useMarketplacePropertyListDetail } from "../../utils/property/MarketplacePropertyListDetailUtils";
import { Container } from "react-bootstrap";

function MarketplacePropertyListDetailComp({ propertyId }) {
  const { theme } = useTheme();
  const {
    activeTab,
    propertyDetails,
    handleTabChange,
    handleShare,
    handleFavorite,
    handleScheduleVisit,
    handleContactAgent,
  } = useMarketplacePropertyListDetail(propertyId);

  if (!propertyDetails) {
    return (
      <GradientBackground theme={theme}>
        <h2>Carregando...</h2>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground theme={theme}>
      <Container>
        <DetailContainer theme={theme}>
          <PropertyHeader theme={theme}>
            <h1>{propertyDetails.title}</h1>
            <div className="address">{propertyDetails.address}</div>
            <div className="price">{propertyDetails.price}</div>
          </PropertyHeader>

          <ActionButtons theme={theme}>
            <button onClick={handleShare}>
              <FontAwesomeIcon icon={faShare} /> Compartilhar
            </button>
            <button onClick={handleFavorite}>
              <FontAwesomeIcon icon={faHeart} /> Favoritar
            </button>
            <button onClick={handleScheduleVisit}>
              <FontAwesomeIcon icon={faCalendar} /> Agendar Visita
            </button>
            <button onClick={handleContactAgent}>
              <FontAwesomeIcon icon={faUser} /> Falar com Corretor
            </button>
          </ActionButtons>

          <PropertyFeatures theme={theme}>
            {propertyDetails.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <FontAwesomeIcon
                  icon={
                    feature.includes("Quartos")
                      ? faBed
                      : feature.includes("Banheiros")
                      ? faBath
                      : feature.includes("Vagas")
                      ? faCar
                      : faRuler
                  }
                />
                {feature}
              </div>
            ))}
          </PropertyFeatures>

          <TabContainer theme={theme}>
            <div className="tab-buttons">
              {["gallery", "3d", "blueprint", "financing", "documents", "neighborhood"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {activeTab === "gallery" && <MarketplacePropertyGalleryComp property={propertyDetails} />}
            {activeTab === "3d" && <MarketplaceProperty3DViewerComp property={propertyDetails} />}
            {activeTab === "blueprint" && <MarketplacePropertyBlueprintViewerComp property={propertyDetails} />}
            {activeTab === "financing" && <MarketplacePropertyFinancingComp property={propertyDetails} />}
            {activeTab === "documents" && <MarketplacePropertyDocumentsComp property={propertyDetails} />}
            {activeTab === "neighborhood" && <MarketplacePropertyNeighborhoodStatsComp property={propertyDetails} />}
          </TabContainer>

          <PropertyDescription theme={theme}>
            <h3>Descrição</h3>
            <p>{propertyDetails.details.description}</p>
          </PropertyDescription>

          <AmenitiesList theme={theme}>
            {propertyDetails.details.amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <FontAwesomeIcon icon={faStar} />
                {amenity}
              </div>
            ))}
          </AmenitiesList>
        </DetailContainer>
      </Container>
    </GradientBackground>
  );
}

export default MarketplacePropertyListDetailComp;
