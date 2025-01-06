'use client';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const MainContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background: ${props => props.theme.cardBackground};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const HeaderTitle = styled.h1`
  color: ${props => props.theme.textColor};
  margin: 0;
  font-size: 2rem;
`;

export const HeaderActions = styled.div`
  .btn-create {
    background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: ${props => props.theme.borderRadius};
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.theme.boxShadow};
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const SearchInput = styled(Form.Control)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${props => props.theme.textColor};
  padding-right: 40px;
  
  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: ${props => props.theme.primaryColor};
    box-shadow: none;
  }
`;

export const FilterContainer = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const CategoryContainer = styled.div`
  margin-bottom: 20px;
`;

export const CategoryItem = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$active ? props.theme.primaryColor : 'transparent'};
  color: ${props => props.$active ? 'white' : props.theme.textColor};

  &:hover {
    background: ${props => props.$active ? props.theme.primaryColor : 'rgba(255, 255, 255, 0.1)'};
    transform: translateY(-2px);
  }
`;

export const PriceFilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const RangeSlider = styled.input`
  width: 100%;
  margin: 10px 0;
`;

export const PriceInputs = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  input {
    width: 100px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: ${props => props.theme.textColor};
    padding: 5px;
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const ConditionContainer = styled.div`
  margin-bottom: 20px;
`;

export const ConditionItem = styled.div`
  padding: 8px 15px;
  margin-bottom: 5px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.$active ? props.theme.primaryColor : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.$active ? 'white' : props.theme.textColor};

  &:hover {
    background: ${props => props.$active ? props.theme.primaryColor : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
  }
`;

export const LocationContainer = styled.div`
  margin-bottom: 20px;
`;

export const LocationSelect = styled(Form.Select)`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${props => props.theme.textColor};
  
  &:focus {
    background: rgba(255, 255, 255, 0.15);
    border-color: ${props => props.theme.primaryColor};
    box-shadow: none;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const ProductCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 15px;

  h3 {
    margin: 0;
    color: ${props => props.theme.textColor};
    font-size: 1.1rem;
  }

  p {
    color: ${props => props.theme.textMuted};
    font-size: 0.9rem;
    margin: 10px 0;
  }

  .price {
    color: ${props => props.theme.primaryColor};
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SortButton = styled.button`
  background: ${props => props.$active ? props.theme.primaryColor : 'transparent'};
  border: 1px solid ${props => props.theme.primaryColor};
  color: ${props => props.$active ? 'white' : props.theme.primaryColor};
  padding: 8px 15px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${props => props.theme.primaryColor};
    color: white;
    transform: translateY(-2px);
  }

  svg {
    font-size: 14px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  padding: 20px 0;
`;

export const PageButton = styled.button`
  background: ${props => props.$active ? props.theme.primaryColor : 'transparent'};
  border: 1px solid ${props => props.theme.primaryColor};
  color: ${props => props.$active ? 'white' : props.theme.primaryColor};
  padding: 8px 15px;
  border-radius: ${props => props.theme.borderRadius};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: ${props => props.theme.primaryColor};
    color: white;
  }
`;


export const NoResultsContainer = styled.div`
  text-align: center;
  padding: 40px;
  color: ${props => props.theme.textColor};

  h3 {
    margin-bottom: 20px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: ${props => props.theme.primaryColor};
`;

