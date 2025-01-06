"use client";
import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  TypeFilterCard,
  TypeOption,
} from "../../styles/property/MarketplacePropertyTypeFilterStyles";
import { useMarketplacePropertyTypeFilter } from "../../utils/property/MarketplacePropertyTypeFilterUtils";

function MarketplacePropertyTypeFilterComp() {
  const { theme } = useTheme();
  const { selectedType, propertyTypes, handleTypeChange } =
    useMarketplacePropertyTypeFilter();

  return (
    <TypeFilterCard theme={theme}>
      <Card.Body>
        <Row>
          <Col>
            <TypeOption
              active={selectedType === "rent"}
              onClick={() => handleTypeChange("rent")}
              theme={theme}
            >
              <h5>Alugar</h5>
            </TypeOption>
          </Col>
          <Col>
            <TypeOption
              active={selectedType === "buy"}
              onClick={() => handleTypeChange("buy")}
              theme={theme}
            >
              <h5>Vender</h5>
            </TypeOption>
          </Col>
        </Row>
        <Form.Select className="mt-3">
          <option>Todos os imóveis</option>
          {propertyTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </Form.Select>
      </Card.Body>
    </TypeFilterCard>
  );
}

export default MarketplacePropertyTypeFilterComp;
