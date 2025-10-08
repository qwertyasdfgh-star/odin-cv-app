import React from 'react';
import '../styles/ReferenceEntry.css';

function ReferenceEntry({ entry, onUpdate, onDelete, placeholders }) {
  return (
    <div className="reference-entry">
      <button className="delete-btn" onClick={() => onDelete(entry.id)}>
        <i className="fas fa-trash"></i>
      </button>

      <div className="form-row two-columns">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={entry.name}
            onChange={(e) => onUpdate(entry.id, { name: e.target.value })}
            placeholder={placeholders.name}
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            value={entry.position}
            onChange={(e) => onUpdate(entry.id, { position: e.target.value })}
            placeholder={placeholders.position}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Company</label>
        <input
          type="text"
          value={entry.company}
          onChange={(e) => onUpdate(entry.id, { company: e.target.value })}
          placeholder={placeholders.company}
        />
      </div>

      <div className="form-row two-columns">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={entry.email}
            onChange={(e) => onUpdate(entry.id, { email: e.target.value })}
            placeholder={placeholders.email}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={entry.phone}
            onChange={(e) => onUpdate(entry.id, { phone: e.target.value })}
            placeholder={placeholders.phone}
          />
        </div>
      </div>
    </div>
  );
}

export default ReferenceEntry;