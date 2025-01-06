"use client";
import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  FilterContainer,
  FilterTitle,
  ButtonGroup,
} from "../../styles/property/MarketplacePropertyRoomFilterStyles";
import { useMarketplacePropertyRoomFilter } from "../../utils/property/MarketplacePropertyRoomFilterUtils";

function MarketplacePropertyRoomFilterComp() {
  const { theme } = useTheme();
  const { filters, handleFilterSelect } = useMarketplacePropertyRoomFilter();

  return (
    <FilterContainer theme={theme}>
      <ListGroup>
        <ListGroup.Item>
          <FilterTitle theme={theme}>Quartos</FilterTitle>
          <ButtonGroup theme={theme}>
            {[1, 2, 3, 4, "4+"].map((num) => (
              <Button
                key={num}
                variant={filters.bedrooms === num ? "primary" : "outline-primary"}
                onClick={() => handleFilterSelect("bedrooms", num)}
              >
                {num}
              </Button>
            ))}
          </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <FilterTitle theme={theme}>Banheiros</FilterTitle>
          <ButtonGroup theme={theme}>
            {[1, 2, 3, 4, "4+"].map((num) => (
              <Button
                key={num}
                variant={filters.bathrooms === num ? "primary" : "outline-primary"}
                onClick={() => handleFilterSelect("bathrooms", num)}
              >
                {num}
              </Button>
            ))}
          </ButtonGroup>
        </ListGroup.Item>
        <ListGroup.Item>
          <FilterTitle theme={theme}>Vagas</FilterTitle>
          <ButtonGroup theme={theme}>
            {[1, 2, 3, 4, "4+"].map((num) => (
              <Button
                key={num}
                variant={filters.parking === num ? "primary" : "outline-primary"}
                onClick={() => handleFilterSelect("parking", num)}
              >
                {num}
              </Button>
            ))}
          </ButtonGroup>
        </ListGroup.Item>
      </ListGroup>
    </FilterContainer>
  );
}

export default MarketplacePropertyRoomFilterComp;
