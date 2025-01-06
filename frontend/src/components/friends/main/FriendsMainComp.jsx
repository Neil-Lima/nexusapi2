"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "@/context/theme/ThemeContext";
import { GradientBackground } from "@/styles/GlobalStyles";

// Componentes do perfil
import ProfileCardComp from "@/shared/profile/components/card/components/ProfileCardComp";
import ProfileStatsCardComp from "@/shared/profile/components/ProfileStatsCardComp";
import MenuListComp from "@/shared/profile/components/MenuListComp";

// Componentes de amigos
import FriendsHeaderComp from "@/components/friends/header/FriendsHeaderComp";
import FriendsSearchComp from "@/components/friends/search/components/FriendsSearchComp";
import FriendsFilterComp from "@/components/friends/filter/components/FriendsFilterComp";
import FriendsListComp from "@/components/friends/list/components/FriendsListComp";
import FriendsStatsComp from "@/components/friends/states/components/FriendsStatsComp";
import NavMenuComp from "@/shared/navbar/components/NavMenuComp";

function FriendsMainComp() {
  const { theme } = useTheme();

  return (
    <>
      <NavMenuComp />
      <GradientBackground theme={theme}>
        <Container>
          <Row>
            <Col lg={3}>
              <ProfileCardComp />
              <ProfileStatsCardComp />
              <MenuListComp />
            </Col>
            <Col lg={9}>
              <FriendsHeaderComp />
              <Row>
                <Col lg={8}>
                  <FriendsSearchComp />                  
                  <FriendsListComp />
                </Col>
                <Col lg={4}>
                  <FriendsStatsComp />
                  <FriendsFilterComp />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </GradientBackground>
    </>
  );
}

export default FriendsMainComp;
