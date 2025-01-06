'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChartLine, faTrophy, faBrain, faCheck, faClock } from '@fortawesome/free-solid-svg-icons';
import {
  AssessmentContainer,
  AssessmentCard,
  SkillsGrid,
  SkillCard,
  TestSection,
  ResultsPanel,
  CertificateCard,
  ProgressTracker
} from '../styles/JobsSkillAssessmentStyles';
import { useSkillAssessment } from '../utils/JobsSkillAssessmentUtils';

function JobsSkillAssessmentComp() {
  const { theme } = useTheme();
  const {
    skills,
    currentTest,
    results,
    certificates,
    handleStartTest,
    handleAnswerQuestion,
    handleSkillSelect,
    handleCertificateDownload
  } = useSkillAssessment();

  return (
    <AssessmentContainer theme={theme}>
      <AssessmentCard theme={theme}>
        <h2>Avaliação de Habilidades</h2>

        <SkillsGrid theme={theme}>
          {skills.map(skill => (
            <SkillCard 
              key={skill.id} 
              theme={theme}
              onClick={() => handleSkillSelect(skill.id)}
            >
              <FontAwesomeIcon icon={skill.icon} />
              <h4>{skill.name}</h4>
              <div className="skill-level">
                <div className="progress" style={{ width: `${skill.progress}%` }} />
                <span>{skill.progress}%</span>
              </div>
              <div className="skill-stats">
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                  {skill.testsCompleted} testes
                </span>
                <span>
                  <FontAwesomeIcon icon={faTrophy} />
                  Nível {skill.level}
                </span>
              </div>
            </SkillCard>
          ))}
        </SkillsGrid>

        {currentTest ? (
          <TestSection theme={theme}>
            <div className="test-header">
              <h3>{currentTest.title}</h3>
              <div className="timer">
                <FontAwesomeIcon icon={faClock} />
                {currentTest.timeRemaining}
              </div>
            </div>
            <div className="question">
              <h4>{currentTest.currentQuestion.title}</h4>
              <p>{currentTest.currentQuestion.description}</p>
              <div className="options">
                {currentTest.currentQuestion.options.map((option, index) => (
                  <button 
                    key={index}
                    onClick={() => handleAnswerQuestion(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </TestSection>
        ) : (
          <div className="start-test">
            <button onClick={handleStartTest}>
              <FontAwesomeIcon icon={faCode} />
              Iniciar Nova Avaliação
            </button>
          </div>
        )}

        <ResultsPanel theme={theme}>
          <h3>Resultados e Análises</h3>
          <div className="results-grid">
            {results.map(result => (
              <div key={result.id} className="result-card">
                <div className="result-header">
                  <FontAwesomeIcon icon={faChartLine} />
                  <h4>{result.skillName}</h4>
                </div>
                <div className="metrics">
                  {Object.entries(result.metrics).map(([key, value]) => (
                    <div key={key} className="metric">
                      <span>{key}</span>
                      <div className="progress-bar">
                        <div style={{ width: `${value}%` }} />
                      </div>
                      <span>{value}%</span>
                    </div>
                  ))}
                </div>
                <p className="recommendation">{result.recommendation}</p>
              </div>
            ))}
          </div>
        </ResultsPanel>

        <CertificateCard theme={theme}>
          <h3>Certificações</h3>
          <div className="certificates-grid">
            {certificates.map(cert => (
              <div key={cert.id} className="certificate">
                <FontAwesomeIcon icon={faTrophy} />
                <div className="cert-info">
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                  <span className="date">Obtido em: {cert.date}</span>
                </div>
                <button onClick={() => handleCertificateDownload(cert.id)}>
                  Download
                </button>
              </div>
            ))}
          </div>
        </CertificateCard>

        <ProgressTracker theme={theme}>
          <h3>Progresso Geral</h3>
          <div className="progress-stats">
            <div className="stat">
              <FontAwesomeIcon icon={faBrain} />
              <div>
                <h4>Nível Médio</h4>
                <span>Intermediário Avançado</span>
              </div>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faCheck} />
              <div>
                <h4>Testes Completados</h4>
                <span>15 de 20</span>
              </div>
            </div>
            <div className="stat">
              <FontAwesomeIcon icon={faTrophy} />
              <div>
                <h4>Certificações</h4>
                <span>3 Obtidas</span>
              </div>
            </div>
          </div>
        </ProgressTracker>
      </AssessmentCard>
    </AssessmentContainer>
  );
}

export default JobsSkillAssessmentComp;
