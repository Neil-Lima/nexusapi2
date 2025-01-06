"use client";
import React from "react";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  BlueprintContainer,
  ViewerPanel,
  ToolsPanel,
  LayerSelector,
  MeasurementTools,
  AnnotationTools,
  ZoomControls,
  InfoCard
} from "../../styles/property/MarketplacePropertyBlueprintViewerStyles";
import { useMarketplacePropertyBlueprintViewer } from "../../utils/property/MarketplacePropertyBlueprintViewerUtils";

function MarketplacePropertyBlueprintViewerComp() {
  const { theme } = useTheme();
  const {
    selectedLayer,
    layers,
    annotations,
    measurements,
    zoomLevel,
    handleLayerChange,
    handleAddAnnotation,
    handleAddMeasurement,
    handleZoom,
    blueprintInfo
  } = useMarketplacePropertyBlueprintViewer();

  return (
    <BlueprintContainer theme={theme}>
      <ViewerPanel theme={theme}>
        <div className="blueprint-canvas">
          {/* Canvas para renderização da planta */}
        </div>
        <ZoomControls theme={theme}>
          <button onClick={() => handleZoom("in")}>+</button>
          <span>{zoomLevel}%</span>
          <button onClick={() => handleZoom("out")}>-</button>
        </ZoomControls>
        <InfoCard theme={theme}>
          <h3>{blueprintInfo.title}</h3>
          <div className="info-item">
            <span>Área Total:</span>
            <strong>{blueprintInfo.totalArea}m²</strong>
          </div>
          <div className="info-item">
            <span>Escala:</span>
            <strong>{blueprintInfo.scale}</strong>
          </div>
          <div className="info-item">
            <span>Última Atualização:</span>
            <strong>{blueprintInfo.lastUpdate}</strong>
          </div>
        </InfoCard>
      </ViewerPanel>

      <ToolsPanel theme={theme}>
        <LayerSelector>
          <h4>Camadas</h4>
          {layers.map((layer) => (
            <label key={layer.id}>
              <input
                type="checkbox"
                checked={selectedLayer.includes(layer.id)}
                onChange={() => handleLayerChange(layer.id)}
              />
              {layer.name}
            </label>
          ))}
        </LayerSelector>

        <MeasurementTools>
          <h4>Medições</h4>
          <button onClick={() => handleAddMeasurement("linear")}>
            Medição Linear
          </button>
          <button onClick={() => handleAddMeasurement("area")}>
            Medição de Área
          </button>
          <div className="measurements-list">
            {measurements.map((measurement, index) => (
              <div key={index} className="measurement-item">
                {measurement.type}: {measurement.value}
              </div>
            ))}
          </div>
        </MeasurementTools>

        <AnnotationTools>
          <h4>Anotações</h4>
          <button onClick={() => handleAddAnnotation("text")}>
            Adicionar Texto
          </button>
          <button onClick={() => handleAddAnnotation("marker")}>
            Adicionar Marcador
          </button>
          <div className="annotations-list">
            {annotations.map((annotation, index) => (
              <div key={index} className="annotation-item">
                {annotation.text}
              </div>
            ))}
          </div>
        </AnnotationTools>
      </ToolsPanel>
    </BlueprintContainer>
  );
}

export default MarketplacePropertyBlueprintViewerComp;
