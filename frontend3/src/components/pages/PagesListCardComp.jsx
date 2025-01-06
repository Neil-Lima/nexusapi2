'use client'
import React from 'react';
import { Card } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { ListCard, StyledButton } from './styles/PagesStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function PagesListCardComp({ page }) {
  const { theme } = useTheme();

  return (
    <ListCard theme={theme}>
      <Card.Img variant="top" src={page.coverPhoto} />
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
    </ListCard>
  );
}
