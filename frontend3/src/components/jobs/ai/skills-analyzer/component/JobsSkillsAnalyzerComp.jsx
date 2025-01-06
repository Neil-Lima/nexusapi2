'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCode, faBrain, faRocket } from '@fortawesome/free-solid-svg-icons';
import {
  AnalyzerContainer,
  AnalyzerCard,
  SkillsChart,
  SkillsGrid,
  SkillCard,
  RecommendationsPanel,
  TrendingSkills,
  ActionBar
} from '../styles/JobsSkillsAnalyzerStyles';
import { useSkillsAnalyzer } from '../utils/JobsSkillsAnalyzerUtils';

function JobsSkillsAnalyzerComp() {
  const { theme } = useTheme();
  const {
    skills,
    recommendations,
    trendingSkills,
    handleSkillUpdate,
    handleAnalyze,
    handleExport
  } = useSkillsAnalyzer();

  return (
    <AnalyzerContainer theme={theme}>
      <AnalyzerCard theme={theme}>
        <h2>Análise de Competências</h2>
        
        <SkillsChart theme={theme}>
          {/* Gráfico Radar de Habilidades */}
        </SkillsChart>

        <SkillsGrid>
          {skills.map((skill) => (
            <SkillCard key={skill.id} theme={theme}>
              <FontAwesomeIcon icon={skill.icon} />
              <h4>{skill.name}</h4>
              <div className="level">Nível: {skill.level}</div>
              <div className="market-demand">
                Demanda: {skill.marketDemand}%
              </div>
            </SkillCard>
          ))}
        </SkillsGrid>

        <RecommendationsPanel theme={theme}>
          <h3>Recomendações de Desenvolvimento</h3>
          {recommendations.map((rec) => (
            <div key={rec.id} className="recommendation">
              <FontAwesomeIcon icon={faBrain} />
              <div>
                <h4>{rec.title}</h4>
                <p>{rec.description}</p>
              </div>
            </div>
          ))}
        </RecommendationsPanel>

        <TrendingSkills theme={theme}>
          <h3>Habilidades em Alta</h3>
          <div className="trends">
            {trendingSkills.map((trend) => (
              <div key={trend.id} className="trend-item">
                <FontAwesomeIcon icon={faRocket} />
                <span>{trend.name}</span>
                <div className="growth">+{trend.growth}%</div>
              </div>
            ))}
          </div>
        </TrendingSkills>

        <ActionBar theme={theme}>
          <button onClick={handleAnalyze}>
            <FontAwesomeIcon icon={faChartLine} />
            Analisar Perfil
          </button>
          <button onClick={handleExport}>
            <FontAwesomeIcon icon={faCode} />
            Exportar Relatório
          </button>
        </ActionBar>
      </AnalyzerCard>
    </AnalyzerContainer>
  );
}

export default JobsSkillsAnalyzerComp;
