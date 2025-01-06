'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import { MainContainer, ContentWrapper } from '../styles/MarketplaceMainStyles';
import MarketplaceHeaderComp from './MarketplaceHeaderComp';
import MarketplaceFilterComp from './MarketplaceFilterComp';
import MarketplaceProductsComp from './MarketplaceProductsComp';
import MarketplaceProductModalComp from './MarketplaceProductModalComp';
import MarketplaceChatComp from './MarketplaceChatComp';
import MarketplaceSearchComp from './MarketplaceSearchComp';
import MarketplaceCategoriesComp from './MarketplaceCategoriesComp';
import MarketplaceReviewsComp from './MarketplaceReviewsComp';
import MarketplaceSellerComp from './MarketplaceSellerComp';
import MarketplaceUserProfileComp from './MarketplaceUserProfileComp';
import MarketplaceNavigationComp from './MarketplaceNavigationComp';
import MarketplaceStatsComp from './MarketplaceStatsComp';
import { useMarketplaceMain } from '../utils/MarketplaceMainUtils';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

function MarketplaceMainComp() {
  const { theme } = useTheme();
  const { 
    isModalOpen, 
    isChatOpen, 
    selectedProduct,
    selectedSeller,
    showReviews,
    showSeller,
    handleCloseModal,
    handleCloseChat
  } = useMarketplaceMain();

  return (
    <>
      <NavMenuComp/>
      <GradientBackground theme={theme}>
      <MainContainer>
        <Container>
          <ContentWrapper>
            <Row>
              <Col lg={3}>
                <MarketplaceUserProfileComp />
                <MarketplaceNavigationComp />
                <MarketplaceStatsComp />
              </Col>
              <Col lg={9}>
                <MarketplaceHeaderComp />
                <Row className="g-4">
                  <Col lg={12}>
                    <MarketplaceSearchComp />
                  </Col>
                  <Col lg={12}>
                    <MarketplaceCategoriesComp />
                  </Col>
                  <Col lg={3}>
                    <MarketplaceFilterComp />
                  </Col>
                  <Col lg={9}>
                    <MarketplaceProductsComp />
                  </Col>
                </Row>
              </Col>
            </Row>
          </ContentWrapper>

          {isModalOpen && (
            <MarketplaceProductModalComp 
              isVisible={isModalOpen}
              onClose={handleCloseModal}
              product={selectedProduct}
            />
          )}

          {isChatOpen && (
            <MarketplaceChatComp 
              isVisible={isChatOpen}
              onClose={handleCloseChat}
              seller={selectedSeller}
            />
          )}

          {showReviews && (
            <MarketplaceReviewsComp 
              product={selectedProduct}
            />
          )}

          {showSeller && (
            <MarketplaceSellerComp 
              seller={selectedSeller}
            />
          )}
        </Container>
      </MainContainer>
    </GradientBackground>
    </>
  
  );
}

export default MarketplaceMainComp;
