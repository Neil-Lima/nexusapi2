"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  StatsContainer,
  StatItem,
  StatIcon,
  StatInfo,
  StatLabel,
  StatValue,
} from "../styles/MarketplaceStatsStyles";
import { useMarketplaceStats } from "../utils/MarketplaceStatsUtils";

function MarketplaceStatsComp() {
  const { theme } = useTheme();
  const { stats } = useMarketplaceStats();

  return (
    <StatsContainer theme={theme}>
      {stats.map((stat, index) => (
        <StatItem key={index} theme={theme}>
          <StatIcon theme={theme}>
            <FontAwesomeIcon icon={stat.icon} />
          </StatIcon>
          <StatInfo>
            <StatLabel>{stat.label}</StatLabel>
            <StatValue theme={theme}>{stat.value}</StatValue>
          </StatInfo>
        </StatItem>
      ))}
    </StatsContainer>
  );
}

export default MarketplaceStatsComp;
