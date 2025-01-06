'use client';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import SalesHeaderComp from './SalesHeaderComp';
import SalesSearchComp from './SalesSearchComp';
import SalesFilterComp from './SalesFilterComp';
import SalesProductGridComp from './SalesProductGridComp';
import SalesSortingComp from './SalesSortingComp';
import SalesPaginationComp from './SalesPaginationComp';
import { MainContainer } from './styles/SalesStyle';
import { getProducts } from './utils/SalesUtils';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

export default function SalesMainComp() {
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    price: { min: 0, max: 10000 },
    condition: [],
    location: null,
    sort: 'newest'
  });

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts(filters);
      setProducts(data);
    };
    loadProducts();
  }, [filters]);

  return (
    <>
     <NavMenuComp />
     <MainContainer theme={theme}>
     
      <Container>
        <SalesHeaderComp />
        <Row>
          <Col lg={3}>
            <SalesSearchComp 
              searchTerm={filters.search}
              onSearch={(term) => setFilters({...filters, search: term})}
            />
            <SalesFilterComp 
              filters={filters}
              onFilterChange={(newFilters) => setFilters({...filters, ...newFilters})}
            />
          </Col>
          <Col lg={9}>
            <SalesSortingComp 
              sortBy={filters.sort}
              onSort={(sort) => setFilters({...filters, sort})}
            />
            <SalesProductGridComp products={products} />
            <SalesPaginationComp />
          </Col>
        </Row>
      </Container>
    </MainContainer>
    </>
  
  );
}
