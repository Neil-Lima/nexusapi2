'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';
import MarketplacePropertyPriceFilterComp from './MarketplacePropertyPriceFilterComp';
import MarketplacePropertyRoomFilterComp from './MarketplacePropertyRoomFilterComp';
import MarketplacePropertySearchComp from './MarketplacePropertySearchComp';
import MarketplacePropertyListComp from './MarketplacePropertyListComp';
import MarketplacePropertySortComp from './MarketplacePropertySortComp';
import MarketplacePropertyTypeFilterComp from './MarketplacePropertyTypeFilterComp';
import MarketplacePropertyAreaFilterComp from './MarketplacePropertyAreaFilterComp';
import MarketplacePropertyOptionsComp from './MarketplacePropertyOptionsComp';
import MarketplaceProperty3DViewerComp from './MarketplaceProperty3DViewerComp';
import MarketplacePropertyBlueprintViewerComp from './MarketplacePropertyBlueprintViewerComp';
import MarketplacePropertyGalleryComp from './MarketplacePropertyGalleryComp';
import MarketplacePropertyFinancingComp from './MarketplacePropertyFinancingComp';
import MarketplacePropertyDocumentsComp from './MarketplacePropertyDocumentsComp';
import MarketplacePropertyNeighborhoodStatsComp from './MarketplacePropertyNeighborhoodStatsComp';
import {
  MainContainer,
  ContentWrapper,
} from '../../styles/property/MarketplacePropertyMainStyles';
import { useMarketplacePropertyMain } from '../../utils/property/MarketplacePropertyMainUtils';
import NavMenuComp from '@/shared/navbar/components/NavMenuComp';

function MarketplacePropertyMainComp() {
  const { theme } = useTheme();
  const { 
    handleSearch, 
    handleFilter,
    activeView,
    setActiveView,
    selectedProperty
  } = useMarketplacePropertyMain();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <Container>
          <Row>
            <Col xxl={3}>
              <ProfileCardComp />
              <MarketplacePropertyPriceFilterComp />
              <MarketplacePropertyRoomFilterComp />
            </Col>
            <Col xxl={6}>
              <MarketplacePropertySearchComp onSearch={handleSearch} />
              <MarketplacePropertySortComp />
              <MarketplacePropertyListComp />
            </Col>
            <Col xxl={3}>
              <MarketplacePropertyTypeFilterComp />
              <MarketplacePropertyAreaFilterComp />
              <MarketplacePropertyOptionsComp />
            </Col>
          </Row>

          {selectedProperty && (
            <Row className="mt-4">
              <Col xs={12}>
                <div className="view-tabs">
                  <button onClick={() => setActiveView('gallery')} className={activeView === 'gallery' ? 'active' : ''}>
                    Galeria
                  </button>
                  <button onClick={() => setActiveView('3d')} className={activeView === '3d' ? 'active' : ''}>
                    Visualização 3D
                  </button>
                  <button onClick={() => setActiveView('blueprint')} className={activeView === 'blueprint' ? 'active' : ''}>
                    Planta
                  </button>
                  <button onClick={() => setActiveView('financing')} className={activeView === 'financing' ? 'active' : ''}>
                    Financiamento
                  </button>
                  <button onClick={() => setActiveView('documents')} className={activeView === 'documents' ? 'active' : ''}>
                    Documentos
                  </button>
                  <button onClick={() => setActiveView('neighborhood')} className={activeView === 'neighborhood' ? 'active' : ''}>
                    Bairro
                  </button>
                </div>

                {activeView === 'gallery' && <MarketplacePropertyGalleryComp property={selectedProperty} />}
                {activeView === '3d' && <MarketplaceProperty3DViewerComp property={selectedProperty} />}
                {activeView === 'blueprint' && <MarketplacePropertyBlueprintViewerComp property={selectedProperty} />}
                {activeView === 'financing' && <MarketplacePropertyFinancingComp property={selectedProperty} />}
                {activeView === 'documents' && <MarketplacePropertyDocumentsComp property={selectedProperty} />}
                {activeView === 'neighborhood' && <MarketplacePropertyNeighborhoodStatsComp property={selectedProperty} />}
              </Col>
            </Row>
          )}
        </Container>
      </GradientBackground>
    </>
  );
}

export default MarketplacePropertyMainComp;
