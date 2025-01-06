'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCardComp from '@/shared/profile/components/card/components/ProfileCardComp';
import MenuListComp from '@/shared/profile/components/MenuListComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faChartLine, faCalculator, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import JobsInterviewPrepComp from '../../interview-prep/component/JobsInterviewPrepComp';
import JobsSkillAssessmentComp from '../../skill-assessment/component/JobsSkillAssessmentComp';
import JobsSalaryCalculatorComp from '../../salary-calculator/component/JobsSalaryCalculatorComp';
import JobsNetworkingHubComp from '../../networking-hub/component/JobsNetworkingHubComp';
import { MainNav, ContentArea } from '../styles/JobsMainStyles';

function JobsMainComp() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('interview');

  const renderContent = () => {
    switch(activeTab) {
      case 'interview':
        return <JobsInterviewPrepComp />;
      case 'skills':
        return <JobsSkillAssessmentComp />;
      case 'salary':
        return <JobsSalaryCalculatorComp />;
      case 'networking':
        return <JobsNetworkingHubComp />;
      default:
        return <JobsInterviewPrepComp />;
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <ProfileCardComp />
          <MenuListComp />
        </Col>
        <Col lg={9}>
          <MainNav theme={theme}>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'interview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('interview')}
                >
                  <FontAwesomeIcon icon={faGraduationCap} />
                  Preparação para Entrevistas
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  <FontAwesomeIcon icon={faChartLine} />
                  Avaliação de Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'salary' ? 'active' : ''}`}
                  onClick={() => setActiveTab('salary')}
                >
                  <FontAwesomeIcon icon={faCalculator} />
                  Calculadora Salarial
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeTab === 'networking' ? 'active' : ''}`}
                  onClick={() => setActiveTab('networking')}
                >
                  <FontAwesomeIcon icon={faUsers} />
                  Networking Hub
                </a>
              </li>
            </ul>
          </MainNav>
          
          <ContentArea theme={theme}>
            {renderContent()}
          </ContentArea>
        </Col>
      </Row>
    </Container>
  );
}

export default JobsMainComp;
