import React from 'react';
import ReferenceEntry from './ReferenceEntry';
import '../styles/ReferencesSection.css';

function ReferencesSection({ entries, onAdd, onUpdate, onDelete, placeholders }) {
  return (
    <div className="references-section">
      <div className="section-header">
        <h2>References</h2>
        <button className="add-btn" onClick={onAdd}>
          Add Reference
        </button>
      </div>
      <div className="references-list">
        {entries.map((entry) => (
          <ReferenceEntry
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

export default ReferencesSection;