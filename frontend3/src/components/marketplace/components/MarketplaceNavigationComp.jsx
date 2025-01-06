'use client';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '@/context/theme/ThemeContext';
import {
    NavigationContainer,
    NavigationItem,
    IconWrapper,
    ItemText
} from '../styles/MarketplaceNavigationStyles';
import { useMarketplaceNavigation } from '../utils/MarketplaceNavigationUtils';

function MarketplaceNavigationComp() {
    const { theme } = useTheme();
    const { navigationItems, handleNavigation } = useMarketplaceNavigation();

    return (
        <NavigationContainer theme={theme}>
            <ListGroup>
                {navigationItems.map((item) => (
                    <NavigationItem 
                        key={item.id} 
                        theme={theme}
                        onClick={() => handleNavigation(item.id)}
                    >
                        <IconWrapper theme={theme}>
                            <FontAwesomeIcon icon={item.icon} />
                        </IconWrapper>
                        <ItemText>{item.label}</ItemText>
                    </NavigationItem>
                ))}
            </ListGroup>
        </NavigationContainer>
    );
}

export default MarketplaceNavigationComp;
