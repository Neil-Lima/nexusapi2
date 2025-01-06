import { useMarketAnalytics } from '../utils/JobsMarketAnalyticsUtils';

function JobsMarketAnalyticsComp() {
  const { theme } = useTheme();
  const {
    marketData,
    industryTrends,
    salaryData,
    demandMetrics,
    handleRegionChange,
    handleIndustryFilter,
    handleTimeframeChange
  } = useMarketAnalytics();

  return (
    <AnalyticsContainer theme={theme}>
      <AnalyticsCard theme={theme}>
        <h2>Análise de Mercado</h2>

        <FilterBar theme={theme}>
          <select onChange={handleRegionChange}>
            <option value="br">Brasil</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
          </select>
          <select onChange={handleIndustryFilter}>
            <option value="all">Todas Indústrias</option>
            <option value="tech">Tecnologia</option>
            <option value="finance">Finanças</option>
          </select>
          <select onChange={handleTimeframeChange}>
            <option value="3m">3 meses</option>
            <option value="6m">6 meses</option>
            <option value="1y">1 ano</option>
          </select>
        </FilterBar>

        <MarketOverview theme={theme}>
          <h3>Visão Geral do Mercado</h3>
          <div className="metrics-grid">
            {marketData.map((metric) => (
              <div key={metric.id} className="metric-item">
                <FontAwesomeIcon icon={faGlobe} />
                <div className="metric-info">
                  <h4>{metric.title}</h4>
                  <p>{metric.value}</p>
                  <span className={`trend ${metric.trend > 0 ? 'positive' : 'negative'}`}>
                    {metric.trend}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </MarketOverview>

        <IndustryTrends theme={theme}>
          <h3>Tendências por Indústria</h3>
          <div className="trends-grid">
            {industryTrends.map((industry) => (
              <div key={industry.id} className="industry-item">
                <FontAwesomeIcon icon={faIndustry} />
                <div className="industry-info">
                  <h4>{industry.name}</h4>
                  <p>{industry.growth}% crescimento</p>
                  <div className="job-openings">{industry.openings} vagas</div>
                </div>
              </div>
            ))}
          </div>
        </IndustryTrends>

        <SalaryMap theme={theme}>
          <h3>Mapa Salarial</h3>
          <div className="salary-grid">
            {salaryData.map((role) => (
              <div key={role.id} className="salary-item">
                <FontAwesomeIcon icon={faDollarSign} />
                <div className="salary-info">
                  <h4>{role.title}</h4>
                  <p>R$ {role.salary.toLocaleString()}</p>
                  <span className="range">
                    R$ {role.range.min.toLocaleString()} - R$ {role.range.max.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SalaryMap>

        <DemandMetrics theme={theme}>
          <h3>Métricas de Demanda</h3>
          <div className="demand-grid">
            {demandMetrics.map((metric) => (
              <div key={metric.id} className="demand-item">
                <FontAwesomeIcon icon={faChartPie} />
                <div className="demand-info">
                  <h4>{metric.skill}</h4>
                  <div className="demand-bar" style={{ width: `${metric.demand}%` }} />
                  <span>{metric.demand}% demanda</span>
                </div>
              </div>
            ))}
          </div>
        </DemandMetrics>
      </AnalyticsCard>
    </AnalyticsContainer>
  );
}

export default JobsMarketAnalyticsComp;
