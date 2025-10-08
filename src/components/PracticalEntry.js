import React from 'react';
import '../styles/PracticalEntry.css';

function PracticalEntry({ entry, onUpdate, onDelete, placeholders }) {
  // Convert year or "Present" to yyyy-MM format for input
  const formatDateForInput = (dateValue) => {
    if (!dateValue) return '';
    if (dateValue === 'Present') return '';
    // If it's just a year, append -01 for January
    if (dateValue.length === 4) return `${dateValue}-01`;
    return dateValue;
  };

  // Convert yyyy-MM format back to year or "Present"
  const formatDateForState = (inputValue) => {
    if (!inputValue) return 'Present';
    // Extract just the year from yyyy-MM
    return inputValue.split('-')[0];
  };

  return (
    <div className="practical-entry">
      <button className="delete-btn" onClick={() => onDelete(entry.id)}>
        <i className="fas fa-trash"></i>
      </button>

      <div className="form-row two-columns">
        <div className="form-group">
          <label htmlFor={`company-${entry.id}`}>Company Name</label>
          <input
            id={`company-${entry.id}`}
            type="text"
            value={entry.company}
            onChange={(e) => onUpdate(entry.id, { company: e.target.value })}
            placeholder={placeholders.company}
          />
        </div>

        <div className="form-group">
          <label htmlFor={`position-${entry.id}`}>Position</label>
          <input
            id={`position-${entry.id}`}
            type="text"
            value={entry.position}
            onChange={(e) => onUpdate(entry.id, { position: e.target.value })}
            placeholder={placeholders.position}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor={`responsibilities-${entry.id}`}>Main Responsibilities</label>
          <textarea
            id={`responsibilities-${entry.id}`}
            value={entry.responsibilities}
            onChange={(e) => onUpdate(entry.id, { responsibilities: e.target.value })}
            placeholder={placeholders.responsibilities}
          />
        </div>
      </div>

      <div className="form-row two-columns">
        <div className="form-group">
          <label htmlFor={`startDate-${entry.id}`}>Start Date</label>
          <input
            id={`startDate-${entry.id}`}
            type="month"
            value={formatDateForInput(entry.startDate)}
            onChange={(e) => onUpdate(entry.id, { startDate: formatDateForState(e.target.value) })}
          />
        </div>

        <div className="form-group">
          <label htmlFor={`endDate-${entry.id}`}>End Date</label>
          <div className="date-input-group">
            <input
              id={`endDate-${entry.id}`}
              type="month"
              value={formatDateForInput(entry.endDate)}
              onChange={(e) => onUpdate(entry.id, { endDate: formatDateForState(e.target.value) })}
            />
            <label className="present-checkbox">
              <input
                type="checkbox"
                checked={entry.endDate === 'Present'}
                onChange={(e) => onUpdate(entry.id, { endDate: e.target.checked ? 'Present' : '' })}
              />
              Present
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticalEntry;