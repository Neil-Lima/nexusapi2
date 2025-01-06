// EventsGridComp.jsx
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import EventsCardComp from '../../card/components/EventsCardComp';
import { 
  GridContainer, 
  GridRow, 
  GridCol,
  ViewToggleContainer,
  ViewToggleButton,
  ListRow,
  ListCol,
  ViewToggleWrapper,
  ViewTitle,
  CardWrapper 
} from '../styles/EventsGridStyles';
import { useEventsGrid } from '../utils/EventsGridUtils';

export default function EventsGridComp({ onEventSelect }) {
  const { theme } = useTheme();
  const { events, viewMode, setViewMode } = useEventsGrid();

  return (
    <GridContainer theme={theme}>
      <ViewToggleContainer theme={theme}>
        <ViewToggleWrapper>
          <ViewTitle theme={theme}>Opções de Visualização</ViewTitle>
          <div>
            <ViewToggleButton 
              active={viewMode === 'grid'} 
              onClick={() => setViewMode('grid')}
              theme={theme}
            >
              <FontAwesomeIcon icon={faThLarge} /> Grid
            </ViewToggleButton>
            <ViewToggleButton 
              active={viewMode === 'list'} 
              onClick={() => setViewMode('list')}
              theme={theme}
            >
              <FontAwesomeIcon icon={faList} /> Lista
            </ViewToggleButton>
          </div>
        </ViewToggleWrapper>
      </ViewToggleContainer>

      {viewMode === 'grid' ? (
        <GridRow>
          {events.map((event) => (
            <GridCol key={event.id}>
              <CardWrapper>
                <EventsCardComp 
                  event={event}
                  onSelect={() => onEventSelect(event)}
                  viewMode={viewMode}
                />
              </CardWrapper>
            </GridCol>
          ))}
        </GridRow>
      ) : (
        <ListRow>
          {events.map((event) => (
            <ListCol key={event.id}>
              <CardWrapper>
                <EventsCardComp 
                  event={event}
                  onSelect={() => onEventSelect(event)}
                  viewMode={viewMode}
                />
              </CardWrapper>
            </ListCol>
          ))}
        </ListRow>
      )}
    </GridContainer>
  );
}
