'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheckCircle, faClock, faExclamationTriangle, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  TrackerContainer,
  TrackerCard,
  ApplicationsBoard,
  ApplicationColumn,
  ApplicationCard,
  StatusBadge,
  StatsPanel,
  FilterSection
} from '../styles/JobsApplicationTrackerStyles';
import { useApplicationTracker } from '../utils/JobsApplicationTrackerUtils';

function JobsApplicationTrackerComp() {
  const { theme } = useTheme();
  const {
    applications,
    stats,
    filters,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleFilterChange,
    handleSearch
  } = useApplicationTracker();

  return (
    <TrackerContainer theme={theme}>
      <TrackerCard theme={theme}>
        <h2>Acompanhamento de Candidaturas</h2>

        <StatsPanel theme={theme}>
          <div className="stat-item">
            <FontAwesomeIcon icon={faBriefcase} />
            <div>
              <h4>Total de Candidaturas</h4>
              <span>{stats.total}</span>
            </div>
          </div>
          <div className="stat-item">
            <FontAwesomeIcon icon={faCheckCircle} />
            <div>
              <h4>Entrevistas Marcadas</h4>
              <span>{stats.interviews}</span>
            </div>
          </div>
          <div className="stat-item">
            <FontAwesomeIcon icon={faClock} />
            <div>
              <h4>Aguardando Resposta</h4>
              <span>{stats.waiting}</span>
            </div>
          </div>
        </StatsPanel>

        <FilterSection theme={theme}>
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              placeholder="Buscar candidaturas..."
              onChange={handleSearch}
            />
          </div>
          <div className="filters">
            <FontAwesomeIcon icon={faFilter} />
            <select onChange={handleFilterChange}>
              <option value="all">Todas as Empresas</option>
              <option value="tech">Tecnologia</option>
              <option value="finance">Finanças</option>
            </select>
          </div>
        </FilterSection>

        <ApplicationsBoard theme={theme}>
          {['pending', 'interview', 'offer', 'rejected'].map((status) => (
            <ApplicationColumn 
              key={status}
              theme={theme}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, status)}
            >
              <h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>
              {applications
                .filter(app => app.status === status)
                .map(application => (
                  <ApplicationCard
                    key={application.id}
                    theme={theme}
                    draggable
                    onDragStart={(e) => handleDragStart(e, application.id)}
                  >
                    <h4>{application.company}</h4>
                    <p>{application.position}</p>
                    <div className="card-footer">
                      <StatusBadge status={application.status} theme={theme}>
                        {application.status}
                      </StatusBadge>
                      <span className="date">{application.date}</span>
                    </div>
                  </ApplicationCard>
                ))}
            </ApplicationColumn>
          ))}
        </ApplicationsBoard>
      </TrackerCard>
    </TrackerContainer>
  );
}

export default JobsApplicationTrackerComp;
