// MenuListUtils.js
'use client';
import { faHome, faUser, faGlobeAmericas, faUsers, faCalendarAlt, faBell, faCog } from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
  { 
    icon: faHome, 
    text: 'Feed', 
    color: '#1a237e' 
  },
  { 
    icon: faUser, 
    text: 'Conexões', 
    color: '#283593' 
  },
  { 
    icon: faGlobeAmericas, 
    text: 'Ultimas noticias', 
    color: '#0d47a1' 
  },
  { 
    icon: faUsers, 
    text: 'Grupos', 
    color: '#1a237e' 
  },
  {
    icon: faCalendarAlt,
    text: 'Eventos',
    color: '#283593'
  },
  {
    icon: faBell,
    text: 'Notificações',
    color: '#0d47a1'
  },
  {
    icon: faCog,
    text: 'Configurações',
    color: '#1a237e'
  }
];
