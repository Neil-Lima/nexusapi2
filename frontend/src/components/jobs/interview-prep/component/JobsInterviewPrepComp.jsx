'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faComment, faCode, faBrain, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  PrepContainer,
  PrepCard,
  QuestionBank,
  QuestionCard,
  SimulatorSection,
  FeedbackPanel,
  ResourcesGrid,
  ResourceCard,
  ActionButtons
} from '../styles/JobsInterviewPrepStyles';
import { useInterviewPrep } from '../utils/JobsInterviewPrepUtils';

function JobsInterviewPrepComp() {
  const { theme } = useTheme();
  const {
    questions,
    currentSimulation,
    resources,
    feedback,
    handleStartSimulation,
    handleAnswerQuestion,
    handleFeedback,
    handleResourceSelect
  } = useInterviewPrep();

  return (
    <PrepContainer theme={theme}>
      <PrepCard theme={theme}>
        <h2>Preparação para Entrevistas</h2>

        <QuestionBank theme={theme}>
          <h3>Banco de Questões</h3>
          <div className="questions-grid">
            {questions.map(question => (
              <QuestionCard key={question.id} theme={theme}>
                <div className="question-header">
                  <span className={`category ${question.category}`}>
                    {question.category}
                  </span>
                  <div className="difficulty">
                    {[...Array(question.difficulty)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                </div>
                <h4>{question.title}</h4>
                <p>{question.description}</p>
                <div className="question-footer">
                  <button onClick={() => handleAnswerQuestion(question.id)}>
                    <FontAwesomeIcon icon={faPlay} />
                    Praticar
                  </button>
                </div>
              </QuestionCard>
            ))}
          </div>
        </QuestionBank>

        <SimulatorSection theme={theme}>
          <h3>Simulador de Entrevista</h3>
          {currentSimulation ? (
            <div className="simulation-active">
              <div className="video-feed">
                <FontAwesomeIcon icon={faVideo} />
                <span>Simulação em andamento...</span>
              </div>
              <div className="current-question">
                <h4>{currentSimulation.question}</h4>
                <div className="timer">00:02:45</div>
              </div>
              <div className="controls">
                <button className="record">
                  <FontAwesomeIcon icon={faVideo} />
                  Gravar Resposta
                </button>
                <button className="skip">
                  Próxima Questão
                </button>
              </div>
            </div>
          ) : (
            <div className="simulation-start">
              <button onClick={handleStartSimulation}>
                <FontAwesomeIcon icon={faPlay} />
                Iniciar Simulação
              </button>
            </div>
          )}
        </SimulatorSection>

        <FeedbackPanel theme={theme}>
          <h3>Feedback e Análise</h3>
          {feedback.map(item => (
            <div key={item.id} className="feedback-item">
              <div className="feedback-header">
                <FontAwesomeIcon icon={faBrain} />
                <h4>{item.title}</h4>
              </div>
              <p>{item.content}</p>
              <div className="metrics">
                {Object.entries(item.metrics).map(([key, value]) => (
                  <div key={key} className="metric">
                    <span>{key}</span>
                    <div className="progress-bar">
                      <div style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </FeedbackPanel>

        <ResourcesGrid theme={theme}>
          <h3>Recursos de Estudo</h3>
          <div className="resources">
            {resources.map(resource => (
              <ResourceCard 
                key={resource.id} 
                theme={theme}
                onClick={() => handleResourceSelect(resource.id)}
              >
                <FontAwesomeIcon icon={resource.icon} />
                <h4>{resource.title}</h4>
                <p>{resource.description}</p>
                <span className="type">{resource.type}</span>
              </ResourceCard>
            ))}
          </div>
        </ResourcesGrid>

        <ActionButtons theme={theme}>
          <button className="schedule">
            <FontAwesomeIcon icon={faVideo} />
            Agendar Mock Interview
          </button>
          <button className="feedback">
            <FontAwesomeIcon icon={faComment} />
            Solicitar Feedback
          </button>
          <button className="practice">
            <FontAwesomeIcon icon={faCode} />
            Praticar Coding
          </button>
        </ActionButtons>
      </PrepCard>
    </PrepContainer>
  );
}

export default JobsInterviewPrepComp;
