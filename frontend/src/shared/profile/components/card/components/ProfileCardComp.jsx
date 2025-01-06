"use client";
import React from "react";
import { Card } from "react-bootstrap";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  StyledProfileCard,
  ProfileImage,
  ProfileDescription
} from "../styles/ProfileCardStyles";
import { useProfileData } from "../utils/ProfileCardUtils";

function ProfileCardComp() {
  const { theme } = useTheme();
  const { name, imageUrl, coverUrl, isLoading } = useProfileData();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <StyledProfileCard theme={theme}>
      <img className="cover-image" src={coverUrl} alt="Capa" />
      <Card.Body>
        <img 
          style={{marginTop: -80, width: '55%', border: '6px solid rgb(255,255,255)'}} 
          src={imageUrl}
          alt={name}
        />
        <h4>{name}</h4>
      </Card.Body>
    </StyledProfileCard>
  );
}

export default ProfileCardComp;
