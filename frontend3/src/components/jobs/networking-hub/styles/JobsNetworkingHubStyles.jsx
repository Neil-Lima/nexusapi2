'use client';
import styled from 'styled-components';

export const HubContainer = styled.div`
  padding: 20px;
`;

export const HubCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 20px;
  color: ${props => props.theme.textColor};

  h2 {
    margin-bottom: 20px;
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    svg {
      color: ${props => props.theme.primaryColor};
    }
  }
`;

export const ConnectionsGrid = styled.div`
  margin-bottom: 30px;

  .connections {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
`;

export const ConnectionCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.15);
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .info {
    flex: 1;

    h4 {
      margin: 0 0 5px 0;
    }

    span {
      display: block;
      font-size: 0.9em;
      opacity: 0.8;
    }

    p {
      margin: 5px 0 0 0;
      font-size: 0.8em;
      opacity: 0.7;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      padding: 8px 15px;
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      background: ${props => props.theme.primaryColor};
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }

      &:last-child {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

export const EventsSection = styled.div`
  margin-bottom: 30px;

  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .event-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px;

    .event-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;

      svg {
        font-size: 24px;
        color: ${props => props.theme.primaryColor};
      }

      h4 {
        margin: 0;
      }

      span {
        font-size: 0.9em;
        opacity: 0.8;
      }
    }

    p {
      margin: 0 0 15px 0;
      font-size: 0.9em;
      opacity: 0.8;
    }

    .event-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 0.8em;
        opacity: 0.7;
      }

      button {
        padding: 8px 15px;
        border: none;
        border-radius: ${props => props.theme.borderRadius};
        background: ${props => props.theme.primaryColor};
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: translateY(-2px);
        }
      }
    }
  }
`;

export const GroupsPanel = styled.div`
  margin-bottom: 30px;

  .groups-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .group-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    overflow: hidden;

    img {
      width: 100%;
      height: 120px;
      object-fit: cover;
    }

    .group-info {
      padding: 15px;

      h4 {
        margin: 0 0 10px 0;
      }

      p {
        margin: 0 0 10px 0;
        font-size: 0.9em;
        opacity: 0.8;
      }

      .group-stats {
        display: flex;
        justify-content: space-between;
        font-size: 0.8em;
        opacity: 0.7;
      }
    }

    button {
      width: 100%;
      padding: 12px;
      border: none;
      background: ${props => props.theme.primaryColor};
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: ${props => props.theme.secondaryColor};
      }
    }
  }
`;

export const MessagesPanel = styled.div`
  margin-bottom: 30px;

  .messages-list {
    display: grid;
    gap: 15px;
  }

  .message-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 15px;
    display: flex;
    gap: 15px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .message-content {
      flex: 1;

      .message-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;

        h4 {
          margin: 0;
        }

        span {
          font-size: 0.8em;
          opacity: 0.7;
        }
      }

      p {
        margin: 0;
        font-size: 0.9em;
        opacity: 0.8;
      }
    }
  }
`;

export const RecommendationsGrid = styled.div`
  .recommendations {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .recommendation-card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 20px;

    .recommender {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 15px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      h4 {
        margin: 0;
      }

      span {
        font-size: 0.9em;
        opacity: 0.8;
      }
    }

    p {
      margin: 0 0 15px 0;
      font-size: 0.9em;
      opacity: 0.8;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;

      .skill-tag {
        padding: 4px 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        font-size: 0.8em;
      }
    }

    button {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      background: ${props => props.theme.primaryColor};
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }
  }
`;
