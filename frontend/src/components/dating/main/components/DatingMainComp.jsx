"use client";
import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThLarge, faList } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import DatingProfileComp from "../../profile/components/DatingProfileComp";
import DatingPreferencesComp from "../../preferences/components/DatingPreferencesComp";
import DatingMatchCardComp from "../../card/components/DatingMatchCardComp";
import {
  MainContainer,
  SearchContainer,
  StyledInputGroup,
  ViewToggleContainer,
  ViewToggleButton,
  LocationTitle
} from "../styles/DatingMainStyles";
import DatingStoriesComp from "../../stories/components/DatingStoriesComp";
import { useDatingMain } from "../utils/DatingMainUtils";

export default function DatingMainComp() {
  const { theme } = useTheme();
  const { viewMode, setViewMode, searchLocation } = useDatingMain();

  return (
    <MainContainer>
      <Container fluid>      
        <Row>
          <Col lg={3}>
            <DatingProfileComp />
            <br />
          </Col>
          <Col lg={7}>
            <Row className="g-4">
              <DatingStoriesComp/>
            

              <ViewToggleContainer>
                <LocationTitle>{searchLocation}</LocationTitle>
                <div>
                  <ViewToggleButton 
                    active={viewMode === 'grid'} 
                    onClick={() => setViewMode('grid')}
                    theme={theme}
                  >
                    <FontAwesomeIcon icon={faThLarge} />
                  </ViewToggleButton>
                  <ViewToggleButton 
                    active={viewMode === 'list'} 
                    onClick={() => setViewMode('list')}
                    theme={theme}
                  >
                    <FontAwesomeIcon icon={faList} />
                  </ViewToggleButton>
                </div>
              </ViewToggleContainer>
              
              <DatingMatchCardComp viewMode={viewMode} />
            </Row>
          </Col>

          <Col lg={2}>
            <DatingPreferencesComp />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
}