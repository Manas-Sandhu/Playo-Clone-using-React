import React, { useState, useEffect, useRef } from 'react';
import './DateDropdown.css';

const DAYS   = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

function buildCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();  // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

function sameDay(a, b) {
  return a && b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth()    === b.getMonth()    &&
    a.getDate()     === b.getDate();
}

export default function DateDropdown({ selected, onSelect }) {
  const today = new Date();
  const [open,  setOpen]  = useState(false);
  const [year,  setYear]  = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const handleDay = (day) => {
    if (!day) return;
    const clicked = new Date(year, month, day);
    onSelect && onSelect(sameDay(clicked, selected) ? null : clicked);
  };

  const handleToday = () => {
    onSelect && onSelect(today);
    setYear(today.getFullYear());
    setMonth(today.getMonth());
    setOpen(false);
  };

  const cells = buildCalendar(year, month);

  const label = selected
    ? selected.toLocaleDateString('en-GB', { day:'numeric', month:'short', year:'numeric' })
    : 'Date';

  return (
    <div className="dd-wrapper" ref={ref}>
      <button
        className={`filter-btn dd-trigger${open ? ' dd-trigger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        📅 {label} ▾
      </button>

      {open && (
        <div className="dd-dropdown">
          {/* Month nav */}
          <div className="dd-nav">
            <button className="dd-nav-btn" onClick={prevMonth}>‹</button>
            <span className="dd-month-label">{MONTHS[month]} {year}</span>
            <button className="dd-nav-btn" onClick={nextMonth}>›</button>
          </div>

          {/* Day headers */}
          <div className="dd-grid dd-day-headers">
            {DAYS.map(d => <span key={d} className="dd-day-header">{d}</span>)}
          </div>

          {/* Cells */}
          <div className="dd-grid dd-cells">
            {cells.map((day, i) => {
              if (!day) return <span key={`empty-${i}`} className="dd-cell dd-cell--empty" />;
              const date    = new Date(year, month, day);
              const isToday = sameDay(date, today);
              const isSel   = sameDay(date, selected);
              return (
                <button
                  key={day}
                  className={[
                    'dd-cell',
                    isToday ? 'dd-cell--today' : '',
                    isSel   ? 'dd-cell--selected' : '',
                  ].join(' ')}
                  onClick={() => handleDay(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Today shortcut */}
          <div className="dd-footer">
            <button className="dd-today-btn" onClick={handleToday}>Today</button>
          </div>
        </div>
      )}
    </div>
  );
}