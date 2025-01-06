"use client";
import React from "react";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  StatsContainer,
  HeaderSection,
  ScoreSection,
  MetricsGrid,
  MetricCard,
  ChartSection,
  AmenitiesSection,
  TransportSection,
  SafetySection
} from "../../styles/property/MarketplacePropertyNeighborhoodStatsStyles";
import { useMarketplacePropertyNeighborhoodStats } from "../../utils/property/MarketplacePropertyNeighborhoodStatsUtils";

function MarketplacePropertyNeighborhoodStatsComp() {
  const { theme } = useTheme();
  const {
    neighborhoodScore,
    metrics,
    amenities,
    transport,
    safety,
    handleTimeframeChange,
    handleMetricFilter
  } = useMarketplacePropertyNeighborhoodStats();

  return (
    <StatsContainer theme={theme}>
      <HeaderSection theme={theme}>
        <h2>Análise do Bairro</h2>
        <div className="filters">
          <button onClick={() => handleTimeframeChange("1Y")}>1 Ano</button>
          <button onClick={() => handleTimeframeChange("2Y")}>2 Anos</button>
          <button onClick={() => handleTimeframeChange("5Y")}>5 Anos</button>
        </div>
      </HeaderSection>

      <ScoreSection theme={theme}>
        <div className="score-display">
          <h3>Score do Bairro</h3>
          <div className="score">{neighborhoodScore.overall}/10</div>
          <div className="score-breakdown">
            {Object.entries(neighborhoodScore.categories).map(([category, score]) => (
              <div key={category} className="category">
                <span>{category}</span>
                <span>{score}/10</span>
              </div>
            ))}
          </div>
        </div>
      </ScoreSection>

      <MetricsGrid>
        {metrics.map((metric) => (
          <MetricCard key={metric.id} theme={theme}>
            <h4>{metric.name}</h4>
            <div className="value">{metric.value}</div>
            <div className={`trend ${metric.trend}`}>
              {metric.trendValue}
            </div>
            <div className="chart">
              {/* Chart implementation */}
            </div>
          </MetricCard>
        ))}
      </MetricsGrid>

      <ChartSection theme={theme}>
        <h3>Evolução dos Indicadores</h3>
        <div className="chart-container">
          {/* Main chart implementation */}
        </div>
      </ChartSection>

      <AmenitiesSection theme={theme}>
        <h3>Comodidades Próximas</h3>
        <div className="amenities-grid">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="amenity-card">
              <div className="icon">{amenity.icon}</div>
              <div className="info">
                <h4>{amenity.name}</h4>
                <span>{amenity.distance}m</span>
                <div className="rating">{amenity.rating}/5</div>
              </div>
            </div>
          ))}
        </div>
      </AmenitiesSection>

      <TransportSection theme={theme}>
        <h3>Mobilidade</h3>
        <div className="transport-options">
          {transport.map((option) => (
            <div key={option.id} className="transport-card">
              <div className="icon">{option.icon}</div>
              <div className="details">
                <h4>{option.type}</h4>
                <span>{option.distance}m</span>
                <div className="frequency">
                  Frequência: {option.frequency}min
                </div>
              </div>
            </div>
          ))}
        </div>
      </TransportSection>

      <SafetySection theme={theme}>
        <h3>Segurança</h3>
        <div className="safety-metrics">
          {safety.metrics.map((metric) => (
            <div key={metric.id} className="safety-card">
              <h4>{metric.name}</h4>
              <div className="value">{metric.value}</div>
              <div className={`trend ${metric.trend}`}>
                {metric.comparison} vs. média da cidade
              </div>
            </div>
          ))}
        </div>
        <div className="safety-map">
          {/* Safety heatmap implementation */}
        </div>
      </SafetySection>
    </StatsContainer>
  );
}

export default MarketplacePropertyNeighborhoodStatsComp;
