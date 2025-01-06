'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { InfoCard, SkillTag, TimelineItem } from './styles/ProfileStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobe, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const ProfileAboutComp = ({ profile }) => {
  const { theme } = useTheme();

  return (
    <>
      <InfoCard theme={theme}>
        <h3>Basic Information</h3>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {profile.info.location}
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faGlobe} /> {profile.info.website}
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faBriefcase} /> {profile.info.occupation}
        </div>
      </InfoCard>

      <InfoCard theme={theme}>
        <h3>Skills</h3>
        {profile.skills.map((skill, index) => (
          <SkillTag key={index} theme={theme}>
            {skill}
          </SkillTag>
        ))}
      </InfoCard>

      <InfoCard theme={theme}>
        <h3>Experience</h3>
        {profile.experience.map((exp) => (
          <TimelineItem key={exp.id} theme={theme}>
            <div className="timeline-date">{exp.years}</div>
            <div className="timeline-title">{exp.position}</div>
            <div className="timeline-subtitle">{exp.company}</div>
            <div className="timeline-description">{exp.description}</div>
          </TimelineItem>
        ))}
      </InfoCard>

      <InfoCard theme={theme}>
        <h3>Education</h3>
        {profile.education.map((edu) => (
          <TimelineItem key={edu.id} theme={theme}>
            <div className="timeline-date">{edu.years}</div>
            <div className="timeline-title">{edu.degree}</div>
            <div className="timeline-subtitle">{edu.school}</div>
            <div className="timeline-description">{edu.description}</div>
          </TimelineItem>
        ))}
      </InfoCard>
    </>
  );
};

export default ProfileAboutComp;
