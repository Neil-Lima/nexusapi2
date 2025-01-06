"use client";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  OptionsContainer,
  Switch,
} from "../../styles/property/MarketplacePropertyOptionsStyles";
import { useMarketplacePropertyOptions } from "../../utils/property/MarketplacePropertyOptionsUtils";

function MarketplacePropertyOptionsComp() {
  const { theme } = useTheme();
  const { options, handleOptionChange } = useMarketplacePropertyOptions();

  return (
    <OptionsContainer theme={theme}>
      <ListGroup>
        <ListGroup.Item>
          <h5>Incluir preço do condomínio</h5>
          <Switch theme={theme}>
            <input
              type="checkbox"
              checked={options.includeCondoFee}
              onChange={() => handleOptionChange("includeCondoFee")}
            />
            <span className="slider round"></span>
          </Switch>
        </ListGroup.Item>
        <ListGroup.Item>
          <h5>Financiável</h5>
          <Switch theme={theme}>
            <input
              type="checkbox"
              checked={options.isFinanceable}
              onChange={() => handleOptionChange("isFinanceable")}
            />
            <span className="slider round"></span>
          </Switch>
        </ListGroup.Item>
      </ListGroup>
    </OptionsContainer>
  );
}

export default MarketplacePropertyOptionsComp;
