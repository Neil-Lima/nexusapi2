export const getUserData = () => {
    return {
      nome: 'Naruto',
      sobrenome: 'Uzumaki',
      bio: 'Ninja de Konoha 🍜',
      fotoPerfil: '/images/profile/naruto.jpg',
      stats: {
        posts: 256,
        followers: '10.2k',
        following: 789
      }
    };
  };
  
  export const formatUserName = (nome, sobrenome) => {
    return `${nome} ${sobrenome}`;
  };
  
  export const mainNav = [
    { icon: faHome, text: 'Feed', color: '#FF0080' },
    { icon: faUser, text: 'Conexões', color: '#7928CA' },
    { icon: faGlobeAmericas, text: 'Ultimas noticias', color: '#4a00e0' },
    { icon: faUsers, text: 'Grupos', color: '#8e2de2' }
  ];
  