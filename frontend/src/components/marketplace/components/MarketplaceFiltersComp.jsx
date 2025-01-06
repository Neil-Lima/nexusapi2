"use client";
import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faSort,
  faCheck,
  faStar,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  FiltersContainer,
  FilterSection,
  FilterHeader,
  FilterBody,
  PriceRange,
  RatingStars,
  FilterTag,
  ApplyButton,
} from "../styles/MarketplaceFiltersStyles";
import { useMarketplaceFilters } from "../utils/MarketplaceFiltersUtils";

function MarketplaceFiltersComp() {
  const { theme } = useTheme();
  const {
    filters,
    selectedFilters,
    priceRange,
    handleFilterChange,
    handlePriceChange,
    handleRatingChange,
    applyFilters,
    clearFilters,
  } = useMarketplaceFilters();

  return (
    <FiltersContainer theme={theme}>
      <FilterSection>
        <FilterHeader>
          <FontAwesomeIcon icon={faSort} />
          <h5>Ordenar por</h5>
        </FilterHeader>
        <FilterBody>
          {filters.sortOptions.map((option) => (
            <Form.Check
              key={option.value}
              type="radio"
              label={option.label}
              name="sortOption"
              checked={selectedFilters.sort === option.value}
              onChange={() => handleFilterChange("sort", option.value)}
            />
          ))}
        </FilterBody>
      </FilterSection>

      <FilterSection>
        <FilterHeader>
          <FontAwesomeIcon icon={faDollarSign} />
          <h5>Faixa de Preço</h5>
        </FilterHeader>
        <FilterBody>
          <PriceRange>
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => handlePriceChange("min", e.target.value)}
            />
            <span>até</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => handlePriceChange("max", e.target.value)}
            />
          </PriceRange>
        </FilterBody>
      </FilterSection>

      <FilterSection>
        <FilterHeader>
          <FontAwesomeIcon icon={faStar} />
          <h5>Avaliação</h5>
        </FilterHeader>
        <FilterBody>
          <RatingStars>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div
                key={rating}
                onClick={() => handleRatingChange(rating)}
                className={selectedFilters.rating >= rating ? "active" : ""}
              >
                {[...Array(rating)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
                <span>ou mais</span>
              </div>
            ))}
          </RatingStars>
        </FilterBody>
      </FilterSection>

      <FilterSection>
        <FilterHeader>
          <FontAwesomeIcon icon={faFilter} />
          <h5>Categorias</h5>
        </FilterHeader>
        <FilterBody>
          {filters.categories.map((category) => (
            <FilterTag
              key={category.id}
              selected={selectedFilters.categories.includes(category.id)}
              onClick={() => handleFilterChange("categories", category.id)}
              theme={theme}
            >
              {category.name}
              {selectedFilters.categories.includes(category.id) && (
                <FontAwesomeIcon icon={faCheck} />
              )}
            </FilterTag>
          ))}
        </FilterBody>
      </FilterSection>

      <ApplyButton onClick={applyFilters} theme={theme}>
        Aplicar Filtros
      </ApplyButton>
      <button className="clear-filters" onClick={clearFilters}>
        Limpar Filtros
      </button>
    </FiltersContainer>
  );
}

export default MarketplaceFiltersComp;
