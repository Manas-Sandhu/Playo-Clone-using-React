import React, { useState } from "react";
import "./GameDetail.css";

// ── GameDetail ─────────────────────────────────────────────────────────────
// Props:
//   game   – your existing game object (no extra fields needed)
//   onBack – callback to close the detail view

function GameDetail({ game, onBack, isJoined, onJoin }) {
  // ── Derive all missing fields from your existing data ──────────────────
  const g = {
    ...game,
    title: `${game.type ? game.type + " " : ""}${game.sport} Activity`,
    venueFullAddress: game.venue,
    hostAvatar:
      game.avatars?.[0] ?? `https://picsum.photos/80/80?random=${game.id}`,
    requiredPlayers: game.going,
    personalMessage: "No additional message from the host.",
    queries: [],
    players: [
      {
        name: game.host,
        role: "Host",
        avatar:
          game.avatars?.[0] ?? `https://picsum.photos/44/44?random=${game.id}`,
      },
      ...(game.avatars?.slice(1).map((av, i) => ({
        name: `Player ${i + 2}`,
        role: null,
        avatar: av,
      })) ?? []),
    ],
    venuesNearby: [],
  };

  // ── Local state ────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState("instructions");
  const [queryText, setQueryText] = useState("");
  const [queries, setQueries] = useState(g.queries);
  const [showQueryBox, setShowQueryBox] = useState(false);

  const handleSendQuery = () => {
    if (!queryText.trim()) return;
    setQueries((prev) => [...prev, { text: queryText, author: "You" }]);
    setQueryText("");
    setShowQueryBox(false);
  };

  return (
    <div className="gd-overlay" onClick={onBack}>
      <div className="gd-container" onClick={(e) => e.stopPropagation()}>
        {/* ── Back ── */}
        <button className="gd-back-btn" onClick={onBack}>
          ← Back to Games
        </button>

        <div className="gd-layout">
          {/* ══ LEFT COLUMN ══════════════════════════════════════════════ */}
          <div className="gd-left">
            {/* Hero Card */}
            <div className="gd-hero-card">
              <div className="gd-hero-top">
                <div className="gd-hero-info">
                  <h1 className="gd-title">{g.title}</h1>
                  <p className="gd-hosted-by">Hosted by {g.host}</p>

                  <div className="gd-meta-row">
                    <span className="gd-meta-icon">🕐</span>
                    <div className="gd-meta-bold">{g.date}</div>
                  </div>

                  <div className="gd-meta-row">
                    <span className="gd-meta-icon">📍</span>
                    <div className="gd-meta-bold">{g.venue}</div>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(g.venueFullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gd-map-btn"
                  >
                    Show In Map ↗
                  </a>
                </div>

                <img
                  src={g.hostAvatar}
                  alt={g.host}
                  className="gd-host-avatar"
                />
              </div>

              {/* Tags row */}
              <div className="gd-hero-tags">
                {g.type && (
                  <span className="gd-tag gd-tag--type">{g.type}</span>
                )}
                {g.gameType && (
                  <span className="gd-tag gd-tag--regular">{g.gameType}</span>
                )}
                {g.price && (
                  <span className="gd-tag gd-tag--price">💰 {g.price}</span>
                )}
                {g.booked && (
                  <span className="gd-tag gd-tag--booked">BOOKED</span>
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="gd-tabs">
              <button
                className={`gd-tab${activeTab === "instructions" ? " gd-tab--active" : ""}`}
                onClick={() => setActiveTab("instructions")}
              >
                Game Instructions
              </button>
              <button
                className={`gd-tab${activeTab === "queries" ? " gd-tab--active" : ""}`}
                onClick={() => setActiveTab("queries")}
              >
                Queries ({queries.length})
              </button>
            </div>
            <div className="gd-tab-divider" />

            {/* Tab: Instructions */}
            {activeTab === "instructions" ? (
              <div className="gd-instructions">
                <div className="gd-stats-row">
                  <div className="gd-stat">
                    <span className="gd-stat-icon">👥</span>
                    <span className="gd-stat-label">
                      {String(g.requiredPlayers).padStart(2, "0")} Going
                    </span>
                  </div>
                  <div className="gd-stat">
                    <span className="gd-stat-icon">🎯</span>
                    <span className="gd-stat-label">{g.level}</span>
                  </div>
                  <div className="gd-stat">
                    <span className="gd-stat-icon">📏</span>
                    <span className="gd-stat-label">
                      {g.distanceKm} km away
                    </span>
                  </div>
                </div>
                <div className="gd-divider" />
                <div className="gd-personal-msg">
                  <span className="gd-pm-label">
                    Personal Message
                    <br />
                    by the host
                  </span>
                  <p className="gd-pm-text">{g.personalMessage}</p>
                </div>
              </div>
            ) : (
              /* Tab: Queries */
              <div className="gd-queries-panel">
                {queries.length === 0 && (
                  <p className="gd-no-queries">
                    No queries yet. Be the first to ask!
                  </p>
                )}
                {queries.map((q, i) => (
                  <div key={i} className="gd-query-item">
                    <span className="gd-query-author">{q.author}:</span>
                    <span className="gd-query-text">{q.text}</span>
                  </div>
                ))}

                {showQueryBox && (
                  <div className="gd-query-box">
                    <textarea
                      className="gd-query-input"
                      placeholder="Type your query..."
                      value={queryText}
                      onChange={(e) => setQueryText(e.target.value)}
                      rows={3}
                    />
                    <div className="gd-query-actions">
                      <button
                        className="gd-query-cancel"
                        onClick={() => setShowQueryBox(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="gd-query-send"
                        onClick={handleSendQuery}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Similar Games */}
            <div className="gd-similar-header">
              <h3 className="gd-similar-title">Similar Games</h3>
              <button className="gd-see-all" onClick={onBack}>
                SEE ALL GAMES ›
              </button>
            </div>
          </div>

          {/* ══ RIGHT COLUMN ═════════════════════════════════════════════ */}
          <div className="gd-right">
            {/* Players */}
            <div className="gd-panel">
              <h3 className="gd-panel-title">Players ({g.players.length})</h3>
              <div className="gd-players-list">
                {g.players.map((p, i) => (
                  <div key={i} className="gd-player-row">
                    {p.avatar ? (
                      <img
                        src={p.avatar}
                        alt={p.name}
                        className="gd-player-avatar"
                      />
                    ) : (
                      <div className="gd-player-avatar gd-player-avatar--placeholder">
                        {p.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <div className="gd-player-name">{p.name}</div>
                      {p.role && <div className="gd-player-role">{p.role}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Venues Nearby — only renders if data exists */}
            {g.venuesNearby.length > 0 && (
              <div className="gd-panel">
                <h3 className="gd-panel-title">Venues Nearby</h3>
                <div className="gd-venues-list">
                  {g.venuesNearby.map((v, i) => (
                    <div key={i} className="gd-venue-row">
                      <img
                        src={v.image}
                        alt={v.name}
                        className="gd-venue-img"
                      />
                      <div>
                        <div className="gd-venue-name">{v.name}</div>
                        <div className="gd-venue-dist">
                          ~ {v.distanceKm} km away
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="gd-see-all-venues">SEE ALL VENUES ›</button>
              </div>
            )}
          </div>
        </div>

        {/* ── Sticky Footer CTA ── */}
        <div className="gd-footer-cta">
          <button
            className="gd-send-query-btn"
            onClick={() => {
              setActiveTab("queries");
              setShowQueryBox(true);
            }}
          >
            SEND QUERY
          </button>
          <button
            className={`gd-join-btn${isJoined ? " gd-join-btn--joined" : ""}`}
            onClick={() => onJoin(game.id)}
            disabled={isJoined}
          >
            {isJoined ? "✓ JOINED" : "JOIN GAME"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
