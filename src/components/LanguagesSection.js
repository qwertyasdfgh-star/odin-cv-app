import React from 'react';
import LanguageEntry from './LanguageEntry';
import '../styles/LanguagesSection.css';

function LanguagesSection({ entries, onAdd, onUpdate, onDelete, placeholders }) {
  return (
    <div className="languages-section">
      <div className="section-header">
        <h2>Languages</h2>
        <button className="add-btn" onClick={onAdd}>
          Add Language
        </button>
      </div>
      <div className="languages-list">
        {entries.map((entry) => (
          <LanguageEntry
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

export default LanguagesSection;