import React from 'react';
import '../styles/EducationEntry.css';

function EducationEntry({ entry, onUpdate, onDelete, placeholders }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="education-entry">
      <button className="delete-btn" onClick={() => onDelete(entry.id)}>
        <i className="fas fa-trash"></i>
      </button>

      <div className="form-row two-columns">
        <div className="form-group">
          <label htmlFor={`school-${entry.id}`}>University Name</label>
          <input
            id={`school-${entry.id}`}
            type="text"
            value={entry.school}
            onChange={(e) => onUpdate(entry.id, { school: e.target.value })}
            placeholder={placeholders.school}
          />
        </div>

        <div className="form-group">
          <label htmlFor={`degree-${entry.id}`}>Degree</label>
          <input
            id={`degree-${entry.id}`}
            type="text"
            value={entry.degree}
            onChange={(e) => onUpdate(entry.id, { degree: e.target.value })}
            placeholder={placeholders.degree}
          />
        </div>
      </div>

      <div className="form-row two-columns">
        <div className="form-group">
          <label htmlFor={`startDate-${entry.id}`}>Start Year</label>
          <input
            id={`startDate-${entry.id}`}
            type="number"
            min="1900"
            max={currentYear}
            value={entry.startDate}
            onChange={(e) => onUpdate(entry.id, { startDate: e.target.value })}
            placeholder="YYYY"
          />
        </div>

        <div className="form-group">
          <label htmlFor={`endDate-${entry.id}`}>End Year</label>
          <input
            id={`endDate-${entry.id}`}
            type="number"
            min="1900"
            max={currentYear + 10}
            value={entry.endDate}
            onChange={(e) => onUpdate(entry.id, { endDate: e.target.value })}
            placeholder="YYYY"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor={`location-${entry.id}`}>Location</label>
          <input
            id={`location-${entry.id}`}
            type="text"
            value={entry.location}
            onChange={(e) => onUpdate(entry.id, { location: e.target.value })}
            placeholder={placeholders.location}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationEntry;