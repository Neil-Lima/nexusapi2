'use client';
import styled from 'styled-components';

export const AnalyzerContainer = styled.div`
  padding: 20px;
`;

export const AnalyzerCard = styled.div`
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
`;

export const SkillsChart = styled.div`
  height: 300px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    font-size: 24px;
    margin-bottom: 10px;
    color: ${props => props.theme.primaryColor};
  }

  h4 {
    margin: 0 0 10px 0;
  }

  .level, .market-demand {
    font-size: 0.9em;
    opacity: 0.8;
  }
`;

export const RecommendationsPanel = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
  }

  .recommendation {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 10px;

    svg {
      color: ${props => props.theme.primaryColor};
    }

    h4 {
      margin: 0 0 5px 0;
    }

    p {
      margin: 0;
      opacity: 0.8;
    }
  }
`;

export const TrendingSkills = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
  }

  .trends {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  .trend-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;

    svg {
      color: ${props => props.theme.primaryColor};
    }

    .growth {
      color: #4CAF50;
      font-weight: bold;
    }
  }
`;

export const ActionBar = styled.div`
  display: flex;
  gap: 15px;

  button {
    flex: 1;
    padding: 15px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;
