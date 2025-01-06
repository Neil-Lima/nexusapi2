'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useLoginMain = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultModalContent, setResultModalContent] = useState({ title: '', message: '' });

  const anos = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const dias = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return {
    showModal,
    profileImage,
    coverImage,
    handleModalClose,
    handleModalShow,
    setProfileImage,
    setCoverImage,
    showResultModal,
    setShowResultModal,
    resultModalContent,
    setResultModalContent,
    anos,
    meses,
    dias
  };
};
