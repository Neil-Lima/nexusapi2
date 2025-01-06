"use client";
import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  SearchContainer,
  BadgesContainer,
  LocationBadge,
} from "../../styles/property/MarketplacePropertySearchStyles";
import { useMarketplacePropertySearch } from "../../utils/property/MarketplacePropertySearchUtils";

function MarketplacePropertySearchComp() {
  const { theme } = useTheme();
  const { searchTerm, locations, handleSearchChange, handleLocationSelect } =
    useMarketplacePropertySearch();

  return (
    <SearchContainer theme={theme}>
      <InputGroup>
        <Form.Control
          placeholder="Digite o nome da rua, bairro ou cidade...."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <Button>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroup>

      <BadgesContainer theme={theme}>
        {locations.map((location, index) => (
          <LocationBadge
            key={index}
            theme={theme}
            onClick={() => handleLocationSelect(location)}
          >
            <FontAwesomeIcon icon={faStar} />
            {location}
          </LocationBadge>
        ))}
      </BadgesContainer>
    </SearchContainer>
  );
}

export default MarketplacePropertySearchComp;
