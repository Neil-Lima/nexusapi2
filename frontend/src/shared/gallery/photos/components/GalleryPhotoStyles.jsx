export const FilterButton = styled.button`
  background: ${props => props.$active ? props.theme.primaryColor : 'transparent'};
  color: white;
  border: 1px solid ${props => props.theme.primaryColor};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primaryColor};
    transform: translateY(-2px);
  }
`;
