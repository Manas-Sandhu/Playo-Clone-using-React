import React from 'react';
import './Part2.css';

const venues = [
  { id: 1, name: 'Machaxi Active Sports Arena', location: 'Koramangala, Bangalore', distance: '~1.00 Km', sports: ['Badminton', 'Tennis', 'Football'], rating: 4.5, img: 'https://picsum.photos/400/260?random=21' },
  { id: 2, name: 'Basecamp by Push Sports', location: 'Indiranagar, Bangalore', distance: '~1.41 Kms', sports: ['Football', 'Cricket', 'Basketball'], rating: 4.3, img: 'https://picsum.photos/400/260?random=22' },
  { id: 3, name: 'South United Football Club', location: 'HSR Layout, Bangalore', distance: '~2.40 Kms', sports: ['Football', 'Futsal'], rating: 4.7, img: 'https://picsum.photos/400/260?random=23' },
  { id: 4, name: 'PlayArena Sports Complex', location: 'Whitefield, Bangalore', distance: '~3.20 Kms', sports: ['Badminton', 'Swimming', 'Squash'], rating: 4.6, img: 'https://picsum.photos/400/260?random=24' },
];

function Part2() {
  return (
    <section className="book-venues">
      <div className="book-venues-header">
        <div>
          <h2 className="section-title">Book Venues Near You</h2>
          <p className="section-subtitle">400+ venues across Bangalore</p>
        </div>
        <a href="#" className="view-all-link">View All →</a>
      </div>
      <div className="venues-grid">
        {venues.map(venue => (
          <div className="venue-card" key={venue.id}>
            <div className="venue-img-wrapper">
              <img src={venue.img} alt={venue.name} className="venue-img" />
              <span className="venue-distance">{venue.distance}</span>
            </div>
            <div className="venue-info">
              <h3 className="venue-name">{venue.name}</h3>
              <p className="venue-location">📍 {venue.location}</p>
              <div className="venue-sports">
                {venue.sports.map(s => (
                  <span className="venue-sport-tag" key={s}>{s}</span>
                ))}
              </div>
              <div className="venue-footer">
                <span className="venue-rating">⭐ {venue.rating}</span>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Part2;