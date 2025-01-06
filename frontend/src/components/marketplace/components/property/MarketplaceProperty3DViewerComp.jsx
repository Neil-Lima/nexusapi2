"use client";
import React from "react";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  ModelContainer,
  ModelViewport,
  ControlPanel,
  ViewModeButtons,
  ViewModeButton,
  MaterialSelector,
  MeasurementTools,
  MeasurementButton,
  ViewOptions,
  ControlButton,
  InfoOverlay,
  InfoContent
} from "../../styles/property/MarketplaceProperty3DViewerStyles";
import { useMarketplaceProperty3DViewer } from "../../utils/property/MarketplaceProperty3DViewerUtils";

function MarketplaceProperty3DViewerComp() {
  const { theme } = useTheme();
  const {
    modelState,
    selectedMaterial,
    measurements,
    viewMode,
    handleRotation,
    handleZoom,
    handleMaterialChange,
    handleMeasurement,
    toggleViewMode,
    modelInfo
  } = useMarketplaceProperty3DViewer();

  return (
    <ModelContainer theme={theme}>
      <ModelViewport theme={theme}>
        {/* 3D Viewer Integration */}
        <InfoOverlay theme={theme}>
          <InfoContent theme={theme}>
            <h3>{modelInfo.name}</h3>
            <p>{modelInfo.description}</p>
            <ul>
              {modelInfo.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </InfoContent>
        </InfoOverlay>
      </ModelViewport>

      <ControlPanel theme={theme}>
        <ViewModeButtons>
          {["wireframe", "textured", "floorplan"].map((mode) => (
            <ViewModeButton
              key={mode}
              onClick={() => toggleViewMode(mode)}
              active={viewMode === mode}
              theme={theme}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </ViewModeButton>
          ))}
        </ViewModeButtons>

        <MaterialSelector theme={theme}>
          <h4>Materiais</h4>
          <select value={selectedMaterial} onChange={handleMaterialChange}>
            <option value="original">Original</option>
            <option value="marble">Mármore</option>
            <option value="wood">Madeira</option>
            <option value="ceramic">Cerâmica</option>
          </select>
        </MaterialSelector>

        <MeasurementTools theme={theme}>
          <h4>Medições</h4>
          <div className="measurement-buttons">
            <MeasurementButton onClick={() => handleMeasurement("distance")} theme={theme}>
              Distância
            </MeasurementButton>
            <MeasurementButton onClick={() => handleMeasurement("area")} theme={theme}>
              Área
            </MeasurementButton>
          </div>
          <div className="measurements-display">
            {measurements.map((measurement, index) => (
              <div key={index} className="measurement-item">
                {measurement.type}: {measurement.value}
              </div>
            ))}
          </div>
        </MeasurementTools>
      </ControlPanel>

      <ViewOptions theme={theme}>
        <ControlButton onClick={() => handleRotation("left")} theme={theme}>
          Girar Esquerda
        </ControlButton>
        <ControlButton onClick={() => handleRotation("right")} theme={theme}>
          Girar Direita
        </ControlButton>
        <ControlButton onClick={() => handleZoom("in")} theme={theme}>
          Zoom +
        </ControlButton>
        <ControlButton onClick={() => handleZoom("out")} theme={theme}>
          Zoom -
        </ControlButton>
      </ViewOptions>
    </ModelContainer>
  );
}

export default MarketplaceProperty3DViewerComp;
