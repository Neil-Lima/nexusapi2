'use client';
import React, { useState } from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { 
  SubtitleControls, 
  SubtitleEntry, 
  SubtitleTimeline,
  SubtitleButton,
  SubtitleList,
  TimeInput
} from '../styles/GalleryVideoStyles';

const GalleryVideoSubtitlesComp = ({ video }) => {
  const { theme } = useTheme();
  const [subtitles, setSubtitles] = useState([]);

  const addSubtitle = () => {
    setSubtitles([...subtitles, {
      id: Date.now(),
      startTime: 0,
      endTime: 5,
      text: ''
    }]);
  };

  const removeSubtitle = (id) => {
    setSubtitles(subtitles.filter(s => s.id !== id));
  };

  return (
    <SubtitleControls theme={theme}>
      <SubtitleButton onClick={addSubtitle} theme={theme}>
        <FontAwesomeIcon icon={faPlus} /> Add Subtitle
      </SubtitleButton>
      
      <SubtitleList>
        {subtitles.map((subtitle) => (
          <SubtitleEntry key={subtitle.id} theme={theme}>
            <input
              type="text"
              value={subtitle.text}
              onChange={(e) => {
                const newSubtitles = subtitles.map(s => 
                  s.id === subtitle.id ? {...s, text: e.target.value} : s
                );
                setSubtitles(newSubtitles);
              }}
              placeholder="Enter subtitle text..."
            />
            <div className="time-controls">
              <TimeInput
                type="number"
                value={subtitle.startTime}
                onChange={(e) => {
                  const newSubtitles = subtitles.map(s =>
                    s.id === subtitle.id ? {...s, startTime: Number(e.target.value)} : s
                  );
                  setSubtitles(newSubtitles);
                }}
              />
              <span>to</span>
              <TimeInput
                type="number"
                value={subtitle.endTime}
                onChange={(e) => {
                  const newSubtitles = subtitles.map(s =>
                    s.id === subtitle.id ? {...s, endTime: Number(e.target.value)} : s
                  );
                  setSubtitles(newSubtitles);
                }}
              />
              <button 
                className="remove-btn" 
                onClick={() => removeSubtitle(subtitle.id)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </SubtitleEntry>
        ))}
      </SubtitleList>

      <SubtitleTimeline theme={theme}>
        {subtitles.map((subtitle) => (
          <div
            key={subtitle.id}
            className="subtitle-marker"
            style={{
              left: `${(subtitle.startTime / video?.duration) * 100}%`,
              width: `${((subtitle.endTime - subtitle.startTime) / video?.duration) * 100}%`
            }}
          />
        ))}
      </SubtitleTimeline>
    </SubtitleControls>
  );
};

export default GalleryVideoSubtitlesComp;
