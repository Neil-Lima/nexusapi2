"use client";
import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faStar,
  faTruck,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  FilterContainer,
  FilterSection,
  FilterTitle,
  PriceRangeContainer,
  FilterCheckbox,
  RatingContainer,
  StarIcon,
} from "../styles/MarketplaceFilterStyles";
import { useMarketplaceFilter } from "../utils/MarketplaceFilterUtils";

function MarketplaceFilterComp() {
  const { theme } = useTheme();
  const {
    categories,
    priceRange,
    selectedFilters,
    handleCategoryChange,
    handlePriceChange,
    handleRatingChange,
    handleShippingChange,
    handlePaymentChange,
  } = useMarketplaceFilter();

  return (
    <FilterContainer theme={theme}>
      <FilterSection>
        <FilterTitle>
          <FontAwesomeIcon icon={faFilter} className="me-2" />
          Categorias
        </FilterTitle>
        {categories.map((category) => (
          <Form.Group key={category.id} className="mb-3">
            <FilterCheckbox
              type="checkbox"
              label={category.name}
              checked={selectedFilters.categories.includes(category.id)}
              onChange={() => handleCategoryChange(category.id)}
            />
          </Form.Group>
        ))}
      </FilterSection>

      <FilterSection>
        <FilterTitle>Faixa de Preço</FilterTitle>
        <PriceRangeContainer>
          <Form.Control
            type="number"
            placeholder="Mín"
            value={priceRange.min}
            onChange={(e) => handlePriceChange("min", e.target.value)}
          />
          <span>até</span>
          <Form.Control
            type="number"
            placeholder="Máx"
            value={priceRange.max}
            onChange={(e) => handlePriceChange("max", e.target.value)}
          />
        </PriceRangeContainer>
      </FilterSection>

      <FilterSection>
        <FilterTitle>
          <FontAwesomeIcon icon={faStar} className="me-2" />
          Avaliação do Vendedor
        </FilterTitle>
        <RatingContainer>
          {[5, 4, 3, 2, 1].map((rating) => (
            <FilterCheckbox
              key={rating}
              type="checkbox"
              checked={selectedFilters.ratings.includes(rating)}
              onChange={() => handleRatingChange(rating)}
              label={
                <>
                  {[...Array(rating)].map((_, index) => (
                    <StarIcon key={index} active theme={theme} />
                  ))}
                  {[...Array(5 - rating)].map((_, index) => (
                    <StarIcon key={index + rating} theme={theme} />
                  ))}
                </>
              }
            />
          ))}
        </RatingContainer>
      </FilterSection>

      <FilterSection>
        <FilterTitle>
          <FontAwesomeIcon icon={faTruck} className="me-2" />
          Frete
        </FilterTitle>
        {["Grátis", "Expresso", "Padrão"].map((option) => (
          <FilterCheckbox
            key={option}
            type="checkbox"
            label={option}
            checked={selectedFilters.shipping.includes(option)}
            onChange={() => handleShippingChange(option)}
          />
        ))}
      </FilterSection>

      <FilterSection>
        <FilterTitle>
          <FontAwesomeIcon icon={faCreditCard} className="me-2" />
          Formas de Pagamento
        </FilterTitle>
        {["Cartão", "Boleto", "Pix", "Escrow"].map((option) => (
          <FilterCheckbox
            key={option}
            type="checkbox"
            label={option}
            checked={selectedFilters.payments.includes(option)}
            onChange={() => handlePaymentChange(option)}
          />
        ))}
      </FilterSection>
    </FilterContainer>
  );
}

export default MarketplaceFilterComp;
