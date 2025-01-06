'use client';
import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  padding: 20px;
`;

export const CalculatorCard = styled.div`
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

export const FormSection = styled.div`
  margin-bottom: 30px;

  .form-group {
    margin-bottom: 20px;

    label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      
      svg {
        color: ${props => props.theme.primaryColor};
      }
    }

    input, select {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: ${props => props.theme.borderRadius};
      background: rgba(255, 255, 255, 0.1);
      color: ${props => props.theme.textColor};

      &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.15);
      }
    }
  }

  .calculate-btn {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const ResultsSection = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};

  .salary-range {
    text-align: center;

    h3 {
      margin-bottom: 20px;
    }

    .range {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 10px;

      .min, .max {
        font-size: 1.2em;
        font-weight: bold;
      }

      .bar {
        flex: 1;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        position: relative;

        .indicator {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: ${props => props.theme.primaryColor};
        }
      }
    }

    .percentile {
      font-size: 0.9em;
      opacity: 0.8;
    }
  }
`;

export const ComparisonChart = styled.div`
  margin-bottom: 30px;

  .chart {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 200px;
    padding: 20px 0;

    .bar-group {
      flex: 1;
      text-align: center;
      padding: 0 10px;

      .bar {
        background: ${props => props.theme.primaryColor};
        width: 40px;
        margin: 0 auto;
        border-radius: ${props => props.theme.borderRadius};
        transition: height 0.3s ease;
      }

      .label {
        display: block;
        margin-top: 10px;
        font-size: 0.9em;
      }

      .value {
        display: block;
        font-size: 0.8em;
        opacity: 0.8;
      }
    }
  }
`;

export const InsightsPanel = styled.div`
  margin-bottom: 30px;

  .insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    .insight-card {
      background: rgba(255, 255, 255, 0.1);
      border-radius: ${props => props.theme.borderRadius};
      padding: 20px;

      svg {
        color: ${props => props.theme.primaryColor};
        font-size: 24px;
        margin-bottom: 15px;
      }

      h4 {
        margin: 0 0 10px 0;
      }

      p {
        margin: 0;
        font-size: 0.9em;
        opacity: 0.8;
      }
    }
  }
`;

export const BenefitsCalculator = styled.div`
  margin-bottom: 30px;

  .benefits-grid {
    display: grid;
    gap: 15px;
    margin-bottom: 20px;

    .benefit-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: ${props => props.theme.borderRadius};

      label {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;

        input {
          cursor: pointer;
        }
      }

      span {
        font-size: 0.9em;
        opacity: 0.8;
      }
    }
  }

  .total-benefits {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    font-weight: bold;
  }
`;

export const MarketTrends = styled.div`
  .trends-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    .trend-card {
      background: rgba(255, 255, 255, 0.1);
            border-radius: ${props => props.theme.borderRadius};
      padding: 20px;
      display: flex;
      gap: 15px;

      svg {
        color: ${props => props.theme.primaryColor};
        font-size: 24px;
      }

      .trend-info {
        flex: 1;

        h4 {
          margin: 0 0 10px 0;
        }

        p {
          margin: 0 0 10px 0;
          font-size: 0.9em;
          opacity: 0.8;
        }

        .trend-value {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.9em;
          font-weight: bold;

          &.up {
            background: rgba(76, 175, 80, 0.2);
            color: #4caf50;
          }

          &.down {
            background: rgba(244, 67, 54, 0.2);
            color: #f44336;
          }
        }
      }
    }
  }
`;

