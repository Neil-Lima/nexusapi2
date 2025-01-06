'use client'
import React from 'react';
import { Card } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { StyledCard, StyledButton, PageImage } from './styles/PagesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function PagesGridCardComp({ page }) {
  const { theme } = useTheme();

  return (
    <StyledCard theme={theme}>
      <PageImage src={page.coverPhoto} alt={page.name} theme={theme} />
      <Card.Body>
        <Card.Title>{page.name}</Card.Title>
        <Card.Text>{page.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <FontAwesomeIcon icon={faHeart} className="me-2" />
            {page.likes}
            <FontAwesomeIcon icon={faComment} className="ms-3 me-2" />
            {page.comments}
          </div>
          <Link href={`/pages/${page.id}`}>
            <StyledButton theme={theme}>View Page</StyledButton>
          </Link>
        </div>
      </Card.Body>
    </StyledCard>
  );
}
