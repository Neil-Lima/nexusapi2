'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import {
  Tour360Container,
  ViewerContainer,
  ControlsContainer,
  NavigationButtons,
  ZoomControls,
  RoomSelector,
  InformationPanel,
  ViewModeToggle
} from '../../styles/property/MarketplacePropertyTour360Styles';
import { useMarketplacePropertyTour360 } from '../../utils/property/MarketplacePropertyTour360Utils';

function MarketplacePropertyTour360Comp() {
  const { theme } = useTheme();
  const { 
    currentRoom,
    zoomLevel,
    viewMode,
    roomsList,
    handleRoomChange,
    handleZoomIn,
    handleZoomOut,
    handleRotateLeft,
    handleRotateRight,
    toggleViewMode,
    roomInformation
  } = useMarketplacePropertyTour360();

  return (
    <GradientBackground theme={theme}>
      <Tour360Container theme={theme}>
        <ViewerContainer>
          <div className="viewer-content">
            {/* Aqui será integrada a biblioteca de visualização 360° */}
          </div>
        </ViewerContainer>

        <ControlsContainer>
          <NavigationButtons>
            <button onClick={handleRotateLeft}>Girar Esquerda</button>
            <button onClick={handleRotateRight}>Girar Direita</button>
          </NavigationButtons>

          <ZoomControls>
            <button onClick={handleZoomIn}>Zoom +</button>
            <span>{zoomLevel}x</span>
            <button onClick={handleZoomOut}>Zoom -</button>
          </ZoomControls>

          <RoomSelector>
            <select value={currentRoom} onChange={handleRoomChange}>
              {roomsList.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </RoomSelector>

          <ViewModeToggle onClick={toggleViewMode}>
            {viewMode === 'normal' ? 'Modo VR' : 'Modo Normal'}
          </ViewModeToggle>
        </ControlsContainer>

        <InformationPanel>
          <h3>{roomInformation.name}</h3>
          <p>{roomInformation.description}</p>
          <ul>
            {roomInformation.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </InformationPanel>
      </Tour360Container>
    </GradientBackground>
  );
}

export default MarketplacePropertyTour360Comp;
