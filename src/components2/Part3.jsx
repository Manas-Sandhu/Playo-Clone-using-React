import React from 'react';
import './Part3.css';

const games = [
  {
    id: 1,
    sport: 'Badminton',
    dateISO: '2026-04-22',
    type: 'Mixed Doubles',
    gameType: 'Regular',
    going: 6,
    host: 'Shrishti',
    karma: 122,
    date: 'Wed, 22 Apr 2026, 07:30 PM - 08:30 PM',
    venue: 'Machaxi Active Sport... ~1.00 Kms',
    level: 'Beginner - Professional',
    price: 'INR 120',
    booked: true,
    avatars: ['https://picsum.photos/32/32?random=1', 'https://picsum.photos/32/32?random=2'],
  },
  {
    id: 2,
    sport: 'Cricket',
    dateISO: '2026-04-24',
    type: 'Mixed Doubles',
    gameType: 'Regular',
    going: 2,
    host: 'Shrishti',
    karma: 122,
    date: 'Fri, 24 Apr 2026, Evening',
    venue: 'Machaxi Active Sport... ~1.00 Kms',
    level: 'Beginner - Professional',
    booked: false,
    avatars: ['https://picsum.photos/32/32?random=3', 'https://picsum.photos/32/32?random=4'],
  },
  {
    id: 3,
    sport: 'Badminton',
    dateISO: '2026-04-26',
    type: 'Mixed Doubles',
    gameType: 'Regular',
    going: 3,
    host: 'Shrishti',
    karma: 122,
    date: 'Sun, 26 Apr 2026, 05:00 PM - 06:00 PM',
    venue: 'Machaxi Active Sport... ~1.00 Kms',
    level: 'Beginner - Professional',
    booked: true,
    avatars: ['https://picsum.photos/32/32?random=5', 'https://picsum.photos/32/32?random=6'],
  },
  {
    id: 4,
    sport: 'Badminton',
    dateISO: '2026-04-26',
    type: null,
    gameType: 'Regular',
    going: 1,
    host: 'Rinshu',
    karma: 85,
    date: 'Sun, 26 Apr 2026, 06:00 PM - 07:00 PM',
    venue: 'Machaxi Active Sport... ~1.00 Kms',
    level: 'Amateur - Intermediate',
    price: 'INR 300',
    booked: false,
    avatars: ['https://picsum.photos/32/32?random=7'],
  },
  {
    id: 5,
    sport: 'Cricket',
    dateISO: '2026-04-21',
    type: null,
    gameType: 'Regular',
    going: 1,
    host: 'Harshith',
    karma: 646,
    date: 'Tue, 21 Apr 2026, 07:00 PM - 08:00 PM',
    venue: 'Basecamp by Push Spo... ~1.41 Kms',
    level: 'Intermediate - Professional',
    price: 'INR 1000',
    booked: true,
    avatars: ['https://picsum.photos/32/32?random=8'],
  },
  {
    id: 6,
    sport: 'Tennis',
    dateISO: '2026-04-24',
    type: 'Doubles',
    gameType: 'Regular',
    going: '1/7',
    host: 'GameTime',
    karma: 444829,
    date: 'Fri, 24 Apr 2026, 06:00 PM - 07:00 PM',
    venue: 'Basecamp by Push Spo... ~1.41 Kms',
    level: 'Beginner - Intermediate',
    booked: true,
    price: 'INR 149',
    avatars: ['https://picsum.photos/32/32?random=9'],
  },
  {
    id: 7,
    sport: 'Football',
    dateISO: '2026-04-21',
    type: '9 A Side',
    gameType: 'Regular',
    going: '1/20',
    host: 'Thomas',
    karma: 126,
    date: 'Tue, 21 Apr 2026, 11:00 PM - 12:30 AM',
    venue: 'South United Footbal... ~2.40 Kms',
    level: 'Amateur - Professional',
    booked: false,
    avatars: ['https://picsum.photos/32/32?random=10'],
  },
  {
    id: 8,
    sport: 'Table tennis',
    dateISO: '2026-04-22',
    type: '7 A Side',
    gameType: 'Regular',
    going: '2/6',
    host: 'TurfX',
    karma: 34062,
    date: 'Wed, 22 Apr 2026, 07:00 AM - 08:00 AM',
    venue: 'South United Footbal... ~2.40 Kms',
    level: 'Beginner - Professional',
    booked: false,
    avatars: ['https://picsum.photos/32/32?random=11', 'https://picsum.photos/32/32?random=12'],
  },
  {
    id: 9,
    sport: 'Football',
    dateISO: '2026-04-23',
    type: '7 A Side',
    gameType: 'Regular',
    going: 2,
    host: 'Varun',
    karma: 1717,
    date: 'Thu, 23 Apr 2026, 08:00 PM - 09:30 PM',
    venue: 'South United Footbal... ~2.40 Kms',
    level: 'Beginner - Professional',
    booked: false,
    avatars: ['https://picsum.photos/32/32?random=13'],
  },
];


function GameCard({ game }) {
  return (
    <div className="game-card">

      <div className="game-card-header">
        <div className="game-tags">
          {game.sport && <span className="game-type-tag">{game.sport}</span>}
          <span className="game-regular-tag">{game.gameType}</span>
        </div>
        {game.price && <span className="game-price">💰 {game.price}</span>}
      </div>

      <div className="game-going-row">
        <div className="game-avatars">
          {game.avatars.map((av, i) => (
            <img key={i} src={av} alt="avatar" className="game-avatar" />
          ))}
        </div>
        <span className="game-going-count">{game.going} Going</span>
      </div>

      <div className="game-host">
        {game.host} | {game.karma} Points
      </div>

      <div className="game-date">📅 {game.date}</div>
      <div className="game-venue">📍 {game.venue}</div>

      <div className="game-card-footer">
        <span className="game-level-badge">🎯 {game.level}</span>
        {game.booked && <span className="booked-badge">BOOKED</span>}
      </div>
    </div>
  );
}





function Part3() {
  return (
    <section className="discover-games">
      <div className="discover-header">
        <div>
          <h2 className="section-title">Games in Bangalore</h2>
        </div>
        <div className="download-cta">
          <span className="download-label">To create a game, download Playo app</span>
          <a href="#" className="store-btn google-play">
            <span className="store-icon">▶</span>
            <div className="store-text">
              <span className="store-sub">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </div>
          </a>
          <a href="#" className="store-btn app-store">
            <span className="store-icon">🍎</span>
            <div className="store-text">
              <span className="store-sub">Download on the</span>
              <span className="store-name">App Store</span>
            </div>
          </a>
        </div>
      </div>


      {/* Filter Bar */}
      <div className="filter-bar">
        <button className="filter-toggle">
          <span>🎮</span> GameTime by Playo
          <span className="toggle-switch"></span>
        </button>
        <button className="filter-btn">⚙️ Filter & Sort By ▾</button>
        <button className="filter-btn">🏅 Sports ▾</button>
        <button className="filter-btn">📅 Date ▾</button>
        <button className="filter-btn">💳 Pay & Join Game</button>
      </div>

      {/* Games Grid */}
      <div className="games-grid">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      
        {/* Load More Button */}
      <div className="load-more-wrapper">
        <button className="load-more-btn">LOAD MORE</button>
      </div>
    </section>
  );
}

export default Part3;