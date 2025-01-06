'use client'

import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const StyledResultModal = styled(Modal)`
  .modal-content {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }
`;
