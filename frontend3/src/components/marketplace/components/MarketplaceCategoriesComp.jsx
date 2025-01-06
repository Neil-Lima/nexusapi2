'use client';
import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@/context/theme/ThemeContext";
import { GradientBackground } from "@/styles/GlobalStyles";
import {
  CategoriesContainer,
  CategoryCard,
  IconWrapper,
  CategoryInfo,
  ViewAllButton,
} from "../styles/MarketplaceCategoriesStyles";
import { useMarketplaceCategories } from "../utils/MarketplaceCategoriesUtils";

function MarketplaceCategoriesComp() {
  const { theme } = useTheme();
  const { categories, handleCategoryClick } = useMarketplaceCategories();

  return (
    <GradientBackground theme={theme}>
      <CategoriesContainer theme={theme}>
        <h3>Categorias</h3>
        <Row xs={2} md={3} lg={4} className="g-4">
          {categories.map((category) => (
            <Col key={category.id}>
              <CategoryCard
                onClick={() => handleCategoryClick(category.id)}
                theme={theme}
              >
                <IconWrapper theme={theme}>
                  <FontAwesomeIcon icon={category.icon} />
                </IconWrapper>
                <CategoryInfo theme={theme}>
                  <h4>{category.name}</h4>
                  <span>{category.itemCount} items</span>
                </CategoryInfo>
              </CategoryCard>
            </Col>
          ))}
        </Row>
        <ViewAllButton theme={theme}>Ver Todas as Categorias</ViewAllButton>
      </CategoriesContainer>
    </GradientBackground>
  );
}

export default MarketplaceCategoriesComp;
