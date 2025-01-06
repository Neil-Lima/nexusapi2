"use client";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  ListContainer,
  PropertyCard,
  PropertyImage,
  PropertyInfo,
  PropertyFeatures,
} from "../../styles/property/MarketplacePropertyListStyles";
import { useMarketplacePropertyList } from "../../utils/property/MarketplacePropertyListUtils";

function MarketplacePropertyListComp() {
  const { theme } = useTheme();
  const { properties, handleContact, handleMessage, handlePropertyClick } = useMarketplacePropertyList();

  return (
    <ListContainer theme={theme}>
      <h5>
        <strong>3.915</strong> Casas à venda em Belém - PA
      </h5>
      <ListGroup>
        {properties.map((property) => (
          <PropertyCard 
            key={property.id} 
            theme={theme}
            onClick={() => handlePropertyClick(property.id)}
            style={{ cursor: 'pointer' }}
          >
            <PropertyImage theme={theme}>
              <img src={property.image} alt={property.title} />
              <span className="price">{property.price}</span>
            </PropertyImage>
            <PropertyInfo theme={theme}>
              <h4>{property.city}</h4>
              <h6>{property.address}</h6>
              <p>{property.description}</p>
              <PropertyFeatures theme={theme}>
                {property.features.map((feature, index) => (
                  <span key={index} className="feature-badge">
                    <FontAwesomeIcon icon={faStar} /> {feature}
                  </span>
                ))}
              </PropertyFeatures>
              <div className="actions">
                <button onClick={(e) => {
                  e.stopPropagation();
                  handleContact(property.id);
                }}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </button>
                <button onClick={(e) => {
                  e.stopPropagation();
                  handleMessage(property.id);
                }}>
                  <FontAwesomeIcon icon={faCommentDots} />
                </button>
              </div>
            </PropertyInfo>
          </PropertyCard>
        ))}
      </ListGroup>
    </ListContainer>
  );
}

export default MarketplacePropertyListComp;
