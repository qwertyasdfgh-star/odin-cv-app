import React from 'react';
import '../styles/Preview.css';

function Preview({ generalInfo, education, practical, skills, interests, languages, references }) {
  return (
    <div className="cv-preview">
      <div className="cv-sidebar">
        <div className="profile-section">
          {generalInfo.image ? (
            <div className="profile-picture">
              <img src={generalInfo.image} alt="Profile" />
            </div>
          ) : (
            <div className="profile-picture">
              <i className="fas fa-user"></i>
            </div>
          )}
          <div className="cv-name">{generalInfo.name}</div>
          <div className="cv-contact">
            {generalInfo.email && (
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                {generalInfo.email}
              </div>
            )}
            {generalInfo.phone && (
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                {generalInfo.phone}
              </div>
            )}
            {generalInfo.location && (
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                {generalInfo.location}
              </div>
            )}
          </div>
        </div>

        <div className="sidebar-section">
          <h2>Skills</h2>
          {skills.length > 0 ? (
            <ul className="skills-list">
               {skills.map(skill => (
                <li key={skill.id}>{skill.text}</li>
              ))}
              </ul>
        ) : (
          <div className="empty-section">No skills listed</div>
        )}
      </div>

        <div className="sidebar-section">
          <h2>Interests</h2>
          {interests.length > 0 ? (
            <ul className="interests-list">
              {interests.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          ) : (
            <div className="empty-section">No interests listed</div>
          )}
        </div>

        <div className="sidebar-section">
          <h2>Languages</h2>
          {languages.length > 0 ? (
            <ul className="languages-list">
              {languages.map((item) => (
                <li key={item.id}>
                  <span className="language">{item.language}</span>
                  <span className="proficiency">{item.proficiency}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-section">No languages listed</div>
          )}
        </div>
      </div>

      <div className="cv-main">
        <div className="summary-section">
          <h2>Professional Summary</h2>
          {generalInfo.description ? (
            <div className="summary-text">{generalInfo.description}</div>
          ) : (
            <div className="empty-section">No summary provided</div>
          )}
        </div>

        <div className="main-section">
          <h2>Education</h2>
          {education.length > 0 ? (
            education.map((edu) => (
              <div key={edu.id} className="section-item">
                <div className="item-header">
                  <h3>{edu.school}</h3>
                  <div className="date">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                <h4>{edu.degree}</h4>
                {edu.location && <div className="location">{edu.location}</div>}
              </div>
            ))
          ) : (
            <div className="empty-section">No education listed</div>
          )}
        </div>

        <div className="main-section">
          <h2>References</h2>
          {references.length > 0 ? (
            <div className="references-list">
              {references.map((ref) => (
                <div key={ref.id} className="reference-item">
                  <h3>{ref.name}</h3>
                  <p className="reference-position">{ref.position}</p>
                  <p className="reference-company">{ref.company}</p>
                  <div className="reference-contact">
                    <span>{ref.email}</span>
                    <span>{ref.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-section">No references listed</div>
          )}
        </div>

        <div className="main-section">
          <h2>Work Experience</h2>
          {practical.length > 0 ? (
            practical.map((exp) => (
              <div key={exp.id} className="section-item">
                <div className="item-header">
                  <h3>{exp.company}</h3>
                  <div className="date">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <h4>{exp.position}</h4>
                {exp.responsibilities && (
                  <div className="description">{exp.responsibilities}</div>
                )}
              </div>
            ))
          ) : (
            <div className="empty-section">No work experience listed</div>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default Preview;