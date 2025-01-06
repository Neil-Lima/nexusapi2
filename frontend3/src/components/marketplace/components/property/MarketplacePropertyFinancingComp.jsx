"use client";
import React from "react";
import { useTheme } from "@/context/theme/ThemeContext";
import {
  FinancingContainer,
  CalculatorSection,
  ResultsSection,
  BankOptions,
  BankCard,
  ComparisonTable,
  DocumentsList,
  SimulationForm,
  SimulateButton,
  ActionButton,
  InputField,
  SelectField,
  ResultCard,
  BankGrid,
  DocumentCard,
  IconWrapper
} from "../../styles/property/MarketplacePropertyFinancingStyles";
import { useMarketplacePropertyFinancing } from "../../utils/property/MarketplacePropertyFinancingUtils";

function MarketplacePropertyFinancingComp() {
  const { theme } = useTheme();
  const {
    propertyValue,
    simulationData,
    bankOptions,
    requiredDocuments,
    handleValueChange,
    handleDownPaymentChange,
    handleTermChange,
    handleBankSelect,
    handleSimulate
  } = useMarketplacePropertyFinancing();

  return (
    <FinancingContainer theme={theme}>
      <CalculatorSection theme={theme}>
        <h2>Simulador de Financiamento</h2>
        <SimulationForm onSubmit={handleSimulate} theme={theme}>
          <div className="form-group">
            <label>Valor do Imóvel</label>
            <InputField
              type="number"
              value={propertyValue}
              onChange={handleValueChange}
              placeholder="R$ 0,00"
              theme={theme}
            />
          </div>
          <div className="form-group">
            <label>Entrada</label>
            <InputField
              type="number"
              onChange={handleDownPaymentChange}
              placeholder="R$ 0,00"
              theme={theme}
            />
          </div>
          <div className="form-group">
            <label>Prazo (anos)</label>
            <SelectField onChange={handleTermChange} theme={theme}>
              <option value="20">20 anos</option>
              <option value="25">25 anos</option>
              <option value="30">30 anos</option>
            </SelectField>
          </div>
          <SimulateButton 
            type="submit" 
            theme={theme}
            onClick={handleSimulate}
          >
            Simular
          </SimulateButton>
        </SimulationForm>
      </CalculatorSection>

      <ResultsSection theme={theme}>
        <div className="summary">
          <ResultCard theme={theme}>
            <span>Valor da Parcela</span>
            <h3>R$ {simulationData.monthlyPayment}</h3>
          </ResultCard>
          <ResultCard theme={theme}>
            <span>Taxa de Juros</span>
            <h3>{simulationData.interestRate}% a.a.</h3>
          </ResultCard>
          <ResultCard theme={theme}>
            <span>CET</span>
            <h3>{simulationData.cet}% a.a.</h3>
          </ResultCard>
        </div>
      </ResultsSection>

      <BankOptions theme={theme}>
        <h3>Opções de Bancos</h3>
        <BankGrid theme={theme}>
          {bankOptions.map((bank) => (
            <BankCard 
              key={bank.id}
              onClick={() => handleBankSelect(bank.id)}
              theme={theme}
              selected={bank.selected}
            >
              <img src={bank.logo} alt={bank.name} />
              <div className="bank-info">
                <h4>{bank.name}</h4>
                <span className="rate">{bank.rate}% a.a.</span>
                <span className="monthly">R$ {bank.monthlyPayment}/mês</span>
              </div>
              <div className="features">
                {bank.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
            </BankCard>
          ))}
        </BankGrid>
      </BankOptions>

      <ComparisonTable theme={theme}>
        <h3>Comparativo de Condições</h3>
        <table>
          <thead>
            <tr>
              <th>Banco</th>
              <th>Taxa de Juros</th>
              <th>Parcela</th>
              <th>Entrada Mínima</th>
              <th>Prazo Máximo</th>
              <th>Seguro</th>
            </tr>
          </thead>
          <tbody>
            {bankOptions.map((bank) => (
              <tr key={bank.id}>
                <td>{bank.name}</td>
                <td>{bank.rate}%</td>
                <td>R$ {bank.monthlyPayment}</td>
                <td>{bank.minDownPayment}%</td>
                <td>{bank.maxTerm} anos</td>
                <td>R$ {bank.insurance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ComparisonTable>

      <DocumentsList theme={theme}>
        <h3>Documentos Necessários</h3>
        <div className="documents-grid">
          {requiredDocuments.map((doc) => (
            <DocumentCard key={doc.id} theme={theme}>
              <IconWrapper theme={theme}>{doc.icon}</IconWrapper>
              <div className="doc-info">
                <h4>{doc.name}</h4>
                <p>{doc.description}</p>
              </div>
              <ActionButton theme={theme}>
                Baixar Modelo
              </ActionButton>
            </DocumentCard>
          ))}
        </div>
      </DocumentsList>
    </FinancingContainer>
  );
}

export default MarketplacePropertyFinancingComp;
