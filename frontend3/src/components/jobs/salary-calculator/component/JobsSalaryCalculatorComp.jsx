'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faChartLine, faMapMarker, faBriefcase, faGraduationCap, faCog } from '@fortawesome/free-solid-svg-icons';
import {
  CalculatorContainer,
  CalculatorCard,
  FormSection,
  ResultsSection,
  ComparisonChart,
  InsightsPanel,
  BenefitsCalculator,
  MarketTrends
} from '../styles/JobsSalaryCalculatorStyles';
import { useSalaryCalculator } from '../utils/JobsSalaryCalculatorUtils';

function JobsSalaryCalculatorComp() {
  const { theme } = useTheme();
  const {
    formData,
    results,
    marketData,
    handleInputChange,
    handleCalculate,
    handleLocationChange,
    handleExperienceChange,
    handleEducationChange
  } = useSalaryCalculator();

  return (
    <CalculatorContainer theme={theme}>
      <CalculatorCard theme={theme}>
        <h2>Calculadora Salarial</h2>

        <FormSection theme={theme}>
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faBriefcase} />
              Cargo
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              placeholder="Ex: Desenvolvedor Frontend Senior"
            />
          </div>

          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faMapMarker} />
              Localização
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleLocationChange}
            >
              <option value="">Selecione a cidade</option>
              <option value="sao-paulo">São Paulo</option>
              <option value="rio-de-janeiro">Rio de Janeiro</option>
              <option value="belo-horizonte">Belo Horizonte</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faGraduationCap} />
              Educação
            </label>
            <select
              name="education"
              value={formData.education}
              onChange={handleEducationChange}
            >
              <option value="bachelor">Graduação</option>
              <option value="master">Mestrado</option>
              <option value="phd">Doutorado</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faBriefcase} />
              Anos de Experiência
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleExperienceChange}
              min="0"
              max="50"
            />
          </div>

          <button className="calculate-btn" onClick={handleCalculate}>
            <FontAwesomeIcon icon={faCalculator} />
            Calcular Salário
          </button>
        </FormSection>

        <ResultsSection theme={theme}>
          <div className="salary-range">
            <h3>Faixa Salarial Estimada</h3>
            <div className="range">
              <span className="min">R$ {results.minSalary}</span>
              <div className="bar">
                <div className="indicator" style={{ left: `${results.percentile}%` }} />
              </div>
              <span className="max">R$ {results.maxSalary}</span>
            </div>
            <span className="percentile">Você está no percentil {results.percentile}%</span>
          </div>
        </ResultsSection>

        <ComparisonChart theme={theme}>
          <h3>Comparação com o Mercado</h3>
          <div className="chart">
            {marketData.map((data, index) => (
              <div key={index} className="bar-group">
                <div className="bar" style={{ height: `${data.percentage}%` }} />
                <span className="label">{data.label}</span>
                <span className="value">R$ {data.value}</span>
              </div>
            ))}
          </div>
        </ComparisonChart>

        <InsightsPanel theme={theme}>
          <h3>Insights e Recomendações</h3>
          <div className="insights-grid">
            {results.insights.map((insight, index) => (
              <div key={index} className="insight-card">
                <FontAwesomeIcon icon={insight.icon} />
                <h4>{insight.title}</h4>
                <p>{insight.description}</p>
              </div>
            ))}
          </div>
        </InsightsPanel>

        <BenefitsCalculator theme={theme}>
          <h3>Calculadora de Benefícios</h3>
          <div className="benefits-grid">
            {formData.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <label>
                  <input
                    type="checkbox"
                    checked={benefit.selected}
                    onChange={() => handleInputChange({
                      target: {
                        name: 'benefits',
                        value: index
                      }
                    })}
                  />
                  {benefit.name}
                </label>
                <span>+ R$ {benefit.value}</span>
              </div>
            ))}
          </div>
          <div className="total-benefits">
            <span>Total de Benefícios:</span>
            <strong>R$ {results.totalBenefits}</strong>
          </div>
        </BenefitsCalculator>

        <MarketTrends theme={theme}>
          <h3>Tendências do Mercado</h3>
          <div className="trends-grid">
            {marketData.trends.map((trend, index) => (
              <div key={index} className="trend-card">
                <FontAwesomeIcon icon={faChartLine} />
                <div className="trend-info">
                  <h4>{trend.title}</h4>
                  <p>{trend.description}</p>
                  <span className={`trend-value ${trend.direction}`}>
                    {trend.value}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </MarketTrends>
      </CalculatorCard>
    </CalculatorContainer>
  );
}

export default JobsSalaryCalculatorComp;
