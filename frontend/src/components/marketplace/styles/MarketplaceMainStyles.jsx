import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
  background: ${props => props.theme.cardBackground};
  backdrop-filter: blur(10px);
`;

export const ContentWrapper = styled.div`
  margin-top: 2rem;
`;
