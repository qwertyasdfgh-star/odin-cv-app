import React from 'react';
import '../styles/SkillsEntry.css';

function SkillsEntry({ entry, onUpdate, onDelete, placeholders }) {
  return (
    <div className="skills-entry">
      <input
        type="text"
        value={entry.text}
        onChange={(e) => onUpdate(entry.id, e.target.value)}
        placeholder={placeholders.text}
      />
      <button className="delete-btn" onClick={() => onDelete(entry.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default SkillsEntry;