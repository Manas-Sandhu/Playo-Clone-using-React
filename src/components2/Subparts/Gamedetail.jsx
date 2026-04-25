import React, { useState, useEffect } from "react";
import "./GameDetail.css";

// ── localStorage helpers ───────────────────────────────────────────────────

const QUERIES_KEY = (id) => `playo_queries_${id}`;

function loadQueries(gameId) {
  try {
    const raw = localStorage.getItem(QUERIES_KEY(gameId));
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveQueries(gameId, queries) {
  try {
    localStorage.setItem(QUERIES_KEY(gameId), JSON.stringify(queries));
  } catch {}
}

// ── GameDetail ─────────────────────────────────────────────────────────────

function GameDetail({ game, onBack, isJoined, onJoin, onUnjoin }) {
  // Derive display fields from the game object
  const g = {
    ...game,
    title: `${game.type ? game.type + " " : ""}${game.sport} Activity`,
    venueFullAddress: game.venue,
    hostAvatar: game.avatars?.[0] ?? `https://picsum.photos/80/80?random=${game.id}`,
    requiredPlayers: game.going,
    personalMessage: "No additional message from the host.",
    players: [
      {
        name: game.host,
        role: "Host",
        avatar: game.avatars?.[0] ?? `https://picsum.photos/44/44?random=${game.id}`,
      },
      ...(game.avatars?.slice(1).map((av, i) => ({
        name: `Player ${i + 2}`,
        role: null,
        avatar: av,
      })) ?? []),
    ],
    venuesNearby: [],
  };

  // ── State ──────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab]           = useState("instructions");
  const [queryText, setQueryText]           = useState("");
  const [queries, setQueries]               = useState(() => loadQueries(game.id));
  const [showQueryBox, setShowQueryBox]     = useState(false);
  const [showUnjoinConfirm, setShowUnjoinConfirm] = useState(false);

  // Persist queries to localStorage whenever they change
  useEffect(() => {
    saveQueries(game.id, queries);
  }, [game.id, queries]);

  // Reload queries when a different game is opened
  useEffect(() => {
    setQueries(loadQueries(game.id));
    setQueryText("");
    setShowQueryBox(false);
    setShowUnjoinConfirm(false);
    setActiveTab("instructions");
  }, [game.id]);

  // ── Handlers ───────────────────────────────────────────────────────────
  const handleSendQuery = () => {
    const trimmed = queryText.trim();
    if (!trimmed) return;
    setQueries((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: trimmed,
        author: "You",
        sentAt: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setQueryText("");
    setShowQueryBox(false);
  };

  const handleRemoveQuery = (id) => {
    setQueries((prev) => prev.filter((q) => q.id !== id));
  };

  const handleJoin = () => onJoin(game.id);

  const handleUnjoinConfirmed = () => {
    onUnjoin(game.id);
    setShowUnjoinConfirm(false);
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

                <img src={g.hostAvatar} alt={g.host} className="gd-host-avatar" />
              </div>

              {/* Tags */}
              <div className="gd-hero-tags">
                {g.type     && <span className="gd-tag gd-tag--type">{g.type}</span>}
                {g.gameType && <span className="gd-tag gd-tag--regular">{g.gameType}</span>}
                {g.price    && <span className="gd-tag gd-tag--price">💰 {g.price}</span>}
                {g.booked   && <span className="gd-tag gd-tag--booked">BOOKED</span>}
                {isJoined   && <span className="gd-tag gd-tag--joined">✅ JOINED</span>}
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
                    <span className="gd-stat-label">{g.distanceKm} km away</span>
                  </div>
                </div>
                <div className="gd-divider" />
                <div className="gd-personal-msg">
                  <span className="gd-pm-label">
                    Personal Message<br />by the host
                  </span>
                  <p className="gd-pm-text">{g.personalMessage}</p>
                </div>
              </div>
            ) : (
              /* Tab: Queries */
              <div className="gd-queries-panel">
                {queries.length === 0 && !showQueryBox && (
                  <p className="gd-no-queries">No queries yet. Be the first to ask!</p>
                )}

                {/* Saved queries with remove button */}
                {queries.map((q) => (
                  <div key={q.id} className="gd-query-item">
                    <span className="gd-query-author">{q.author}:</span>
                    <span className="gd-query-text-content">{q.text}</span>
                    {q.sentAt && (
                      <span className="gd-query-time">{q.sentAt}</span>
                    )}
                    <button
                      className="gd-query-remove"
                      onClick={() => handleRemoveQuery(q.id)}
                      title="Remove query"
                      aria-label="Remove this query"
                    >
                      ✕
                    </button>
                  </div>
                ))}

                {/* Compose box */}
                {showQueryBox && (
                  <div className="gd-query-box">
                    <textarea
                      className="gd-query-input"
                      placeholder="Type your query..."
                      value={queryText}
                      onChange={(e) => setQueryText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendQuery();
                        }
                      }}
                      rows={3}
                      autoFocus
                    />
                    <div className="gd-query-actions">
                      <button
                        className="gd-query-cancel"
                        onClick={() => { setShowQueryBox(false); setQueryText(""); }}
                      >
                        Cancel
                      </button>
                      <button
                        className="gd-query-send"
                        onClick={handleSendQuery}
                        disabled={!queryText.trim()}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Similar Games footer */}
            <div className="gd-similar-header">
              <h3 className="gd-similar-title">Similar Games</h3>
              <button className="gd-see-all" onClick={onBack}>SEE ALL GAMES ›</button>
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
                      <img src={p.avatar} alt={p.name} className="gd-player-avatar" />
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

            {/* Venues Nearby */}
            {g.venuesNearby.length > 0 && (
              <div className="gd-panel">
                <h3 className="gd-panel-title">Venues Nearby</h3>
                <div className="gd-venues-list">
                  {g.venuesNearby.map((v, i) => (
                    <div key={i} className="gd-venue-row">
                      <img src={v.image} alt={v.name} className="gd-venue-img" />
                      <div>
                        <div className="gd-venue-name">{v.name}</div>
                        <div className="gd-venue-dist">~ {v.distanceKm} km away</div>
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

          {isJoined ? (
            /* ── Joined state: show status + unjoin flow ── */
            <div className="gd-joined-actions">
              <span className="gd-joined-label">✅ You're in!</span>
              {!showUnjoinConfirm ? (
                <button
                  className="gd-unjoin-btn"
                  onClick={() => setShowUnjoinConfirm(true)}
                >
                  Leave Game
                </button>
              ) : (
                <div className="gd-unjoin-confirm">
                  <span className="gd-unjoin-confirm-text">Sure?</span>
                  <button className="gd-unjoin-confirm-yes" onClick={handleUnjoinConfirmed}>
                    Yes, Leave
                  </button>
                  <button
                    className="gd-unjoin-confirm-no"
                    onClick={() => setShowUnjoinConfirm(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="gd-join-btn" onClick={handleJoin}>
              {game.price ? `JOIN & PAY ${game.price}` : "JOIN GAME"}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default GameDetail;