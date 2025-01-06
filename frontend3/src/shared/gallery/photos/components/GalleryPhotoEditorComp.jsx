'use client';
import React from 'react';
import { EditorContainer, ToolBar, Canvas } from '../styles/GalleryPhotoEditorStyles';
import { useGalleryPhotoEditor } from '../utils/GalleryPhotoEditorUtils';

const GalleryPhotoEditorComp = ({ photo }) => {
  const { filters, activeFilter, adjustments, handleFilterChange, handleAdjustment } = useGalleryPhotoEditor();

  return (
    <EditorContainer>
      <ToolBar>
        <div className="filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={activeFilter === filter.id ? 'active' : ''}
            >
              {filter.name}
            </button>
          ))}
        </div>
        <div className="adjustments">
          {Object.entries(adjustments).map(([key, value]) => (
            <div key={key} className="adjustment-control">
              <label>{key}</label>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => handleAdjustment(key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </ToolBar>
      <Canvas>
        <img src={photo?.url} alt={photo?.caption} />
      </Canvas>
    </EditorContainer>
  );
};

export default GalleryPhotoEditorComp;
