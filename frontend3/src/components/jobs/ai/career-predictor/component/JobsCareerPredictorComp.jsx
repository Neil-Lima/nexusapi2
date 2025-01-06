'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faChartLine, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {
  PredictorContainer,
  PredictorCard,
  CareerPath,
  PathTimeline,
  TimelineItem,
  SalaryTrends,
  SkillsRequired,
  ActionPanel
} from '../styles/JobsCareerPredictorStyles';
import { useCareerPredictor } from '../utils/JobsCareerPredictorUtils';

function JobsCareerPredictorComp() {
  const { theme } = useTheme();
  const {
    careerPaths,
    salaryData,
    requiredSkills,
    handlePathSelect,
    handleAnalyze
  } = useCareerPredictor();

  return (
    <PredictorContainer theme={theme}>
      <PredictorCard theme={theme}>
        <h2>Previsão de Carreira</h2>

        <CareerPath theme={theme}>
          <h3>Caminhos Recomendados</h3>
          <PathTimeline theme={theme}>
            {careerPaths.map((path) => (
              <TimelineItem key={path.id} theme={theme} onClick={() => handlePathSelect(path.id)}>
                <FontAwesomeIcon icon={faBriefcase} />
                <div className="path-info">
                  <h4>{path.title}</h4>
                  <p>{path.description}</p>
                  <span className="probability">{path.probability}% Match</span>
                </div>
              </TimelineItem>
            ))}
          </PathTimeline>
        </CareerPath>

        <SalaryTrends theme={theme}>
          <h3>Tendências Salariais</h3>
          <div className="trends-grid">
            {salaryData.map((item) => (
              <div key={item.id} className="trend-item">
                <FontAwesomeIcon icon={faChartLine} />
                <div className="trend-info">
                  <h4>{item.position}</h4>
                  <p>R$ {item.salary.toLocaleString()}</p>
                  <span className="growth">+{item.growth}% ao ano</span>
                </div>
              </div>
            ))}
          </div>
        </SalaryTrends>

        <SkillsRequired theme={theme}>
          <h3>Habilidades Necessárias</h3>
          <div className="skills-grid">
            {requiredSkills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <FontAwesomeIcon icon={faGraduationCap} />
                <span>{skill.name}</span>
                <div className="progress-bar" style={{ width: `${skill.importance}%` }} />
              </div>
            ))}
          </div>
        </SkillsRequired>

        <ActionPanel theme={theme}>
          <button onClick={handleAnalyze}>
            <FontAwesomeIcon icon={faRocket} />
            Analisar Minha Carreira
          </button>
        </ActionPanel>
      </PredictorCard>
    </PredictorContainer>
  );
}

export default JobsCareerPredictorComp;
