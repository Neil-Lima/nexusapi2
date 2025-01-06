'use client';
import { 
  faHome, 
  faMapMarker, 
  faCalendarWeek, 
  faCircle, 
  faUsers, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';

export const useEventsTabs = () => {
  const tabs = [
    { key: 'principal', icon: faHome, label: 'Principal' },
    { key: 'local', icon: faMapMarker, label: 'Local' },
    { key: 'semana', icon: faCalendarWeek, label: 'Essa Semana' },
    { key: 'online', icon: faCircle, label: 'On-line' },
    { key: 'amigos', icon: faUsers, label: 'Amigos' },
    { key: 'seguindo', icon: faHeart, label: 'Seguindo' }
  ];

  return {
    tabs
  };
};
