"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faGlobe, faLock } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  CreateContainer,
  CreateForm,
  FormGroup,
  ImageUpload,
  PrivacyOptions,
  PrivacyOption,
  SubmitButton,
} from "../styles/CommunitiesCreateStyles";
import { useCommunitiesCreate } from "../utils/CommunitiesCreateUtils";

export default function CommunitiesCreateComp({ onClose }) {
  const { theme } = useTheme();
  const {
    formData,
    loading,
    error,
    handleInputChange,
    handleImageUpload,
    handlePrivacyChange,
    handleSubmit,
  } = useCommunitiesCreate();

  const onSubmit = async (e) => {
    await handleSubmit(e);
    if (onClose) onClose();
  };

  return (
    <CreateContainer theme={theme}>
      <h2>Criar Nova Comunidade</h2>

      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

      <CreateForm onSubmit={onSubmit}>
        <FormGroup>
          <label>Nome da Comunidade</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Digite o nome da comunidade"
            required
          />
        </FormGroup>

        <FormGroup>
          <label>Descrição</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Descreva sua comunidade"
            required
          />
        </FormGroup>

        <FormGroup theme={theme}>
          <label>Categoria</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="Anime/Mangá">Anime/Mangá</option>
            <option value="Games">Games</option>
            <option value="Música">Música</option>
            <option value="Esportes">Esportes</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Arte">Arte</option>
            <option value="Literatura">Literatura</option>
          </select>
        </FormGroup>

        <ImageUpload theme={theme}>
          <div className="upload-area">
            <FontAwesomeIcon icon={faImage} />
            <span>Upload da Imagem</span>
            <input 
              type="file" 
              onChange={handleImageUpload} 
              accept="image/*" 
            />
          </div>
        </ImageUpload>

        <PrivacyOptions>
          <PrivacyOption
            selected={formData.privacy === "public"}
            onClick={() => handlePrivacyChange("public")}
            theme={theme}
          >
            <FontAwesomeIcon icon={faGlobe} />
            <div>
              <h4>Pública</h4>
              <p>Qualquer pessoa pode participar</p>
            </div>
          </PrivacyOption>

          <PrivacyOption
            selected={formData.privacy === "private"}
            onClick={() => handlePrivacyChange("private")}
            theme={theme}
          >
            <FontAwesomeIcon icon={faLock} />
            <div>
              <h4>Privada</h4>
              <p>Aprovação necessária para participar</p>
            </div>
          </PrivacyOption>
        </PrivacyOptions>

        <SubmitButton 
          type="submit" 
          theme={theme}
          disabled={loading}
        >
          {loading ? 'Criando...' : 'Criar Comunidade'}
        </SubmitButton>
      </CreateForm>
    </CreateContainer>
  );
}
