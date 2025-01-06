"use client";
import React from "react";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  DocumentsContainer,
  DocumentHeader,
  DocumentGrid,
  DocumentCard,
  StatusBadge,
  UploadSection,
  DocumentPreview,
  ValidationSection
} from "../../styles/property/MarketplacePropertyDocumentsStyles";
import { useMarketplacePropertyDocuments } from "../../utils/property/MarketplacePropertyDocumentsUtils";

function MarketplacePropertyDocumentsComp() {
  const { theme } = useTheme();
  const {
    documents,
    selectedDocument,
    uploadProgress,
    handleDocumentSelect,
    handleFileUpload,
    handleDocumentValidate,
    handleDownload
  } = useMarketplacePropertyDocuments();

  return (
    <DocumentsContainer theme={theme}>
      <DocumentHeader theme={theme}>
        <h2>Documentação do Imóvel</h2>
        <div className="status-overview">
          <span className="status-item">
            <div className="dot validated"></div>
            Validados ({documents.filter(doc => doc.status === 'validated').length})
          </span>
          <span className="status-item">
            <div className="dot pending"></div>
            Pendentes ({documents.filter(doc => doc.status === 'pending').length})
          </span>
          <span className="status-item">
            <div className="dot rejected"></div>
            Rejeitados ({documents.filter(doc => doc.status === 'rejected').length})
          </span>
        </div>
      </DocumentHeader>

      <DocumentGrid theme={theme}>
        {documents.map((doc) => (
          <DocumentCard 
            key={doc.id}
            onClick={() => handleDocumentSelect(doc.id)}
            theme={theme}
            selected={selectedDocument?.id === doc.id}
          >
            <div className="icon">{doc.icon}</div>
            <div className="info">
              <h4>{doc.name}</h4>
              <p>{doc.description}</p>
              <StatusBadge status={doc.status} theme={theme}>
                {doc.status === 'validated' && 'Validado'}
                {doc.status === 'pending' && 'Pendente'}
                {doc.status === 'rejected' && 'Rejeitado'}
              </StatusBadge>
            </div>
            {doc.file && (
              <div className="actions">
                <button onClick={() => handleDownload(doc.id)} theme={theme}>
                  Baixar
                </button>
              </div>
            )}
          </DocumentCard>
        ))}
      </DocumentGrid>

      {selectedDocument && (
        <>
          <UploadSection theme={theme}>
            <h3>Upload de Documento</h3>
            <div className="upload-area">
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.jpg,.png"
              />
              <p>Arraste arquivos ou clique para selecionar</p>
              {uploadProgress > 0 && (
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </UploadSection>

          <DocumentPreview theme={theme}>
            <h3>Visualização</h3>
            {selectedDocument.file ? (
              <div className="preview-content">
                <img 
                  src={selectedDocument.preview} 
                  alt={selectedDocument.name}
                />
              </div>
            ) : (
              <div className="no-preview">
                Nenhum arquivo enviado
              </div>
            )}
          </DocumentPreview>

          <ValidationSection theme={theme}>
            <h3>Validação</h3>
            <div className="validation-status">
              <div className="status-info">
                <h4>Status Atual</h4>
                <StatusBadge status={selectedDocument.status} theme={theme}>
                  {selectedDocument.status === 'validated' && 'Validado'}
                  {selectedDocument.status === 'pending' && 'Pendente'}
                  {selectedDocument.status === 'rejected' && 'Rejeitado'}
                </StatusBadge>
              </div>
              {selectedDocument.feedback && (
                <div className="feedback">
                  <h4>Feedback</h4>
                  <p>{selectedDocument.feedback}</p>
                </div>
              )}
              <button 
                onClick={() => handleDocumentValidate(selectedDocument.id)}
                className="validate-btn"
              >
                Solicitar Validação
              </button>
            </div>
          </ValidationSection>
        </>
      )}
    </DocumentsContainer>
  );
}

export default MarketplacePropertyDocumentsComp;
