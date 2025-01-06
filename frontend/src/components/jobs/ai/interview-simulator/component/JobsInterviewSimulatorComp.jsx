'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faMicrophone, faGear, faPlay } from '@fortawesome/free-solid-svg-icons';
import {
  SimulatorContainer,
  SimulatorCard,
  VideoPreview,
  ControlsPanel,
  ControlButton,
  FeedbackPanel,
  ProgressIndicator,
  ScoreCard,
  ActionButton
} from '../styles/JobsInterviewSimulatorStyles';
import { useInterviewSimulator } from '../utils/JobsInterviewSimulatorUtils';

function JobsInterviewSimulatorComp() {
  const { theme } = useTheme();
  const {
    isRecording,
    currentQuestion,
    progress,
    feedback,
    score,
    handleStartSimulation,
    handleStopSimulation,
    handleConfigureSettings
  } = useInterviewSimulator();

  return (
    <SimulatorContainer theme={theme}>
      <SimulatorCard theme={theme}>
        <VideoPreview theme={theme}>
          {isRecording ? (
            <video autoPlay muted />
          ) : (
            <div className="placeholder">
              <FontAwesomeIcon icon={faVideo} />
              <p>Configure sua câmera para começar</p>
            </div>
          )}
        </VideoPreview>

        <ControlsPanel theme={theme}>
          <ControlButton theme={theme}>
            <FontAwesomeIcon icon={faVideo} />
            Câmera
          </ControlButton>
          <ControlButton theme={theme}>
            <FontAwesomeIcon icon={faMicrophone} />
            Microfone
          </ControlButton>
          <ControlButton onClick={handleConfigureSettings} theme={theme}>
            <FontAwesomeIcon icon={faGear} />
            Configurações
          </ControlButton>
        </ControlsPanel>

        <FeedbackPanel theme={theme}>
          <h3>Pergunta Atual:</h3>
          <p>{currentQuestion}</p>
          <ProgressIndicator progress={progress} theme={theme} />
        </FeedbackPanel>

        <ScoreCard theme={theme}>
          <h4>Análise em Tempo Real</h4>
          <div className="scores">
            <div className="score-item">
              <span>Confiança</span>
              <div className="score-value">{score.confidence}%</div>
            </div>
            <div className="score-item">
              <span>Clareza</span>
              <div className="score-value">{score.clarity}%</div>
            </div>
            <div className="score-item">
              <span>Conhecimento</span>
              <div className="score-value">{score.knowledge}%</div>
            </div>
          </div>
        </ScoreCard>

        <ActionButton 
          onClick={isRecording ? handleStopSimulation : handleStartSimulation}
          theme={theme}
        >
          <FontAwesomeIcon icon={faPlay} />
          {isRecording ? 'Parar Simulação' : 'Iniciar Simulação'}
        </ActionButton>
      </SimulatorCard>
    </SimulatorContainer>
  );
}

export default JobsInterviewSimulatorComp;
