import React, { useState } from 'react';
import './FilterModal.css';

const SKILL_OPTIONS = ['Beginner', 'Amateur', 'Intermediate', 'Advanced', 'Professional'];
const TIME_OPTIONS = [
  { label: 'Morning', sub: '12 AM to 9 AM' },
  { label: 'Day', sub: '9 AM to 4 PM' },
  { label: 'Evening', sub: '4 PM to 9 PM' },
  { label: 'Night', sub: '9 PM to 12 AM' },
];
const TABS = ['TIME', 'SKILL', 'DISTANCE'];

export default function FilterModal({ onClose, onApply }) {
  const [activeTab, setActiveTab] = useState('TIME');
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [distanceRange, setDistanceRange] = useState(25);

  const toggleItem = (list, setList, item) => {
    setList(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleClear = () => {
    setSelectedTimes([]);
    setSelectedSkills([]);
    setDistanceRange(25);
  };

  const handleApply = () => {
    onApply && onApply({ selectedTimes, selectedSkills, distanceRange });
    onClose && onClose();
  };

  return (
    <div className="fm-overlay" onClick={onClose}>
      <div className="fm-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="fm-header">
          <h2 className="fm-title">Filter &amp; Sort By</h2>
          <button className="fm-close" onClick={onClose}>✕</button>
        </div>

        <div className="fm-divider" />

        {/* Body */}
        <div className="fm-body">

          {/* Left Sidebar Tabs */}
          <div className="fm-tabs">
            {TABS.map(tab => (
              <button
                key={tab}
                className={`fm-tab${activeTab === tab ? ' fm-tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Panel */}
          <div className="fm-panel">

            {activeTab === 'TIME' && (
              <ul className="fm-option-list">
                {TIME_OPTIONS.map(({ label, sub }) => {
                  const value = `${label} (${sub})`;
                  const checked = selectedTimes.includes(value);
                  return (
                    <li key={label} className="fm-option-item">
                      <span className="fm-option-label">
                        {label}
                        <span className="fm-option-sub"> ({sub})</span>
                      </span>
                      <input
                        type="checkbox"
                        className="fm-checkbox"
                        checked={checked}
                        onChange={() => toggleItem(selectedTimes, setSelectedTimes, value)}
                      />
                    </li>
                  );
                })}
              </ul>
            )}

            {activeTab === 'SKILL' && (
              <ul className="fm-option-list">
                {SKILL_OPTIONS.map(skill => {
                  const checked = selectedSkills.includes(skill);
                  return (
                    <li key={skill} className="fm-option-item">
                      <span className="fm-option-label">{skill}</span>
                      <input
                        type="checkbox"
                        className="fm-checkbox"
                        checked={checked}
                        onChange={() => toggleItem(selectedSkills, setSelectedSkills, skill)}
                      />
                    </li>
                  );
                })}
              </ul>
            )}

            {activeTab === 'DISTANCE' && (
              <div className="fm-distance-panel">
                <p className="fm-distance-label">
                  Within <strong>{distanceRange} km</strong>
                </p>
                <div className="fm-slider-wrapper">
                  <span className="fm-slider-edge">0 km</span>
                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={1}
                    value={distanceRange}
                    className="fm-slider"
                    onChange={e => setDistanceRange(Number(e.target.value))}
                  />
                  <span className="fm-slider-edge">50 km</span>
                </div>
                <div className="fm-slider-ticks">
                  {[0, 10, 20, 30, 40, 50].map(v => (
                    <span key={v} className="fm-tick">{v}</span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        <div className="fm-divider" />

        {/* Footer */}
        <div className="fm-footer">
          <button className="fm-clear-btn" onClick={handleClear}>CLEAR FILTERS</button>
          <button className="fm-apply-btn" onClick={handleApply}>SEE RESULTS</button>
        </div>

      </div>
    </div>
  );
}