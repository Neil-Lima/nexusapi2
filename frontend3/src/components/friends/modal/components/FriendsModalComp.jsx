"use client";
import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  StyledModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalHeaderIcon,
  ModalHeaderText,
  ModalBody,
  ModalBodyText,
  ModalBodyWarning,
  ModalActions,
  ConfirmButton,
  CancelButton,
} from "../styles/FriendsModalStyles";

function FriendsModalComp({ showModal, selectedFriend, onClose, onConfirm }) {
  const { theme } = useTheme();

  return (
    <StyledModal
      show={showModal}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={false}
    >
      <ModalOverlay theme={theme}>
        <ModalContent theme={theme}>
          <ModalHeader>
            <ModalHeaderIcon>
              <FontAwesomeIcon icon={faUserTimes} />
            </ModalHeaderIcon>
            <ModalHeaderText theme={theme}>Desfazer Amizade</ModalHeaderText>
          </ModalHeader>

          <ModalBody>
            <ModalBodyText>
              Tem certeza que deseja desfazer a amizade com{" "}
              {selectedFriend?.name}?
            </ModalBodyText>
            <ModalBodyWarning>
              Esta ação não poderá ser desfeita.
            </ModalBodyWarning>
          </ModalBody>

          <ModalActions>
            <CancelButton onClick={onClose} theme={theme}>
              Cancelar
            </CancelButton>
            <ConfirmButton onClick={onConfirm} theme={theme}>
              Confirmar
            </ConfirmButton>
          </ModalActions>
        </ModalContent>
      </ModalOverlay>
    </StyledModal>
  );
}

export default FriendsModalComp;
