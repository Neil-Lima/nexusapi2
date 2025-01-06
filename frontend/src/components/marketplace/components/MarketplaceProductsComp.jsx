'use client';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThList, faThLarge, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
    ProductsContainer,
    ProductsHeader,
    ViewToggle,
    SortButton,
    ProductsGrid,
    PaginationContainer
} from '../styles/MarketplaceProductsStyles';
import MarketplaceProductCardComp from './MarketplaceProductCardComp';
import { useMarketplaceProducts } from '../utils/MarketplaceProductsUtils';

function MarketplaceProductsComp() {
    const { theme } = useTheme();
    const {
        products,
        viewMode,
        toggleViewMode,
        sortProducts,
        currentPage,
        totalPages,
        handlePageChange
    } = useMarketplaceProducts();

    return (
        <ProductsContainer theme={theme}>
            <ProductsHeader>
                <div className="d-flex align-items-center gap-3">
                    <ViewToggle 
                        active={viewMode === 'grid'} 
                        onClick={() => toggleViewMode('grid')}
                        theme={theme}
                    >
                        <FontAwesomeIcon icon={faThLarge} />
                    </ViewToggle>
                    <ViewToggle 
                        active={viewMode === 'list'} 
                        onClick={() => toggleViewMode('list')}
                        theme={theme}
                    >
                        <FontAwesomeIcon icon={faThList} />
                    </ViewToggle>
                </div>

                <SortButton theme={theme} onClick={sortProducts}>
                    <FontAwesomeIcon icon={faSortAmountDown} className="me-2" />
                    Ordenar por
                </SortButton>
            </ProductsHeader>

            <ProductsGrid viewMode={viewMode}>
                <Row xs={1} md={2} lg={viewMode === 'grid' ? 3 : 2} className="g-4">
                    {products.map((product) => (
                        <Col key={product.id}>
                            <MarketplaceProductCardComp 
                                product={product}
                                viewMode={viewMode}
                            />
                        </Col>
                    ))}
                </Row>
            </ProductsGrid>

            <PaginationContainer theme={theme}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </PaginationContainer>
        </ProductsContainer>
    );
}

export default MarketplaceProductsComp;
