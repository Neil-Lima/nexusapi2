'use client';
import React from 'react';
import { Modal, Container, Form, Row, Col } from 'react-bootstrap';
import { RiUserLine, RiMailLine, RiLockPasswordLine } from 'react-icons/ri';
import { StyledModal, StyledButton, GradientText, StyledFormControl, StyledFormLabel, StyledFormSelect } from '../styles/LoginSignupModalStyles';
import { useTheme } from '@/context/theme/ThemeContext';
import LoginImageUploadComp from '@/components/login/image/LoginImageUpload/components/LoginImageUploadComp';
import LoginResultModalComp from '../../LoginResultModal/components/LoginResultModalComp';
import { useSignupModal } from '../utils/LoginSignupModalUtils';

function LoginSignupModalComp({ 
  showModal, 
  handleModalClose, 
  profileImage,
  coverImage,
  setProfileImage,
  setCoverImage,
  anos,
  meses,
  dias 
}) {
  const { theme } = useTheme();
  const { handleSignupSubmit, showResultModal, setShowResultModal, resultModalContent } = useSignupModal();

  return (
    <>
      <StyledModal show={showModal} onHide={handleModalClose} size="lg" theme={theme}>
        <Modal.Header closeButton>
          <Modal.Title><GradientText theme={theme}>Cadastre-se</GradientText></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Form onSubmit={(e) => handleSignupSubmit(e, profileImage, coverImage)}>
          <LoginImageUploadComp 
                profileImage={profileImage}
                coverImage={coverImage}
                setProfileImage={setProfileImage}
                setCoverImage={setCoverImage}
              />
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <StyledFormLabel theme={theme}>Nome</StyledFormLabel>
                    <div className="input-group">
                      <span className="input-group-text" style={{background: `linear-gradient(${theme.gradientDirection}, ${theme.primaryColor}, ${theme.secondaryColor})`, color: 'white'}}>
                        <RiUserLine />
                      </span>
                      <StyledFormControl type="text" name="nome" placeholder="Seu nome" required theme={theme} />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <StyledFormLabel theme={theme}>Sobrenome</StyledFormLabel>
                    <div className="input-group">
                      <span className="input-group-text" style={{background: `linear-gradient(${theme.gradientDirection}, ${theme.primaryColor}, ${theme.secondaryColor})`, color: 'white'}}>
                        <RiUserLine />
                      </span>
                      <StyledFormControl type="text" name="sobrenome" placeholder="Seu sobrenome" required theme={theme} />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <StyledFormLabel theme={theme}>Email</StyledFormLabel>
                    <div className="input-group">
                      <span className="input-group-text" style={{background: `linear-gradient(${theme.gradientDirection}, ${theme.primaryColor}, ${theme.secondaryColor})`, color: 'white'}}>
                        <RiMailLine />
                      </span>
                      <StyledFormControl type="email" name="email" placeholder="Seu email" required theme={theme} />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <StyledFormLabel theme={theme}>Senha</StyledFormLabel>
                    <div className="input-group">
                      <span className="input-group-text" style={{background: `linear-gradient(${theme.gradientDirection}, ${theme.primaryColor}, ${theme.secondaryColor})`, color: 'white'}}>
                        <RiLockPasswordLine />
                      </span>
                      <StyledFormControl type="password" name="senha" placeholder="Sua senha" required theme={theme} />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <StyledFormLabel theme={theme}>País</StyledFormLabel>
                    <StyledFormControl type="text" name="pais" placeholder="Seu país" required theme={theme} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <StyledFormLabel theme={theme}>Estado</StyledFormLabel>
                    <StyledFormControl type="text" name="estado" placeholder="Seu estado" required theme={theme} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <StyledFormLabel theme={theme}>Cidade</StyledFormLabel>
                    <StyledFormControl type="text" name="cidade" placeholder="Sua cidade" required theme={theme} />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <StyledFormLabel theme={theme}>Data de Nascimento</StyledFormLabel>
                <Row>
                  <Col xs={4}>
                    <StyledFormSelect name="dia" theme={theme}>
                      <option value="">Dia</option>
                      {dias.map(dia => <option key={dia} value={dia}>{dia}</option>)}
                    </StyledFormSelect>
                  </Col>
                  <Col xs={4}>
                    <StyledFormSelect name="mes" theme={theme}>
                      <option value="">Mês</option>
                      {meses.map((mes, index) => <option key={index} value={index + 1}>{mes}</option>)}
                    </StyledFormSelect>
                  </Col>
                  <Col xs={4}>
                    <StyledFormSelect name="ano" theme={theme}>
                      <option value="">Ano</option>
                      {anos.map(ano => <option key={ano} value={ano}>{ano}</option>)}
                    </StyledFormSelect>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="mb-3">
                <StyledFormLabel theme={theme}>Gênero</StyledFormLabel>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Masculino"
                    name="genero"
                    value="masculino"
                    id="genero-masculino"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Feminino"
                    name="genero"
                    value="feminino"
                    id="genero-feminino"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Outro"
                    name="genero"
                    value="outro"
                    id="genero-outro"
                  />
                </div>
              </Form.Group>

              <StyledButton variant="primary" type="submit" theme={theme}>
                Cadastrar
              </StyledButton>
            </Form>
          </Container>
        </Modal.Body>
      </StyledModal>

      <LoginResultModalComp 
        showResultModal={showResultModal}
        setShowResultModal={setShowResultModal}
        resultModalContent={resultModalContent}
      />
    </>
  );
}

export default LoginSignupModalComp;
