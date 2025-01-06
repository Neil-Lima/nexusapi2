'use client';
import { useState, useEffect } from 'react';

export const useMarketplacePropertyDocuments = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Escritura',
      description: 'Escritura do imóvel registrada',
      status: 'validated',
      icon: '📄',
      file: null,
      preview: null,
      feedback: 'Documento validado com sucesso'
    },
    {
      id: 2,
      name: 'IPTU',
      description: 'Comprovante de pagamento do IPTU',
      status: 'pending',
      icon: '💰',
      file: null,
      preview: null,
      feedback: null
    },
    {
      id: 3,
      name: 'Certidão Negativa',
      description: 'Certidão negativa de débitos',
      status: 'rejected',
      icon: '❌',
      file: null,
      preview: null,
      feedback: 'Documento ilegível, favor reenviar'
    },
    {
      id: 4,
      name: 'Matrícula',
      description: 'Matrícula atualizada do imóvel',
      status: 'pending',
      icon: '📋',
      file: null,
      preview: null,
      feedback: null
    }
  ]);

  const [selectedDocument, setSelectedDocument] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    // Implementar carregamento de documentos da API
  };

  const handleDocumentSelect = (documentId) => {
    const selected = documents.find(doc => doc.id === documentId);
    setSelectedDocument(selected);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !selectedDocument) return;

    // Simular upload com progresso
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Atualizar documento com arquivo
    setDocuments(prevDocs =>
      prevDocs.map(doc =>
        doc.id === selectedDocument.id
          ? {
              ...doc,
              file: file,
              preview: URL.createObjectURL(file),
              status: 'pending',
              feedback: null
            }
          : doc
      )
    );
  };

  const handleDocumentValidate = async (documentId) => {
    // Implementar validação do documento
    setDocuments(prevDocs =>
      prevDocs.map(doc =>
        doc.id === documentId
          ? {
              ...doc,
              status: 'pending',
              feedback: 'Documento enviado para validação'
            }
          : doc
      )
    );
  };

  const handleDownload = (documentId) => {
    const document = documents.find(doc => doc.id === documentId);
    if (document?.file) {
      const url = URL.createObjectURL(document.file);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${document.name}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return {
    documents,
    selectedDocument,
    uploadProgress,
    handleDocumentSelect,
    handleFileUpload,
    handleDocumentValidate,
    handleDownload
  };
};
