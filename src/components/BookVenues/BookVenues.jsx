import React, { useRef } from 'react';
import './BookVenues.css';

const venues = [
  { id: 1, name: 'Machaxi Active Sports Arena', location: 'Koramangala, Bangalore', distance: '~1.00 Km', sports: ['Badminton', 'Tennis', 'Football'], rating: 4.5, img: 'https://picsum.photos/400/260?random=41' },
  { id: 2, name: 'Basecamp by Push Sports', location: 'Indiranagar, Bangalore', distance: '~1.41 Kms', sports: ['Football', 'Cricket', 'Basketball'], rating: 4.3, img: 'https://picsum.photos/400/260?random=42' },
  { id: 3, name: 'South United Football Club', location: 'HSR Layout, Bangalore', distance: '~2.40 Kms', sports: ['Football', 'Futsal'], rating: 4.7, img: 'https://picsum.photos/400/260?random=43' },
  { id: 4, name: 'PlayArena Sports Complex', location: 'Whitefield, Bangalore', distance: '~3.20 Kms', sports: ['Badminton', 'Swimming', 'Squash'], rating: 4.6, img: 'https://picsum.photos/400/260?random=44' },
  { id: 5, name: 'Ace Tennis Court', location: 'JP Nagar, Bangalore', distance: '~0.80 Kms', sports: ['Tennis', 'Squash'], rating: 4.2, img: 'https://picsum.photos/400/260?random=45' },
  { id: 6, name: 'Hoop Arena', location: 'Marathahalli, Bangalore', distance: '~2.10 Kms', sports: ['Basketball', 'Volleyball'], rating: 4.4, img: 'https://picsum.photos/400/260?random=46' },
];

const BookVenues = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="book-venues">
      <div className="bv-header">
        <div>
          <h2 className="bv-title">Book Venues Near You</h2>
          <p className="bv-subtitle">400+ venues across Bangalore</p>
        </div>
        <a href="#" className="bv-view-all">View All →</a>
      </div>

      <div className="bv-carousel-wrapper">
        <button className="bv-arrow bv-arrow--left" onClick={() => scroll(-1)}>‹</button>

        <div className="bv-track" ref={scrollRef}>
          {venues.map(venue => (
            <div className="bv-card" key={venue.id}>
              <div className="bv-img-wrapper">
                <img src={venue.img} alt={venue.name} className="bv-img" />
                <span className="bv-distance">{venue.distance}</span>
              </div>
              <div className="bv-info">
                <h3 className="bv-name">{venue.name}</h3>
                <p className="bv-location">📍 {venue.location}</p>
                <div className="bv-sports">
                  {venue.sports.map(s => (
                    <span className="bv-sport-tag" key={s}>{s}</span>
                  ))}
                </div>
                <div className="bv-footer">
                  <span className="bv-rating">⭐ {venue.rating}</span>
                  <button className="bv-book-btn">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="bv-arrow bv-arrow--right" onClick={() => scroll(1)}>›</button>
      </div>
    </section>
  );
};

export default BookVenues;