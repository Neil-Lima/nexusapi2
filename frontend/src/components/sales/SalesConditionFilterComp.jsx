'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { ConditionContainer, ConditionItem } from './styles/SalesStyle';
import { conditions } from './utils/SalesUtils';

export default function SalesConditionFilterComp({ selectedConditions, onConditionChange }) {
  const { theme } = useTheme();

  const toggleCondition = (condition) => {
    if (selectedConditions.includes(condition)) {
      onConditionChange(selectedConditions.filter(c => c !== condition));
    } else {
      onConditionChange([...selectedConditions, condition]);
    }
  };

  return (
    <ConditionContainer theme={theme}>
      <h6>Condition</h6>
      {conditions.map(condition => (
        <ConditionItem
          key={condition.value}
          $active={selectedConditions.includes(condition.value)}
          onClick={() => toggleCondition(condition.value)}
          theme={theme}
        >
          {condition.label}
        </ConditionItem>
      ))}
    </ConditionContainer>
  );
}
