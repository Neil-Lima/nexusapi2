'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import { 
  FilterControls, 
  FilterPreset, 
  FilterSlider,
  FilterSection,
  PresetGrid,
  SliderContainer 
} from '../styles/GalleryVideoStyles';

const GalleryVideoFiltersComp = ({ video }) => {
  const { theme } = useTheme();
  
  const filters = [
    { name: 'Brightness', min: 0, max: 200, default: 100 },
    { name: 'Contrast', min: 0, max: 200, default: 100 },
    { name: 'Saturation', min: 0, max: 200, default: 100 },
    { name: 'Hue', min: 0, max: 360, default: 0 }
  ];

  const presets = [
    { name: 'Vintage', values: { brightness: 90, contrast: 120, saturation: 85, hue: 10 } },
    { name: 'Dramatic', values: { brightness: 110, contrast: 150, saturation: 120, hue: 0 } },
    { name: 'Cool', values: { brightness: 100, contrast: 100, saturation: 90, hue: 180 } },
    { name: 'Warm', values: { brightness: 105, contrast: 110, saturation: 110, hue: 30 } }
  ];

  return (
    <FilterControls theme={theme}>
      <FilterSection>
        <h3>Presets</h3>
        <PresetGrid>
          {presets.map((preset) => (
            <FilterPreset key={preset.name} theme={theme}>
              <FontAwesomeIcon icon={faMagic} />
              <h4>{preset.name}</h4>
              <button onClick={() => console.log('Apply preset:', preset.name)}>
                Apply
              </button>
            </FilterPreset>
          ))}
        </PresetGrid>
      </FilterSection>
      
      <FilterSection>
        <h3>Adjustments</h3>
        <SliderContainer>
          {filters.map((filter) => (
            <FilterSlider key={filter.name} theme={theme}>
              <div className="slider-header">
                <label>{filter.name}</label>
                <span>{filter.default}%</span>
              </div>
              <input
                type="range"
                min={filter.min}
                max={filter.max}
                defaultValue={filter.default}
                onChange={(e) => console.log(filter.name, e.target.value)}
              />
            </FilterSlider>
          ))}
        </SliderContainer>
      </FilterSection>
    </FilterControls>
  );
};

export default GalleryVideoFiltersComp;
