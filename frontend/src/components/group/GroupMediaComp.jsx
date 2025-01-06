'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MediaItem } from './styles/GroupStyles';

function GroupMediaComp({ media }) {
  return (
    <Row>
      {media.map(item => (
        <Col xs={6} md={4} lg={3} key={item.id}>
          <MediaItem>
            {item.type === 'image' ? (
              <img src={item.url} alt={item.description} />
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={item.url}
                title={item.description}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </MediaItem>
          <small>{item.description}</small>
        </Col>
      ))}
    </Row>
  );
}

export default GroupMediaComp;
