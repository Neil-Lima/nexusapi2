"use client";
import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripHorizontal, faThList } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  SortContainer,
  ViewToggle,
} from "../../styles/property/MarketplacePropertySortStyles";
import { useMarketplacePropertySort } from "../../utils/property/MarketplacePropertySortUtils";

function MarketplacePropertySortComp() {
  const { theme } = useTheme();
  const { sortOption, viewMode, handleSortChange, handleViewChange } =
    useMarketplacePropertySort();

  return (
    <SortContainer theme={theme}>
      <h5>
        Ordenar
        <ViewToggle theme={theme}>
          <FontAwesomeIcon
            icon={faGripHorizontal}
            onClick={() => handleViewChange("grid")}
            className={viewMode === "grid" ? "active" : ""}
          />
          <FontAwesomeIcon
            icon={faThList}
            onClick={() => handleViewChange("list")}
            className={viewMode === "list" ? "active" : ""}
          />
        </ViewToggle>
      </h5>
      <Form.Select
        value={sortOption}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="">Ordenar por:</option>
        <option value="price_low">Menor preço</option>
        <option value="price_high">Maior preço</option>
        <option value="area_low">Menor área</option>
        <option value="area_high">Maior área</option>
        <option value="recent">Mais recentes</option>
      </Form.Select>
    </SortContainer>
  );
}

export default MarketplacePropertySortComp;
