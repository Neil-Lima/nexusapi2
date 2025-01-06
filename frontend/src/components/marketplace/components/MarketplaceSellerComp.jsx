'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faStar, 
    faCheck, 
    faClock, 
    faShieldAlt,
    faStore,
    faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import {
    SellerContainer,
    SellerHeader,
    SellerInfo,
    SellerStats,
    StatItem,
    ProductGrid,
    ProductCard,
    VerifiedBadge,
    ContactButton
} from '../styles/MarketplaceSellerStyles';
import { useMarketplaceSeller } from '../utils/MarketplaceSellerUtils';

function MarketplaceSellerComp() {
    const { theme } = useTheme();
    const {
        seller,
        sellerProducts,
        handleContactSeller,
        handleFollowSeller,
        handleViewProduct
    } = useMarketplaceSeller();

    return (
        <SellerContainer theme={theme}>
            <SellerHeader>
                <img src={seller.avatar} alt={seller.name} />
                <SellerInfo>
                    <div className="name-wrapper">
                        <h2>{seller.name}</h2>
                        {seller.verified && (
                            <VerifiedBadge theme={theme}>
                                <FontAwesomeIcon icon={faCheck} />
                                Verificado
                            </VerifiedBadge>
                        )}
                    </div>
                    <div className="rating">
                        {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon 
                                key={index}
                                icon={faStar}
                                color={index < seller.rating ? '#ffc107' : '#e4e5e9'}
                            />
                        ))}
                        <span>({seller.reviews} avaliações)</span>
                    </div>
                    <p>{seller.description}</p>
                    <div className="actions">
                        <ContactButton primary onClick={handleContactSeller} theme={theme}>
                            Contatar Vendedor
                        </ContactButton>
                        <ContactButton onClick={handleFollowSeller} theme={theme}>
                            {seller.isFollowing ? 'Seguindo' : 'Seguir'}
                        </ContactButton>
                    </div>
                </SellerInfo>
            </SellerHeader>

            <SellerStats>
                {[
                    { icon: faStore, label: 'Produtos', value: seller.totalProducts },
                    { icon: faChartLine, label: 'Vendas', value: seller.totalSales },
                    { icon: faClock, label: 'Tempo de Resposta', value: seller.responseTime },
                    { icon: faShieldAlt, label: 'Taxa de Satisfação', value: `${seller.satisfactionRate}%` }
                ].map((stat, index) => (
                    <StatItem key={index} theme={theme}>
                        <FontAwesomeIcon icon={stat.icon} />
                        <div>
                            <span className="label">{stat.label}</span>
                            <span className="value">{stat.value}</span>
                        </div>
                    </StatItem>
                ))}
            </SellerStats>

            <h3>Produtos do Vendedor</h3>
            <ProductGrid>
                {sellerProducts.map((product) => (
                    <ProductCard 
                        key={product.id}
                        onClick={() => handleViewProduct(product.id)}
                        theme={theme}
                    >
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <h4>{product.name}</h4>
                            <span className="price">R$ {product.price}</span>
                        </div>
                    </ProductCard>
                ))}
            </ProductGrid>
        </SellerContainer>
    );
}

export default MarketplaceSellerComp;
