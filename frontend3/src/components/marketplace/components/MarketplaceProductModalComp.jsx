"use client";
import React from "react";
import { Modal, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShare,
  faComment,
  faStar,
  faShieldAlt,
  faTruck,
  faCreditCard,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  ModalContainer,
  ModalContent,
  ImageGallery,
  ProductDetails,
  PriceSection,
  SellerSection,
  GuaranteeSection,
  QuestionsSection,
  QuestionItem,
  ActionButtons,
  PrimaryButton,
  SecondaryButton,
  IconButton,
  SimilarProducts,
} from "../styles/MarketplaceProductModalStyles";
import { useMarketplaceProductModal } from "../utils/MarketplaceProductModalUtils";

function MarketplaceProductModalComp({ isVisible, onClose, product }) {
  const { theme } = useTheme();
  const {
    handleBuyNow,
    handleChat,
    handleLike,
    handleShare,
    handleAskQuestion,
  } = useMarketplaceProductModal();

  return (
    <Modal
      show={isVisible}
      onHide={onClose}
      size="xl"
      centered
      backdrop="static"
      keyboard={false}
    >
      <ModalContainer theme={theme}>
        <ModalContent theme={theme}>
          <div className="row">
            <div className="col-md-7">
              <ImageGallery>
                <Carousel interval={null}>
                  {product?.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img src={image} alt={`Produto - ${index + 1}`} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </ImageGallery>
            </div>

            <div className="col-md-5">
              <ProductDetails>
                <h2>{product?.title}</h2>
                <p>{product?.description}</p>

                <PriceSection theme={theme}>
                  <h3>R$ {product?.price.toLocaleString("pt-BR")}</h3>
                  <div className="payment-methods">
                    <FontAwesomeIcon icon={faCreditCard} />
                    <span>Em até 12x sem juros</span>
                  </div>
                </PriceSection>

                <SellerSection>
                  <img
                    src={product?.seller.avatar}
                    alt={product?.seller.name}
                  />
                  <div>
                    <h4>{product?.seller.name}</h4>
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          color={
                            index < product?.rating ? "#ffc107" : "#e4e5e9"
                          }
                        />
                      ))}
                      <span>({product?.reviews} avaliações)</span>
                    </div>
                  </div>
                </SellerSection>

                <GuaranteeSection>
                  <div>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Garantia de 12 meses</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faTruck} />
                    <span>Frete Grátis</span>
                  </div>
                </GuaranteeSection>

                <ActionButtons>
                  <PrimaryButton theme={theme} onClick={handleBuyNow}>
                    Comprar Agora
                  </PrimaryButton>
                  <SecondaryButton theme={theme} onClick={handleChat}>
                    <FontAwesomeIcon icon={faComment} /> Chat
                  </SecondaryButton>
                  <IconButton theme={theme} onClick={handleLike}>
                    <FontAwesomeIcon icon={faHeart} />
                  </IconButton>
                  <IconButton theme={theme} onClick={handleShare}>
                    <FontAwesomeIcon icon={faShare} />
                  </IconButton>
                </ActionButtons>

                <QuestionsSection>
                  <h4>
                    <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                    Perguntas e Respostas
                  </h4>
                  {product?.questions.map((question) => (
                    <QuestionItem key={question.id} theme={theme}>
                      <div className="question">
                        <strong>P:</strong> {question.text}
                      </div>
                      {question.answer && (
                        <div className="answer">
                          <strong>R:</strong> {question.answer}
                        </div>
                      )}
                    </QuestionItem>
                  ))}
                  <SecondaryButton theme={theme} onClick={handleAskQuestion}>
                    Fazer uma pergunta
                  </SecondaryButton>
                </QuestionsSection>

                <SimilarProducts>
                  <h4>Produtos Similares</h4>
                  {/* Similar products implementation */}
                </SimilarProducts>
              </ProductDetails>
            </div>
          </div>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default MarketplaceProductModalComp;
