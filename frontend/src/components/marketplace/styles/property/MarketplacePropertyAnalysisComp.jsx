'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import {
  AnalysisContainer,
  ValueSection,
  LocationSection,
  MarketTrendsSection,
  ComparisonSection,
  ChartContainer,
  MetricsGrid,
  MetricCard,
  NeighborhoodStats
} from '../../styles/property/MarketplacePropertyAnalysisStyles';
import { useMarketplacePropertyAnalysis } from '../../utils/property/MarketplacePropertyAnalysisUtils';

function MarketplacePropertyAnalysisComp() {
  const { theme } = useTheme();
  const {
    propertyValue,
    locationMetrics,
    marketTrends,
    comparableProperties,
    neighborhoodData,
    handleTimeframeChange,
    handleMetricToggle
  } = useMarketplacePropertyAnalysis();

  return (
    <GradientBackground theme={theme}>
      <AnalysisContainer theme={theme}>
        <ValueSection>
          <h3>Análise de Valor</h3>
          <div className="value-metrics">
            <div className="current-value">
              <h4>Valor Estimado</h4>
              <span className="price">R$ {propertyValue.estimated}</span>
            </div>
            <div className="value-range">
              <span>Mínimo: R$ {propertyValue.minimum}</span>
              <span>Máximo: R$ {propertyValue.maximum}</span>
            </div>
            <div className="confidence-score">
              <span>Índice de Confiança: {propertyValue.confidenceScore}%</span>
            </div>
          </div>
        </ValueSection>

        <LocationSection>
          <h3>Análise da Localização</h3>
          <MetricsGrid>
            {locationMetrics.map((metric) => (
              <MetricCard key={metric.id} theme={theme}>
                <h4>{metric.name}</h4>
                <span className="value">{metric.value}</span>
                <span className="trend">{metric.trend}</span>
              </MetricCard>
            ))}
          </MetricsGrid>
        </LocationSection>

        <MarketTrendsSection>
          <h3>Tendências de Mercado</h3>
          <div className="timeframe-selector">
            <button onClick={() => handleTimeframeChange('1M')}>1 Mês</button>
            <button onClick={() => handleTimeframeChange('6M')}>6 Meses</button>
            <button onClick={() => handleTimeframeChange('1Y')}>1 Ano</button>
          </div>
          <ChartContainer>
            {/* Implementação do gráfico de tendências */}
          </ChartContainer>
        </MarketTrendsSection>

        <ComparisonSection>
          <h3>Comparativo de Mercado</h3>
          <div className="comparable-properties">
            {comparableProperties.map((property) => (
              <div key={property.id} className="property-card">
                <img src={property.image} alt={property.title} />
                <div className="property-info">
                  <h4>{property.title}</h4>
                  <span className="price">R$ {property.price}</span>
                  <span className="difference">{property.priceDifference}%</span>
                </div>
              </div>
            ))}
          </div>
        </ComparisonSection>

        <NeighborhoodStats>
          <h3>Estatísticas do Bairro</h3>
          <div className="stats-grid">
            {neighborhoodData.map((stat) => (
              <div key={stat.id} className="stat-item">
                <h4>{stat.name}</h4>
                <span className="value">{stat.value}</span>
                <div className="trend-indicator">
                  <span className={`trend ${stat.trend}`}>{stat.trendValue}</span>
                </div>
              </div>
            ))}
          </div>
        </NeighborhoodStats>
      </AnalysisContainer>
    </GradientBackground>
  );
}

export default MarketplacePropertyAnalysisComp;
