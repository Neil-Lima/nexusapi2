'use client';
import { useState } from 'react';

export const useMarketplaceMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleChat = () => setIsChatOpen(!isChatOpen);
  
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    isChatOpen,
    selectedProduct,
    toggleModal,
    toggleChat,
    handleProductSelect
  };
};
