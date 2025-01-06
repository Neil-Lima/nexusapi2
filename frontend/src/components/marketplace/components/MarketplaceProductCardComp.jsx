"use client";
import React from "react";
import { Card, Badge, Carousel  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  ProductCard,
  ImageContainer,
  ProductInfo,
  PriceTag,
  SellerInfo,
  ActionButtons,
  ActionButton,
} from "../styles/MarketplaceProductCardStyles";
import { useMarketplaceProductCard } from "../utils/MarketplaceProductCardUtils";

function MarketplaceProductCardComp({ product }) {
  const { theme } = useTheme();
  const { handleCardClick, handleLike, handleComment, handleShare } =
    useMarketplaceProductCard(product);

  return (
    <ProductCard theme={theme} onClick={handleCardClick}>
      <ImageContainer>
        <Carousel interval={null}>
          {product?.images?.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                src={image}
                alt={`${product?.title || "Product"} - ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </ImageContainer>

      <ProductInfo>
        <h3>{product?.name}</h3>
        <PriceTag theme={theme}>
          <span>R$</span>
          {product?.price?.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </PriceTag>

        <SellerInfo>
          <div>
            <h4>{product?.seller?.name}</h4>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <span>
                {product?.rating} ({product?.reviews})
              </span>
            </div>
          </div>
        </SellerInfo>

        <ActionButtons>
          <ActionButton theme={theme} onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} />
          </ActionButton>
          <ActionButton theme={theme} onClick={handleComment}>
            <FontAwesomeIcon icon={faComment} />
          </ActionButton>
          <ActionButton theme={theme} onClick={handleShare}>
            <FontAwesomeIcon icon={faShare} />
          </ActionButton>
        </ActionButtons>
      </ProductInfo>
    </ProductCard>
  );
}

export default MarketplaceProductCardComp;
