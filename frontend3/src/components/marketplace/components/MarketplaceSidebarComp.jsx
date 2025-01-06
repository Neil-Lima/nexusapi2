"use client";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faHeart,
  faHistory,
  faCog,
  faShoppingCart,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  SidebarContainer,
  UserSection,
  NavigationList,
  NavItem,
  IconWrapper,
  StatsSection,
  StatItem,
} from "../styles/MarketplaceSidebarStyles";
import { useMarketplaceSidebar } from "../utils/MarketplaceSidebarUtils";

function MarketplaceSidebarComp() {
  const { theme } = useTheme();
  const { user, stats, activeItem, handleNavigation } = useMarketplaceSidebar();

  return (
    <SidebarContainer theme={theme}>
      <UserSection>
        <img src={user.avatar} alt={user.name} />
        <h4>{user.name}</h4>
        <p>{user.role}</p>
      </UserSection>

      <NavigationList>
        {[
          { icon: faStore, label: "Minha Loja", id: "store" },
          { icon: faShoppingCart, label: "Pedidos", id: "orders" },
          { icon: faHeart, label: "Favoritos", id: "favorites" },
          { icon: faHistory, label: "Histórico", id: "history" },
          { icon: faTag, label: "Promoções", id: "promotions" },
          { icon: faCog, label: "Configurações", id: "settings" },
        ].map((item) => (
          <NavItem
            key={item.id}
            active={activeItem === item.id}
            onClick={() => handleNavigation(item.id)}
            theme={theme}
          >
            <IconWrapper theme={theme}>
              <FontAwesomeIcon icon={item.icon} />
            </IconWrapper>
            {item.label}
          </NavItem>
        ))}
      </NavigationList>

      <StatsSection>
        {Object.entries(stats).map(([key, value]) => (
          <StatItem key={key} theme={theme}>
            <span className="label">{key}</span>
            <span className="value">{value}</span>
          </StatItem>
        ))}
      </StatsSection>
    </SidebarContainer>
  );
}

export default MarketplaceSidebarComp;
