'use client'
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { StyledListGroup, InfoIcon } from './styles/PagesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faNewspaper, faEdit, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function PagesDetailInfoComp({ pageData }) {
  const { theme } = useTheme();

  return (
    <StyledListGroup theme={theme}>
      <ListGroup.Item>
        <InfoIcon icon={faUser} theme={theme} />
        <strong>Administrator:</strong> {pageData.admin}
      </ListGroup.Item>
      <ListGroup.Item>
        <InfoIcon icon={faCalendarAlt} theme={theme} />
        <strong>Created At:</strong> {pageData.createdAt}
      </ListGroup.Item>
      <ListGroup.Item>
        <InfoIcon icon={faNewspaper} theme={theme} />
        <strong>Last Post:</strong> {pageData.lastPost}
      </ListGroup.Item>
      <ListGroup.Item>
        <InfoIcon icon={faEdit} theme={theme} />
        <strong>Total Posts:</strong> {pageData.posts}
      </ListGroup.Item>
      <ListGroup.Item>
        <InfoIcon icon={faChartLine} theme={theme} />
        <strong>Engagement Rate:</strong> {pageData.engagement}
      </ListGroup.Item>
    </StyledListGroup>
  );
}
