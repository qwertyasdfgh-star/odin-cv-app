import React from 'react';
import '../styles/LanguageEntry.css';

function LanguageEntry({ entry, onUpdate, onDelete, placeholders }) {
  const proficiencyLevels = [
    'Native',
    'Fluent',
    'Advanced',
    'Intermediate',
    'Basic'
  ];

  return (
    <div className="language-entry">
      <input
        type="text"
        value={entry.language}
        onChange={(e) => onUpdate(entry.id, { language: e.target.value })}
        placeholder={placeholders.language}
      />
      <select
        value={entry.proficiency}
        onChange={(e) => onUpdate(entry.id, { proficiency: e.target.value })}
      >
        <option value="">Select Level</option>
        {proficiencyLevels.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
      <button className="delete-btn" onClick={() => onDelete(entry.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default LanguageEntry;