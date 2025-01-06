'use client';

export const categories = {
  electronics: { 
    name: 'Eletrônicos', 
    icon: 'laptop',
    subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Acessórios']
  },
  fashion: { 
    name: 'Moda', 
    icon: 'tshirt',
    subcategories: ['Masculino', 'Feminino', 'Infantil', 'Acessórios']
  },
  home: { 
    name: 'Casa', 
    icon: 'home',
    subcategories: ['Móveis', 'Decoração', 'Eletrodomésticos']
  },
  sports: { 
    name: 'Esportes', 
    icon: 'futbol',
    subcategories: ['Equipamentos', 'Roupas', 'Calçados']
  },
  vehicles: { 
    name: 'Veículos', 
    icon: 'car',
    subcategories: ['Carros', 'Motos', 'Peças', 'Acessórios']
  }
};

export const conditions = [
  { value: 'new', label: 'Novo' },
  { value: 'like_new', label: 'Seminovo' },
  { value: 'good', label: 'Bom' },
  { value: 'fair', label: 'Regular' },
  { value: 'poor', label: 'Precisa de Reparos' }
];

export const locations = [
  { value: 'sp', label: 'São Paulo' },
  { value: 'rj', label: 'Rio de Janeiro' },
  { value: 'mg', label: 'Minas Gerais' },
  { value: 'ba', label: 'Bahia' },
  { value: 'rs', label: 'Rio Grande do Sul' },
  { value: 'pr', label: 'Paraná' },
  { value: 'pe', label: 'Pernambuco' },
  { value: 'ce', label: 'Ceará' }
];

export const sortOptions = [
  { value: 'newest', label: 'Mais Recentes' },
  { value: 'price_asc', label: 'Menor Preço' },
  { value: 'price_desc', label: 'Maior Preço' },
  { value: 'popular', label: 'Mais Populares' },
  { value: 'rating', label: 'Melhor Avaliados' }
];

export const priceRanges = [
  { min: 0, max: 100 },
  { min: 100, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000, max: 5000 },
  { min: 5000, max: 10000 },
  { min: 10000, max: null }
];

export const getProducts = async (filters) => {
  // Simulação de chamada API
  const mockProducts = [
    {
      id: 1,
      title: 'Smartphone XYZ',
      description: 'Último modelo, 128GB, câmera tripla',
      price: 2499.99,
      image: 'https://picsum.photos/300/300?random=1',
      category: 'electronics',
      condition: 'new',
      location: 'sp',
      rating: 4.5,
      reviews: 128,
      seller: {
        id: 1,
        name: 'Tech Store',
        rating: 4.8,
        sales: 1500
      }
    },
    {
      id: 2,
      title: 'Notebook Premium',
      description: 'Intel i7, 16GB RAM, SSD 512GB',
      price: 4999.99,
      image: 'https://picsum.photos/300/300?random=2',
      category: 'electronics',
      condition: 'new',
      location: 'sp',
      rating: 4.7,
      reviews: 89,
      seller: {
        id: 2,
        name: 'Mega Informática',
        rating: 4.6,
        sales: 890
      }
    },
    // Adicione mais produtos mock conforme necessário
  ];

  // Simula filtros
  let filteredProducts = mockProducts;
  
  if (filters) {
    if (filters.category) {
      filteredProducts = filteredProducts.filter(p => p.category === filters.category);
    }
    
    if (filters.price) {
      filteredProducts = filteredProducts.filter(p => 
        p.price >= filters.price.min && p.price <= filters.price.max
      );
    }
    
    if (filters.condition?.length) {
      filteredProducts = filteredProducts.filter(p => 
        filters.condition.includes(p.condition)
      );
    }
    
    if (filters.location) {
      filteredProducts = filteredProducts.filter(p => 
        p.location === filters.location
      );
    }
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Ordenação
    if (filters.sort) {
      switch (filters.sort) {
        case 'price_asc':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price_desc':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
        case 'popular':
          filteredProducts.sort((a, b) => b.reviews - a.reviews);
          break;
        default:
          // newest - já está ordenado por padrão
          break;
      }
    }
  }

  return filteredProducts;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(date));
};
