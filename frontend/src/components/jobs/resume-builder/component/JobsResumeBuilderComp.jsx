'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEdit, faPlus, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import {
  BuilderContainer,
  BuilderCard,
  ResumePreview,
  EditorSection,
  SectionCard,
  ActionBar,
  TemplateSelector,
  ExportOptions
} from '../styles/JobsResumeBuilderStyles';
import { useResumeBuilder } from '../utils/JobsResumeBuilderUtils';

function JobsResumeBuilderComp() {
  const { theme } = useTheme();
  const {
    resumeData,
    selectedTemplate,
    sections,
    handleSectionUpdate,
    handleAddItem,
    handleRemoveItem,
    handleTemplateChange,
    handleExport
  } = useResumeBuilder();

  return (
    <BuilderContainer theme={theme}>
      <BuilderCard theme={theme}>
        <h2>Construtor de Currículo</h2>

        <TemplateSelector theme={theme}>
          <h3>Escolha um Modelo</h3>
          <div className="templates">
            {['moderno', 'clássico', 'criativo', 'minimalista'].map(template => (
              <div
                key={template}
                className={`template-item ${selectedTemplate === template ? 'active' : ''}`}
                onClick={() => handleTemplateChange(template)}
              >
                <img src={`/templates/${template}.png`} alt={template} />
                <span>{template}</span>
              </div>
            ))}
          </div>
        </TemplateSelector>

        <div className="builder-layout">
          <EditorSection theme={theme}>
            {sections.map(section => (
              <SectionCard key={section.id} theme={theme}>
                <div className="section-header">
                  <h4>{section.title}</h4>
                  <button onClick={() => handleAddItem(section.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                
                {section.items.map(item => (
                  <div key={item.id} className="section-item">
                    <input
                      type="text"
                      value={item.content}
                      onChange={(e) => handleSectionUpdate(section.id, item.id, e.target.value)}
                    />
                    <button onClick={() => handleRemoveItem(section.id, item.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
              </SectionCard>
            ))}
          </EditorSection>

          <ResumePreview theme={theme}>
            <div className="preview-header">
              <h3>Visualização</h3>
              <button>
                <FontAwesomeIcon icon={faEye} />
                Pré-visualizar
              </button>
            </div>
            <div className="preview-content">
              {/* Renderização do currículo baseada no template selecionado */}
            </div>
          </ResumePreview>
        </div>

        <ExportOptions theme={theme}>
          <h3>Opções de Exportação</h3>
          <div className="export-buttons">
            <button onClick={() => handleExport('pdf')}>
              <FontAwesomeIcon icon={faDownload} />
              Exportar PDF
            </button>
            <button onClick={() => handleExport('doc')}>
              <FontAwesomeIcon icon={faDownload} />
              Exportar DOC
            </button>
            <button onClick={() => handleExport('txt')}>
              <FontAwesomeIcon icon={faDownload} />
              Exportar TXT
            </button>
          </div>
        </ExportOptions>

        <ActionBar theme={theme}>
          <button className="save-draft">
            Salvar Rascunho
          </button>
          <button className="preview">
            <FontAwesomeIcon icon={faEye} />
            Visualizar
          </button>
          <button className="edit">
            <FontAwesomeIcon icon={faEdit} />
            Editar
          </button>
        </ActionBar>
      </BuilderCard>
    </BuilderContainer>
  );
}

export default JobsResumeBuilderComp;
