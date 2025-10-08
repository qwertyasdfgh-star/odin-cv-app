import React from 'react';
import EducationEntry from './EducationEntry';
import '../styles/EducationSection.css';

function EducationSection({ entries, onAdd, onUpdate, onDelete, placeholders }) {
  return (
    <div className="education-section">
      <div className="section-header">
        <h2>Education</h2>
        <button className="add-btn" onClick={onAdd}>
          Add Education
        </button>
      </div>
      <div className="education-list">
        {entries.map((entry) => (
          <EducationEntry
            key={entry.id}
            entry={entry}
            onUpdate={onUpdate}
            onDelete={onDelete}
            placeholders={placeholders}
          />
        ))}
      </div>
    </div>
  );
}

export default EducationSection;