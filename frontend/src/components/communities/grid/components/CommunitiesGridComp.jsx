'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import CommunitiesCardComp from '../../card/components/CommunitiesCardComp';
import { 
  GridContainer, 
  ViewToggleContainer,
  ViewToggleButton,
  ViewToggleWrapper,
  ViewTitle,
  CreateButton,
  ButtonGroup
} from '../styles/CommunitiesGridStyles';
import { useCommunitiesGrid } from '../utils/CommunitiesGridUtils';

export default function CommunitiesGridComp({ onCreateClick }) {
  const { theme } = useTheme();
  const { communities, viewMode, setViewMode, loading, error } = useCommunitiesGrid();

  if (loading) return <div>Carregando comunidades...</div>;
  if (error) return <div>Erro ao carregar comunidades: {error}</div>;

  return (
    <GridContainer theme={theme}>
      <ViewToggleContainer theme={theme}>
        <ViewToggleWrapper>
          <ViewTitle theme={theme}>Comunidades</ViewTitle>
          <ButtonGroup>
            <CreateButton theme={theme} onClick={onCreateClick}>
              <FontAwesomeIcon icon={faPlus} /> Criar Comunidade
            </CreateButton>
            <ViewToggleButton 
              active={viewMode === 'grid'} 
              onClick={() => setViewMode('grid')}
              theme={theme}
            >
              <FontAwesomeIcon icon={faThLarge} />
            </ViewToggleButton>
            <ViewToggleButton 
              active={viewMode === 'list'} 
              onClick={() => setViewMode('list')}
              theme={theme}
            >
              <FontAwesomeIcon icon={faList} />
            </ViewToggleButton>
          </ButtonGroup>
        </ViewToggleWrapper>
      </ViewToggleContainer>

      <Row className={viewMode === 'grid' ? 'g-4' : 'flex-column g-3'}>
        {communities.map((community) => (
          <Col key={community._id} xs={12} md={viewMode === 'grid' ? 4 : 12}>
            <CommunitiesCardComp 
              community={community}
              viewMode={viewMode}
            />
          </Col>
        ))}
      </Row>
    </GridContainer>
  );
}
