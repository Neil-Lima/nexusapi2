'use client'
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { ViewToggleButton } from './styles/PagesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThLarge, faList } from '@fortawesome/free-solid-svg-icons';

export default function PagesSearchComp({ searchTerm, setSearchTerm, viewMode, setViewMode }) {
  const { theme } = useTheme();

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <Form className="flex-grow-1 me-3">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Search pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ background: 'rgba(255, 255, 255, 0.1)', color: theme.textColor }}
          />
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup>
      </Form>
      <div>
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
      </div>
    </div>
  );
}
