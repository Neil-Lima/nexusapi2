"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "@/context/theme/ThemeContext";
import { GradientBackground } from "@/components/group/styles/GroupStyles";
import GroupListComp from "@/components/group/GroupListComp";
import GroupModalComp from "@/components/group/GroupModalComp";
import GroupSidebarComp from "@/components/group/GroupSidebarComp";
import { useGroupForm } from "@/components/group/utils/GroupUtils";
import NavMenuComp from "@/shared/navbar/components/NavMenuComp";
import ProfileCardComp from "@/shared/profile/components/card/components/ProfileCardComp";
import ProfileStatsCardComp from "@/shared/profile/components/ProfileStatsCardComp";
import MenuListComp from "@/shared/profile/components/MenuListComp";

export default function GroupPage() {
  const { theme } = useTheme();
  const groupForm = useGroupForm();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>    
       <NavMenuComp />
      <GradientBackground theme={theme}>     
        <Container>
          <Row>
            <Col lg={3}>
             <ProfileCardComp/>
             <ProfileStatsCardComp/>
             <MenuListComp/>
            </Col>
            <Col lg={9}>
              <GroupListComp
                showModal={groupForm.showModal}
                handleModalShow={groupForm.handleModalShow}
                searchTerm={groupForm.searchTerm}
                setSearchTerm={groupForm.setSearchTerm}
                filteredGroups={groupForm.filteredGroups}
              />
            </Col>
          </Row>
          <GroupModalComp
            showModal={groupForm.showModal}
            handleModalClose={groupForm.handleModalClose}
            handleCreateGroup={groupForm.handleCreateGroup}
            handleInputChange={groupForm.handleInputChange}
            handleImageUpload={groupForm.handleImageUpload}
            newGroup={groupForm.newGroup}
          />
        </Container>
      </GradientBackground>
    </>
  );
}
