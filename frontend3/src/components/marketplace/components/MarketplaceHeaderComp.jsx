"use client";
import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faStore,
  faComments,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  HeaderContainer,
  SearchContainer,
  ActionButton,
  NotificationBadge,
} from "../styles/MarketplaceHeaderStyles";
import { useMarketplaceHeader } from "../utils/MarketplaceHeaderUtils";

function MarketplaceHeaderComp() {
  const { theme } = useTheme();
  const {
    searchTerm,
    notifications,
    messages,
    handleSearch,
    handleSell,
    handleMessages,
    handleNotifications,
  } = useMarketplaceHeader();

  return (
    <HeaderContainer theme={theme}>
      <SearchContainer>
        <InputGroup>
          <Form.Control
            placeholder="Buscar produtos, marcas e categorias..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "#ffffff",
            }}
          />
          <ActionButton theme={theme}>
            <FontAwesomeIcon icon={faSearch} />
          </ActionButton>
        </InputGroup>
      </SearchContainer>

      <div className="d-flex gap-3">
        <ActionButton theme={theme} onClick={handleSell}>
          <FontAwesomeIcon icon={faStore} />
          <span className="ms-2">Vender</span>
        </ActionButton>

        <ActionButton theme={theme} onClick={handleMessages}>
          <FontAwesomeIcon icon={faComments} />
          {messages > 0 && <NotificationBadge>{messages}</NotificationBadge>}
        </ActionButton>

        <ActionButton theme={theme} onClick={handleNotifications}>
          <FontAwesomeIcon icon={faBell} />
          {notifications > 0 && (
            <NotificationBadge>{notifications}</NotificationBadge>
          )}
        </ActionButton>
      </div>
    </HeaderContainer>
  );
}

export default MarketplaceHeaderComp;
