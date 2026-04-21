import React from 'react';
import './PopularSports.css';

const sports = [
  { id: 1, name: 'Badminton', img: 'https://picsum.photos/220/220?random=30' },
  { id: 2, name: 'Football', img: 'https://picsum.photos/220/220?random=31' },
  { id: 3, name: 'Cricket', img: 'https://picsum.photos/220/220?random=32' },
  { id: 4, name: 'Swimming', img: 'https://picsum.photos/220/220?random=33' },
  { id: 5, name: 'Tennis', img: 'https://picsum.photos/220/220?random=34' },
  { id: 6, name: 'Table Tennis', img: 'https://picsum.photos/220/220?random=35' },
];

const PopularSports = () => {
  return (
    <section className="popular-sports">
      <div className="ps-inner">
        <h2 className="ps-title">Popular Sports</h2>
        <div className="ps-grid">
          {sports.map((sport) => (
            <div className="ps-card" key={sport.id}>
              <img src={sport.img} alt={sport.name} />
              <div className="ps-overlay">
                <span className="ps-name">{sport.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSports;