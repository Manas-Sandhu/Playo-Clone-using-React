import React from 'react';
import './Part4.css';

const collections = [
  {
    id: 1,
    title: 'Top Venues Near You',
    subtitle: '400+ venues',
    img: 'https://picsum.photos/600/400?random=31',
  },
  {
    id: 2,
    title: 'Explore Best Coaches',
    subtitle: '400+ venues',
    img: 'https://picsum.photos/600/400?random=32',
  },
  {
    id: 3,
    title: 'Discover Best Events',
    subtitle: '100+ Events & Deals',
    img: 'https://picsum.photos/600/400?random=33',
  },
];

function Part4() {
  return (
    <section className="popular-sports">
      <h2 className="collections-title">Collections For You</h2>

      <div className="collections-grid">
        {collections.map(col => (
          <div className="collection-card" key={col.id}>
            <img src={col.img} alt={col.title} className="collection-img" />
            <div className="collection-overlay">
              <div className="collection-text">
                <h3 className="collection-name">{col.title}</h3>
                <p className="collection-sub">{col.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* App Download Banner */}
      <div className="app-download-banner">
        <div className="banner-text">
          <h3>To create a game, download Playo app</h3>
        </div>
        <div className="banner-buttons">
          <a href="https://play.google.com/store/apps/details?id=com.techmash.playo&hl=en_IN" target='blank' className="banner-store-btn">
            <span className="banner-store-icon">▶</span>
            <div className="banner-store-text">
              <span className="banner-store-sub">GET IT ON</span>
              <span className="banner-store-name">Google Play</span>
            </div>
          </a>
          <a href="https://apps.apple.com/in/app/playo-sports-community-app/id1018786950" target='blank' className="banner-store-btn">
            <span className="banner-store-icon">🍎</span>
            <div className="banner-store-text">
              <span className="banner-store-sub">Download on the</span>
              <span className="banner-store-name">App Store</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Part4;