import React from "react";
import "./Card.css";

const Card = ({
  gameType,        // e.g. "Mixed Doubles"
  format,          // e.g. "Regular"
  price,           // e.g. "INR 149" (optional)
  avatars,         // array of image URLs for going players
  goingCount,      // e.g. "6" or "1/7"
  hostName,        // e.g. "Shrishti"
  karma,           // e.g. 122
  date,            // e.g. "Wed, 22 Apr 2026, 07:30 PM - 08:30 PM"
  venue,           // e.g. "Machaxi Active Sport..."
  distance,        // e.g. "~1.00 Kms"
  skillLevel,      // e.g. "Beginner - Professional"
  isBooked,        // boolean
  onClick,         // click handler
}) => {
  return (
    <div className="play-card" onClick={onClick}>
      {/* Top Row: game type, format, optional price */}
      <div className="play-card__top">
        <div className="play-card__tags">
          {gameType && <span className="play-card__game-type">{gameType}</span>}
          {gameType && format && <span className="play-card__dot">·</span>}
          {format && <span className="play-card__format">{format}</span>}
        </div>
        {price && <span className="play-card__price">💰 {price}</span>}
      </div>

      {/* Going Row */}
      <div className="play-card__going-row">
        <div className="play-card__avatars">
          {avatars && avatars.slice(0, 3).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`player-${i}`}
              className="play-card__avatar"
              style={{ zIndex: avatars.length - i }}
            />
          ))}
        </div>
        <span className="play-card__going-count">{goingCount} Going</span>
      </div>

      {/* Host */}
      <p className="play-card__host">
        {hostName} | <span className="play-card__karma">{karma} Karma</span>
      </p>

      {/* Date */}
      <p className="play-card__date">
        <span className="play-card__icon">📅</span> {date}
      </p>

      {/* Venue */}
      <p className="play-card__venue">
        <span className="play-card__icon">📍</span>
        {venue} &nbsp;<span className="play-card__distance">{distance}</span>
      </p>

      {/* Bottom Row: skill level + booked badge */}
      <div className="play-card__bottom">
        <span className="play-card__skill">
          <span className="play-card__skill-icon">🎯</span> {skillLevel}
        </span>
        {isBooked && <span className="play-card__booked">BOOKED</span>}
      </div>
    </div>
  );
};

export default Card;