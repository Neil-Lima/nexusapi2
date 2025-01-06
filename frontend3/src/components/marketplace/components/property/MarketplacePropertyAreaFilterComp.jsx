"use client";
import React from "react";
import { Card, Form } from "react-bootstrap";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  AreaFilterCard,
  AreaInputGroup,
} from "../../styles/property/MarketplacePropertyAreaFilterStyles";
import { useMarketplacePropertyAreaFilter } from "../../utils/property/MarketplacePropertyAreaFilterUtils";

function MarketplacePropertyAreaFilterComp() {
  const { theme } = useTheme();
  const { areaRange, handleAreaChange } = useMarketplacePropertyAreaFilter();

  return (
    <AreaFilterCard theme={theme}>
      <Card.Body>
        <h4>Área do imóvel</h4>
        <Form>
          <AreaInputGroup theme={theme}>
            <Form.Group>
              <h5>Mínimo</h5>
              <Form.Control
                type="number"
                value={areaRange.min}
                onChange={(e) => handleAreaChange("min", e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <h5>Máximo</h5>
              <Form.Control
                type="number"
                value={areaRange.max}
                onChange={(e) => handleAreaChange("max", e.target.value)}
              />
            </Form.Group>
          </AreaInputGroup>
        </Form>
      </Card.Body>
    </AreaFilterCard>
  );
}

export default MarketplacePropertyAreaFilterComp;
