'use client'

export const useResultModal = () => {
  const handleResultModalClose = (setShowResultModal) => {
    setShowResultModal(false);
  };

  return { handleResultModalClose };
};
