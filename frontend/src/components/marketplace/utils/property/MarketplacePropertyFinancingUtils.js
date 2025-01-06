'use client';
import { useState, useEffect } from 'react';

export const useMarketplacePropertyFinancing = () => {
  const [propertyValue, setPropertyValue] = useState(500000);
  const [simulationData, setSimulationData] = useState({
    monthlyPayment: '3.500,00',
    interestRate: 8.5,
    cet: 9.2
  });

  const [bankOptions, setBankOptions] = useState([
    {
      id: 1,
      name: 'Banco A',
      logo: '/images/banks/bank-a.png',
      rate: 8.5,
      monthlyPayment: '3.500,00',
      minDownPayment: 20,
      maxTerm: 30,
      insurance: '150,00',
      features: ['Aprovação em 24h', 'Taxa Fixa'],
      selected: false
    },
    {
      id: 2,
      name: 'Banco B',
      logo: '/images/banks/bank-b.png',
      rate: 8.7,
      monthlyPayment: '3.600,00',
      minDownPayment: 25,
      maxTerm: 35,
      insurance: '180,00',
      features: ['Portabilidade', 'Carência'],
      selected: false
    },
    {
      id: 3,
      name: 'Banco C',
      logo: '/images/banks/bank-c.png',
      rate: 8.9,
      monthlyPayment: '3.700,00',
      minDownPayment: 15,
      maxTerm: 30,
      insurance: '160,00',
      features: ['Digital', 'Sem taxa de avaliação'],
      selected: false
    }
  ]);

  const [requiredDocuments, setRequiredDocuments] = useState([
    {
      id: 1,
      name: 'RG e CPF',
      description: 'Documentos de identificação',
      icon: '📄'
    },
    {
      id: 2,
      name: 'Comprovante de Renda',
      description: 'Últimos 3 meses',
      icon: '💰'
    },
    {
      id: 3,
      name: 'Comprovante de Residência',
      description: 'Atual (até 90 dias)',
      icon: '🏠'
    },
    {
      id: 4,
      name: 'Imposto de Renda',
      description: 'Última declaração',
      icon: '📊'
    }
  ]);

  useEffect(() => {
    loadFinancingData();
  }, []);

  const loadFinancingData = async () => {
    // Implementar carregamento de dados da API
  };

  const handleValueChange = (e) => {
    setPropertyValue(e.target.value);
  };

  const handleDownPaymentChange = (e) => {
    // Implementar lógica de entrada
  };

  const handleTermChange = (e) => {
    // Implementar lógica de prazo
  };

  const handleBankSelect = (bankId) => {
    setBankOptions(prevBanks =>
      prevBanks.map(bank => ({
        ...bank,
        selected: bank.id === bankId
      }))
    );
  };

  const handleSimulate = (e) => {
    e.preventDefault();
    // Implementar lógica de simulação
  };

  return {
    propertyValue,
    simulationData,
    bankOptions,
    requiredDocuments,
    handleValueChange,
    handleDownPaymentChange,
    handleTermChange,
    handleBankSelect,
    handleSimulate
  };
};
