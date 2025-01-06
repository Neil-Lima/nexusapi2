'use client';
import { useState, useRef } from 'react';

export const useMarketplacePropertyMap = () => {
    const mapRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleToggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    const handleMarkerClick = (propertyId) => {
        console.log('Clicked property:', propertyId);
    };

    return {
        mapRef,
        isFullscreen,
        handleToggleFullscreen,
        handleMarkerClick
    };
};
