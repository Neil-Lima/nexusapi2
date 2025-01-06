'use client'
import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { RiLoginBoxLine, RiMailLine, RiLockPasswordLine } from 'react-icons/ri';
import { StyledCard, StyledButton, GradientText, StyledFormControl } from '../styles/LoginFormStyles';
import { useTheme } from '@/context/theme/ThemeContext';
import { useLoginForm } from '../utils/LoginFormUtils';
import LoginResultModalComp from '@/components/login/modal/LoginResultModal/components/LoginResultModalComp';

function LoginFormComp({ handleModalShow }) {
  const { theme } = useTheme();
  const { handleLoginSubmit, showResultModal, setShowResultModal, resultModalContent } = useLoginForm();

  return (
    <>
      <StyledCard theme={theme}>
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <RiLoginBoxLine size={50} style={{color: theme.primaryColor}} />
            <h2 className="mt-3 font-weight-bold"><GradientText theme={theme}>Login</GradientText></h2>
          </div>
          <Form className="text-center" onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-4">
              <div className="input-group">
                <span className="input-group-text" style={{background: `linear-gradient(${theme.gradientDirection}, ${theme.primaryColor}, ${theme.secondaryColor})`, color: 'white'}}>
                  <RiMailLine />
                </span>
                <StyledFormControl type="email" name="email" placeholder="Email" className="py-2" theme={theme} />
              </div>
            </Form.Group>
            <Form.Group className="mb-4">
              <div className="input-group">
                <span className="input-group-text" style={{background: `linear-gradient(${theme.gradientDirection}, ${theme.primaryColor}, ${theme.secondaryColor})`, color: 'white'}}>
                  <RiLockPasswordLine />
                </span>
                <StyledFormControl type="password" name="senha" placeholder="Senha" className="py-2" theme={theme} />
              </div>
            </Form.Group>
            <StyledButton type="submit" className="w-100 py-2 mb-3" theme={theme}>
              Entrar
            </StyledButton>
            <p className="mb-0">
              <a href="#" style={{color: theme.highlightColor}}>Esqueceu a senha?</a>
            </p>
          </Form>
        </Card.Body>
        <Card.Footer className="bg-transparent text-center border-0 py-3">
          <StyledButton variant="outline-primary" onClick={handleModalShow} theme={theme}>
            Criar nova conta
          </StyledButton>
        </Card.Footer>
      </StyledCard>

      <LoginResultModalComp 
        showResultModal={showResultModal}
        setShowResultModal={setShowResultModal}
        resultModalContent={resultModalContent}
      />
    </>
  );
}

export default LoginFormComp;
