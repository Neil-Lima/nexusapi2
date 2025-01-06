"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useMarketplacePropertyList = () => {
  const router = useRouter();
  
  const [properties] = useState([
    {
      id: 1,
      title: "Apartamento Moderno",
      city: "Belém",
      address: "Umarizal, Rua dos Pariquis",
      description: "Lindo apartamento com vista para o rio",
      price: "R$ 850.000",
      image: "/images/property1.jpg",
      features: ["3 Quartos", "2 Banheiros", "2 Vagas", "120m²"],
      details: {
        type: "Apartamento",
        condition: "Novo",
        constructionYear: 2023,
        floor: "8º andar",
        condominium: "R$ 800",
        iptu: "R$ 350",
        amenities: [
          "Piscina",
          "Academia",
          "Salão de Festas",
          "Playground",
          "Segurança 24h"
        ],
        description: "Apartamento com acabamento de alto padrão, vista privilegiada para o rio, completa infraestrutura de lazer e segurança."
      }
    },
    {
      id: 2,
      title: "Casa em Condomínio",
      city: "Belém",
      address: "Nazaré, Av. Nazaré",
      description: "Casa espaçosa em condomínio fechado",
      price: "R$ 1.200.000",
      image: "/images/property2.jpg",
      features: ["4 Quartos", "3 Banheiros", "3 Vagas", "220m²"],
      details: {
        type: "Casa",
        condition: "Seminova",
        constructionYear: 2021,
        floor: "Térrea",
        condominium: "R$ 1.200",
        iptu: "R$ 500",
        amenities: [
          "Jardim",
          "Churrasqueira",
          "Área de Lazer",
          "Segurança 24h",
          "Quadra Poliesportiva"
        ],
        description: "Casa ampla em condomínio fechado de alto padrão, com total infraestrutura de lazer e segurança para sua família."
      }
    }
  ]);

  const handleContact = (propertyId, e) => {
    e.stopPropagation();
    console.log("Contacting about property:", propertyId);
  };

  const handleMessage = (propertyId, e) => {
    e.stopPropagation();
    console.log("Opening chat for property:", propertyId);
  };

  const handlePropertyClick = (propertyId) => {
    router.push(`/marketplace/properties/${propertyId}`);
  };

  const getPropertyById = (id) => {
    return properties.find(property => property.id === parseInt(id));
  };

  return {
    properties,
    handleContact,
    handleMessage,
    handlePropertyClick,
    getPropertyById
  };
};
