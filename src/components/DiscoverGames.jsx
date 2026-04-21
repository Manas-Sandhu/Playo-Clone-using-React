import React from 'react';
import './DiscoverGames.css';

const games = [
  {
    id: 1,
    type: 'Doubles · Regular',
    going: '2',
    total: null,
    host: 'Jonathan',
    karma: 218,
    date: 'Tue, 21 Apr 2026, 05:00 PM - 06:00 PM',
    venue: 'Infinite Sports Aren... ~5.95 Kms',
    level: 'Beginner - Professional',
    booked: false,
    avatar1: 'https://picsum.photos/32/32?random=20',
    avatar2: 'https://picsum.photos/32/32?random=21',
  },
  {
    id: 2,
    type: 'Doubles · Regular',
    going: '2',
    total: 7,
    host: 'Mallikarjun',
    karma: 556,
    date: 'Tue, 21 Apr 2026, 06:00 PM - 07:00 PM',
    venue: 'Nada Prabhu Kempegow... ~7.99 Kms',
    level: 'Intermediate - Advance',
    booked: false,
    tag: 'MH',
    avatar1: 'https://picsum.photos/32/32?random=22',
    avatar2: 'https://picsum.photos/32/32?random=23',
  },
  {
    id: 3,
    type: 'Regular',
    going: '2',
    total: null,
    host: 'Vinitha J',
    karma: 121,
    date: 'Tue, 21 Apr 2026, 06:00 PM - 07:00 PM',
    venue: 'Smash O Station (SOS... ~8.03 Kms',
    level: 'Beginner - Professional',
    booked: true,
    avatar1: 'https://picsum.photos/32/32?random=24',
    avatar2: 'https://picsum.photos/32/32?random=25',
  },
  {
    id: 4,
    type: 'Regular',
    going: '1',
    total: 4,
    host: "JEETENDRA'S ELITE ...",
    karma: 1055,
    date: 'Tue, 21 Apr 2026, 06:00 PM - 07:00 PM',
    venue: 'B.A.B Badminton Club ~9.88 Kms',
    level: 'Beginner - Intermediate',
    booked: true,
    price: 'INR 1',
    avatar1: 'https://picsum.photos/32/32?random=26',
    avatar2: null,
  },
];

const DiscoverGames = () => {
  return (
    <section className="discover-games">
      <div className="section-header">
        <h2 className="section-title">Discover Games</h2>
        <button className="see-all-btn">SEE ALL GAMES ›</button>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <div className="game-card-top">
              <span className="game-type">{game.type}</span>
              {game.price && <span className="game-price">💚 {game.price}</span>}
            </div>

            <div className="game-avatars-row">
              <div className="game-avatars">
                <img src={game.avatar1} alt="" className="avatar" />
                {game.avatar2 && <img src={game.avatar2} alt="" className="avatar avatar-overlap" />}
              </div>
              <span className="game-going">
                {game.total ? `${game.going}/${game.total}` : game.going} Going
              </span>
            </div>

            <p className="game-host">{game.host} | <span>{game.karma} Karma</span></p>
            <p className="game-date">📅 {game.date}</p>
            <p className="game-venue">📍 {game.venue}</p>

            <div className="game-footer">
              <div className="game-level-row">
                <span className="game-level">🔑 {game.level}</span>
                {game.tag && <span className="game-tag">{game.tag}</span>}
              </div>
              {game.booked && <span className="booked-badge">BOOKED</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn">‹</button>
        <button className="carousel-btn">›</button>
      </div>
    </section>
  );
};

export default DiscoverGames;