import React from 'react';
import PracticalEntry from './PracticalEntry';
import '../styles/PracticalSection.css';

function PracticalSection({ entries = [], onAdd, onUpdate, onDelete, placeholders }) {
  return (
    <div className="practical-section">
      <div className="section-header">
        <h2>Work Experience</h2>
        <button className="add-btn" onClick={onAdd}>
          Add Experience
        </button>
      </div>
      <div className="practical-list">
        {entries.map((entry) => (
          <PracticalEntry
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

export default PracticalSection;