'use client';
import { useState } from 'react';

export const useEventsStats = () => {
  const [stats] = useState({
    totalAttendees: 1234,
    attendeesTrend: 12,
    totalEvents: 48,
    eventsTrend: 8,
    totalInterested: 3456,
    interestedTrend: 15,
    totalShares: 789,
    sharesTrend: -3
  });

  return {
    stats
  };
};
