'use client';
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { NewsContainer, NewsItem, NewsTitle, NewsDate } from '../styles/NewsStyles';

function NewsLatestComp() {
  const { theme } = useTheme();

  const newsItems = [
    {
      id: 1,
      title: "Nova atualização do sistema disponível",
      date: "2 horas atrás"
    },
    {
      id: 2, 
      title: "Manutenção programada para o próximo final de semana",
      date: "5 horas atrás"
    },
    {
      id: 3,
      title: "Novos recursos implementados na plataforma",
      date: "1 dia atrás"
    }
  ];

  return (
    <NewsContainer theme={theme}>
      <Card>
        <Card.Header>
          <h5>Últimas Notícias</h5>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {newsItems.map(news => (
              <NewsItem key={news.id} theme={theme}>
                <NewsTitle theme={theme}>{news.title}</NewsTitle>
                <NewsDate theme={theme}>{news.date}</NewsDate>
              </NewsItem>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </NewsContainer>
  );
}

export default NewsLatestComp;
