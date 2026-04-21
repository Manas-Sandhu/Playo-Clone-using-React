import React from 'react';
import './BookVenues.css';

const venues = [
  {
    id: 1,
    name: 'FerroHub Sports | Mill...',
    address: '16/A, Millers Rd, abov... (~2.41 Kms)',
    rating: '5.00',
    reviews: 2,
    featured: true,
    img: 'https://picsum.photos/400/300?random=10',
  },
  {
    id: 2,
    name: 'Depot18 - Sports',
    address: 'Chamundi Hotel Compoun... (~2.84 Kms)',
    rating: '4.63',
    reviews: 16,
    featured: true,
    img: 'https://picsum.photos/400/300?random=11',
  },
  {
    id: 3,
    name: 'Game Theory - Joseph\'s...',
    address: 'Gate 3, No.2, Vittal M... (~0.13 Kms)',
    rating: '4.95',
    reviews: 266,
    img: 'https://picsum.photos/400/300?random=12',
  },
  {
    id: 4,
    name: 'Wellness Sports Inc - ...',
    address: '#1, Bhavya Plaza, 2nd ... (~0.46 Kms)',
    rating: '4.50',
    reviews: 8,
    img: 'https://picsum.photos/400/300?random=13',
  },
];

const BookVenues = () => {
  return (
    <section className="book-venues">
      <div className="section-header">
        <h2 className="section-title">Book Venues</h2>
        <button className="see-all-btn">SEE ALL VENUES ›</button>
      </div>

      <div className="venues-grid">
        {venues.map((venue) => (
          <div className="venue-card" key={venue.id}>
            <div className="venue-img-wrap">
              <img src={venue.img} alt={venue.name} />
              {venue.featured && <span className="featured-badge">FEATURED</span>}
            </div>
            <div className="venue-info">
              <div className="venue-name-row">
                <span className="venue-name">{venue.name}</span>
                <span className="venue-rating">
                  <span className="star">★</span> {venue.rating} ({venue.reviews})
                </span>
              </div>
              <p className="venue-address">📍 {venue.address}</p>
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

export default BookVenues;