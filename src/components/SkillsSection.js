import React from 'react';
import SkillsEntry from './SkillsEntry';
import '../styles/SkillsSection.css';

function SkillsSection({ entries = [], onAdd, onUpdate, onDelete, placeholders }) {
  const columns = [[], [], []];
  entries.forEach((entry, index) => {
    const columnIndex = index % 3;
    columns[columnIndex].push(entry);
  });

  return (
    <section className="skills-section">
      <div className="section-header">
        <h2>Skills</h2>
        <button className="add-btn" onClick={onAdd}>Add Skill</button>
      </div>
      <div className="skills-container">
        <div className="skills-column">
          {columns[0].map(entry => (
            <SkillsEntry
              key={entry.id}
              entry={entry}
              onUpdate={onUpdate}
              onDelete={onDelete}
              placeholders={placeholders}
            />
          ))}
        </div>
        <div className="skills-column">
          {columns[1].map(entry => (
            <SkillsEntry
              key={entry.id}
              entry={entry}
              onUpdate={onUpdate}
              onDelete={onDelete}
              placeholders={placeholders}
            />
          ))}
        </div>
        <div className="skills-column">
          {columns[2].map(entry => (
            <SkillsEntry
              key={entry.id}
              entry={entry}
              onUpdate={onUpdate}
              onDelete={onDelete}
              placeholders={placeholders}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;