import React, { useState, useEffect, useRef } from 'react';
import './SportsDropdown.css';

const SPORTS = [
  { label: 'Cricket',  icon: '🏏' },
  { label: 'Football', icon: '⚽' },
  { label: 'Pool',     icon: '🎱' },
  { label: 'Yoga',     icon: '🧘' },
  { label: 'Workout',  icon: '💪' },
  { label: 'Badminton',icon: '🏸' },
  { label: 'Tennis',   icon: '🎾' },
  { label: 'Basketball',icon:'🏀' },
  { label: 'Swimming', icon: '🏊' },
  { label: 'Cycling',  icon: '🚴' },
  { label: 'Squash',   icon: '🎯' },
  { label: 'Skating',  icon: '⛸️' },
];

export default function SportsDropdown({ selected, onSelect }) {
  const [open, setOpen]       = useState(false);
  const [query, setQuery]     = useState('');
  const ref                   = useRef(null);

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = SPORTS.filter(s =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (label) => {
    onSelect && onSelect(label === selected ? null : label);
    // keep open so user can change selection; close if same clicked
    if (label === selected) setOpen(false);
  };

  return (
    <div className="sd-wrapper" ref={ref}>
      {/* Trigger button — styled to match your existing .filter-btn */}
      <button
        className={`filter-btn sd-trigger${open ? ' sd-trigger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        🏅 {selected || 'Sports'} ▾
      </button>

      {open && (
        <div className="sd-dropdown">
          <div className="sd-search-row">
            <input
              className="sd-search"
              placeholder="Search for 100+ Sport"
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
            />
            <span className="sd-search-icon">🔍</span>
          </div>

          <ul className="sd-list">
            {filtered.map(({ label, icon }) => (
              <li
                key={label}
                className={`sd-item${selected === label ? ' sd-item--selected' : ''}`}
                onClick={() => handleSelect(label)}
              >
                <span className="sd-item-icon">{icon}</span>
                <span className="sd-item-label">{label}</span>
                <span className={`sd-radio${selected === label ? ' sd-radio--checked' : ''}`} />
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="sd-empty">No sports found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}