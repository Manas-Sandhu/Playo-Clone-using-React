import React, { useState, useMemo } from "react";
import "./Part3.css";
import FilterModal from "./Subparts/FilterModal";
import SportsDropdown from "./Subparts/SportsDropdown";
import DateDropdown from "./Subparts/DateDropdown";
import GameDetail from "./Subparts/Gamedetail";

const games = [
  {
    id: 1,
    sport: "Badminton",
    type: "Mixed Doubles",
    gameType: "Regular",
    going: 6,
    host: "Shrishti",
    karma: 122,
    date: "Wed, 22 Apr 2026, 07:30 PM - 08:30 PM",
    rawDate: new Date(2026, 3, 22),
    startHour: 19.5,
    venue: "Machaxi Active Sport... ~1.00 Kms",
    distanceKm: 1.0,
    level: "Beginner - Professional",
    levels: ["Beginner", "Intermediate", "Professional"],
    price: "INR 120",
    booked: true,
    avatars: [
      "https://picsum.photos/32/32?random=1",
      "https://picsum.photos/32/32?random=2",
    ],
  },
  {
    id: 2,
    sport: "Badminton",
    type: "Mixed Doubles",
    gameType: "Regular",
    going: 2,
    host: "Shrishti",
    karma: 122,
    date: "Fri, 24 Apr 2026, 06:00 PM - 07:00 PM",
    rawDate: new Date(2026, 3, 24),
    startHour: 18,
    venue: "Machaxi Active Sport... ~1.00 Kms",
    distanceKm: 1.0,
    level: "Beginner - Professional",
    levels: ["Beginner", "Intermediate", "Professional"],
    booked: false,
    avatars: [
      "https://picsum.photos/32/32?random=3",
      "https://picsum.photos/32/32?random=4",
    ],
  },
  {
    id: 3,
    sport: "Badminton",
    type: "Mixed Doubles",
    gameType: "Regular",
    going: 3,
    host: "Shrishti",
    karma: 122,
    date: "Sun, 26 Apr 2026, 05:00 PM - 06:00 PM",
    rawDate: new Date(2026, 3, 26),
    startHour: 17,
    venue: "Machaxi Active Sport... ~1.00 Kms",
    distanceKm: 1.0,
    level: "Beginner - Professional",
    levels: ["Beginner", "Intermediate", "Professional"],
    booked: true,
    avatars: [
      "https://picsum.photos/32/32?random=5",
      "https://picsum.photos/32/32?random=6",
    ],
  },
  {
    id: 4,
    sport: "Badminton",
    type: null,
    gameType: "Regular",
    going: 1,
    host: "Rinshu",
    karma: 85,
    date: "Sun, 26 Apr 2026, 06:00 PM - 07:00 PM",
    rawDate: new Date(2026, 3, 26),
    startHour: 18,
    venue: "Machaxi Active Sport... ~1.00 Kms",
    distanceKm: 1.0,
    level: "Amateur - Intermediate",
    levels: ["Amateur", "Intermediate"],
    price: "INR 300",
    booked: false,
    avatars: ["https://picsum.photos/32/32?random=7"],
  },
  {
    id: 5,
    sport: "Football",
    type: null,
    gameType: "Regular",
    going: 1,
    host: "Harshith",
    karma: 646,
    date: "Tue, 21 Apr 2026, 07:00 PM - 08:00 PM",
    rawDate: new Date(2026, 3, 21),
    startHour: 19,
    venue: "Basecamp by Push Spo... ~1.41 Kms",
    distanceKm: 1.41,
    level: "Intermediate - Professional",
    levels: ["Intermediate", "Professional"],
    price: "INR 1000",
    booked: true,
    avatars: ["https://picsum.photos/32/32?random=8"],
  },
  {
    id: 6,
    sport: "Football",
    type: "Doubles",
    gameType: "Regular",
    going: "1/7",
    host: "GameTime",
    karma: 444829,
    date: "Fri, 24 Apr 2026, 06:00 PM - 07:00 PM",
    rawDate: new Date(2026, 3, 24),
    startHour: 18,
    venue: "Basecamp by Push Spo... ~1.41 Kms",
    distanceKm: 1.41,
    level: "Beginner - Intermediate",
    levels: ["Beginner", "Intermediate"],
    booked: true,
    price: "INR 149",
    avatars: ["https://picsum.photos/32/32?random=9"],
  },
  {
    id: 7,
    sport: "Football",
    type: "9 A Side",
    gameType: "Regular",
    going: "1/20",
    host: "Thomas",
    karma: 126,
    date: "Tue, 21 Apr 2026, 11:00 PM - 12:30 AM",
    rawDate: new Date(2026, 3, 21),
    startHour: 23,
    venue: "South United Footbal... ~2.40 Kms",
    distanceKm: 2.4,
    level: "Amateur - Professional",
    levels: ["Amateur", "Intermediate", "Professional"],
    booked: false,
    avatars: ["https://picsum.photos/32/32?random=10"],
  },
  {
    id: 8,
    sport: "Football",
    type: "7 A Side",
    gameType: "Regular",
    going: "2/6",
    host: "TurfX",
    karma: 34062,
    date: "Wed, 22 Apr 2026, 07:00 AM - 08:00 AM",
    rawDate: new Date(2026, 3, 22),
    startHour: 7,
    venue: "South United Footbal... ~2.40 Kms",
    distanceKm: 2.4,
    level: "Beginner - Professional",
    levels: ["Beginner", "Intermediate", "Professional"],
    booked: false,
    avatars: [
      "https://picsum.photos/32/32?random=11",
      "https://picsum.photos/32/32?random=12",
    ],
  },
  {
    id: 9,
    sport: "Football",
    type: "7 A Side",
    gameType: "Regular",
    going: 2,
    host: "Varun",
    karma: 1717,
    date: "Thu, 23 Apr 2026, 08:00 PM - 09:30 PM",
    rawDate: new Date(2026, 3, 23),
    startHour: 20,
    venue: "South United Footbal... ~2.40 Kms",
    distanceKm: 2.4,
    level: "Beginner - Professional",
    levels: ["Beginner", "Intermediate", "Professional"],
    booked: false,
    avatars: ["https://picsum.photos/32/32?random=13"],
  },
  {
    id: 10,
    sport: "Cricket",
    type: "T20",
    gameType: "Regular",
    going: "8/22",
    host: "Rohit",
    karma: 980,
    date: "Mon, 27 Apr 2026, 06:00 PM - 09:00 PM",
    rawDate: new Date(2026, 3, 27),
    startHour: 18,
    venue: "Green Field Arena ~3.20 Kms",
    distanceKm: 3.2,
    level: "Intermediate - Professional",
    levels: ["Intermediate", "Professional"],
    price: "INR 500",
    booked: false,
    avatars: ["https://picsum.photos/32/32?random=14"],
  },
  {
    id: 11,
    sport: "Tennis",
    type: "Singles",
    gameType: "Friendly",
    going: 2,
    host: "Ananya",
    karma: 210,
    date: "Tue, 28 Apr 2026, 07:00 AM - 08:00 AM",
    rawDate: new Date(2026, 3, 28),
    startHour: 7,
    venue: "Ace Tennis Court ~0.80 Kms",
    distanceKm: 0.8,
    level: "Beginner - Intermediate",
    levels: ["Beginner", "Intermediate"],
    price: "INR 200",
    booked: true,
    avatars: ["https://picsum.photos/32/32?random=15"],
  },
  {
    id: 12,
    sport: "Basketball",
    type: "5v5",
    gameType: "Regular",
    going: "6/10",
    host: "Kabir",
    karma: 540,
    date: "Wed, 29 Apr 2026, 08:00 PM - 09:30 PM",
    rawDate: new Date(2026, 3, 29),
    startHour: 20,
    venue: "Hoop Arena ~2.10 Kms",
    distanceKm: 2.1,
    level: "Intermediate - Professional",
    levels: ["Intermediate", "Professional"],
    booked: false,
    avatars: ["https://picsum.photos/32/32?random=16"],
  },
  {
    id: 13,
    sport: "Swimming",
    type: null,
    gameType: "Training",
    going: 4,
    host: "Neha",
    karma: 300,
    date: "Thu, 30 Apr 2026, 06:00 AM - 07:00 AM",
    rawDate: new Date(2026, 3, 30),
    startHour: 6,
    venue: "BlueWave Pool ~1.50 Kms",
    distanceKm: 1.5,
    level: "Beginner - Professional",
    levels: ["Beginner", "Intermediate", "Professional"],
    price: "INR 150",
    booked: true,
    avatars: ["https://picsum.photos/32/32?random=17"],
  },
  {
    id: 14,
    sport: "Cycling",
    type: "Group Ride",
    gameType: "Casual",
    going: 5,
    host: "Aman",
    karma: 420,
    date: "Fri, 01 May 2026, 05:30 AM - 07:30 AM",
    rawDate: new Date(2026, 4, 1),
    startHour: 5.5,
    venue: "City Loop Trail ~5.00 Kms",
    distanceKm: 5.0,
    level: "Beginner - Intermediate",
    levels: ["Beginner", "Intermediate"],
    booked: false,
    avatars: ["https://picsum.photos/32/32?random=18"],
  },
  {
    id: 15,
    sport: "Yoga",
    type: null,
    gameType: "Session",
    going: 10,
    host: "Meera",
    karma: 890,
    date: "Sat, 02 May 2026, 07:00 AM - 08:00 AM",
    rawDate: new Date(2026, 4, 2),
    startHour: 7,
    venue: "Zen Studio ~0.60 Kms",
    distanceKm: 0.6,
    level: "Beginner - Professional",
    levels: ["Beginner", "Intermediate", "Professional"],
    price: "INR 100",
    booked: true,
    avatars: ["https://picsum.photos/32/32?random=19"],
  },
  {
    id: 16,
    sport: "Workout",
    type: "HIIT",
    gameType: "Training",
    going: 7,
    host: "Dev",
    karma: 350,
    date: "Sun, 03 May 2026, 06:30 PM - 07:30 PM",
    rawDate: new Date(2026, 4, 3),
    startHour: 18.5,
    venue: "Iron Gym ~1.20 Kms",
    distanceKm: 1.2,
    level: "Intermediate - Professional",
    levels: ["Intermediate", "Professional"],
    booked: false,
    avatars: ["https://picsum.photos/32/32?random=20"],
  },
  {
    id: 17,
    sport: "Squash",
    type: "Singles",
    gameType: "Regular",
    going: 2,
    host: "Rahul",
    karma: 275,
    date: "Mon, 04 May 2026, 08:00 PM - 09:00 PM",
    rawDate: new Date(2026, 4, 4),
    startHour: 20,
    venue: "Elite Squash Club ~2.70 Kms",
    distanceKm: 2.7,
    level: "Amateur - Intermediate",
    levels: ["Amateur", "Intermediate"],
    price: "INR 250",
    booked: true,
    avatars: ["https://picsum.photos/32/32?random=21"],
  },
  {
    id: 18,
    sport: "Badminton",
    type: "Singles",
    gameType: "Practice",
    going: 2,
    host: "Kiran",
    karma: 180,
    date: "Tue, 05 May 2026, 09:00 PM - 10:00 PM",
    rawDate: new Date(2026, 4, 5),
    startHour: 21,
    venue: "Smash Arena ~1.90 Kms",
    distanceKm: 1.9,
    level: "Beginner - Intermediate",
    levels: ["Beginner", "Intermediate"],
    booked: false,
    avatars: ["https://picsum.photos/32/32?random=22"],
  },
  {
    id: 19,
    sport: "Football",
    type: "5 A Side",
    gameType: "Regular",
    going: "3/10",
    host: "Zaid",
    karma: 760,
    date: "Wed, 06 May 2026, 07:00 PM - 08:30 PM",
    rawDate: new Date(2026, 4, 6),
    startHour: 19,
    venue: "Urban Turf ~3.50 Kms",
    distanceKm: 3.5,
    level: "Intermediate - Professional",
    levels: ["Intermediate", "Professional"],
    booked: true,
    avatars: ["https://picsum.photos/32/32?random=23"],
  },
  {
    id: 20,
    sport: "Cricket",
    type: "Box Cricket",
    gameType: "Friendly",
    going: "5/12",
    host: "Sameer",
    karma: 610,
    date: "Thu, 07 May 2026, 06:30 PM - 08:00 PM",
    rawDate: new Date(2026, 4, 7),
    startHour: 18.5,
    venue: "Box Arena ~2.80 Kms",
    distanceKm: 2.8,
    level: "Beginner - Professional",
    levels: ["Beginner", "Intermediate", "Professional"],
    price: "INR 300",
    booked: false,
    avatars: ["https://picsum.photos/32/32?random=24"],
  },
];
const PAGE_SIZE = 6;

// ── Helpers ────────────────────────────────────────────────────────────────

function matchesTime(game, timeSlots) {
  if (timeSlots.length === 0) return true;
  const h = game.startHour;
  return timeSlots.some((slot) => {
    if (slot.includes("Morning")) return h >= 0 && h < 9;
    if (slot.includes("Day")) return h >= 9 && h < 16;
    if (slot.includes("Evening")) return h >= 16 && h < 21;
    if (slot.includes("Night")) return h >= 21 || h < 1;
    return false;
  });
}

function matchesSkill(game, skills) {
  if (skills.length === 0) return true;
  return game.levels.some((lvl) => skills.includes(lvl));
}

function matchesDistance(game, maxKm) {
  return game.distanceKm <= maxKm;
}

function matchesDate(game, date) {
  if (!date) return true;
  const d = game.rawDate;
  return (
    d.getFullYear() === date.getFullYear() &&
    d.getMonth() === date.getMonth() &&
    d.getDate() === date.getDate()
  );
}

function matchesSport(game, sport) {
  if (!sport) return true;
  return game.sport.toLowerCase() === sport.toLowerCase();
}

// ── GameCard ───────────────────────────────────────────────────────────────

function GameCard({ game, onClick }) {
  return (
    <div className="game-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="game-card-header">
        <div className="game-tags">
          {game.type && <span className="game-type-tag">{game.type}</span>}
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

// ── Part3 ──────────────────────────────────────────────────────────────────

function Part3() {
  // ── Filter state ──────────────────────────────────
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [payJoinActive, setPayJoinActive] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [joinedGames, setJoinedGames] = useState(new Set());
  const [joinedActive, setJoinedActive] = useState(false);

  // State coming back from FilterModal
  const [activeSkills, setActiveSkills] = useState([]);
  const [activeTimes, setActiveTimes] = useState([]);
  const [activeDistance, setActiveDistance] = useState(50);

  // ── Handle FilterModal apply ───────────────────────
  const handleApplyFilters = ({
    selectedTimes,
    selectedSkills,
    distanceRange,
  }) => {
    setActiveTimes(selectedTimes);
    setActiveSkills(selectedSkills);
    setActiveDistance(distanceRange);
  };

  // ── Derived: filtered games ────────────────────────
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      if (!matchesSport(game, selectedSport)) return false;
      if (!matchesDate(game, selectedDate)) return false;
      if (!matchesTime(game, activeTimes)) return false;
      if (!matchesSkill(game, activeSkills)) return false;
      if (!matchesDistance(game, activeDistance)) return false;
      // Pay & Join: keep only cards that have a price
      if (payJoinActive && !game.price) return false;
      if (joinedActive && !joinedGames.has(game.id)) return false;
      return true;
    });
  }, [
    selectedSport,
    selectedDate,
    activeTimes,
    activeSkills,
    activeDistance,
    payJoinActive,
    joinedGames,
    joinedActive
  ]);

  // Reset showAll whenever filters change so the grid goes back to 9
  const visibleGames = showAll
    ? filteredGames
    : filteredGames.slice(0, PAGE_SIZE);
  const hasMore = !showAll && filteredGames.length > PAGE_SIZE;

  // ── Active filter count (for badge on button) ─────
  const filterCount =
    activeTimes.length + activeSkills.length + (activeDistance < 50 ? 1 : 0);

  return (
    <section className="discover-games">
      <div className="discover-header">
        <div>
          <h2 className="section-title">Games in Bangalore</h2>
        </div>
        <div className="download-cta">
          <span className="download-label">
            To create a game, download Playo app
          </span>
          <a
            href="https://play.google.com/store/apps/details?id=com.techmash.playo&hl=en_IN"
            target="blank"
            className="store-btn google-play"
          >
            <span className="store-icon">▶️</span>
            <div className="store-text">
              <span className="store-sub">GET IT ON</span>
              <span className="store-name">Google Play</span>
            </div>
          </a>
          <a
            href="https://apps.apple.com/in/app/playo-sports-community-app/id1018786950"
            target="blank"
            className="store-btn app-store"
          >
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
        <button className="filter-btn" onClick={() => setShowFilterModal(true)}>
          ⚙️ Filter & Sort By{filterCount > 0 ? ` (${filterCount})` : ""} ▾
        </button>

        <SportsDropdown selected={selectedSport} onSelect={setSelectedSport} />
        <DateDropdown selected={selectedDate} onSelect={setSelectedDate} />

        {/* Pay & Join toggle */}
        <button
          className={`filter-btn${payJoinActive ? " filter-btn--active" : ""}`}
          onClick={() => {
            setPayJoinActive((prev) => !prev);
            setShowAll(false);
          }}
        >
          💳 Pay &amp; Join Game{payJoinActive ? " ✕" : ""}
        </button>
        <button
          className={`filter-btn${joinedActive ? " filter-btn--active" : ""}`}
          onClick={() => {
            setJoinedActive((prev) => !prev);
            setShowAll(false);
          }}
        >
          ✅ Joined{joinedActive ? " ✕" : ""}
        </button>
      </div>

      {/* Games Grid */}
      {visibleGames.length > 0 ? (
        <div className="games-grid">
          {visibleGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onClick={() => setSelectedGame(game)}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>😕 No games match your filters.</p>
          <button
            className="load-more-btn"
            onClick={() => {
              setSelectedSport(null);
              setSelectedDate(null);
              setActiveTimes([]);
              setActiveSkills([]);
              setActiveDistance(50);
              setPayJoinActive(false);
              setShowAll(false);
              setJoinedActive(false);
            }}
          >
            CLEAR ALL FILTERS
          </button>
        </div>
      )}

      {/* Load More / Show Less */}
      {visibleGames.length > 0 && (
        <div className="load-more-wrapper">
          {hasMore ? (
            <button className="load-more-btn" onClick={() => setShowAll(true)}>
              LOAD MORE ({filteredGames.length - PAGE_SIZE} more)
            </button>
          ) : showAll && filteredGames.length > PAGE_SIZE ? (
            <button className="load-more-btn" onClick={() => setShowAll(false)}>
              SHOW LESS
            </button>
          ) : null}
        </div>
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <FilterModal
          onClose={() => setShowFilterModal(false)}
          onApply={handleApplyFilters}
        />
      )}
      {/* Game Detail Modal */}
      {selectedGame && (
        <GameDetail
          game={selectedGame}
          onBack={() => setSelectedGame(null)}
          isJoined={joinedGames.has(selectedGame.id)}
          onJoin={(id) => setJoinedGames((prev) => new Set([...prev, id]))}
        />
      )}
    </section>
  );
}

export default Part3;
