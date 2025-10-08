import React from 'react';
import InterestsEntry from './InterestsEntry';
import '../styles/InterestsSection.css';

function InterestsSection({ entries, onUpdate, onDelete, onAdd, placeholders }) {
  const columns = [[], [], []];
  entries.forEach((entry, index) => {
    const columnIndex = index % 3;
    columns[columnIndex].push(entry);
  });

  return (
    <section className="interests-section">
      <div className="section-header">
        <h2>Interests</h2>
        <button className="add-btn" onClick={onAdd}>Add Interest</button>
      </div>
      <div className="interests-container">
        <div className="interests-column">
          {columns[0].map(entry => (
            <InterestsEntry
              key={entry.id}
              entry={entry}
              onUpdate={onUpdate}
              onDelete={onDelete}
              placeholders={placeholders}
            />
          ))}
        </div>
        <div className="interests-column">
          {columns[1].map(entry => (
            <InterestsEntry
              key={entry.id}
              entry={entry}
              onUpdate={onUpdate}
              onDelete={onDelete}
              placeholders={placeholders}
            />
          ))}
        </div>
        <div className="interests-column">
          {columns[2].map(entry => (
            <InterestsEntry
              key={entry.id}
              entry={entry}
              onUpdate={onDelete}
              onDelete={onDelete}
              placeholders={placeholders}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InterestsSection;