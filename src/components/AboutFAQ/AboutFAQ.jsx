import React, { useState } from 'react';
import './AboutFAQ.css';

const teamPhotos = [
  { id: 1, img: 'https://picsum.photos/280/200?random=40' },
  { id: 2, img: 'https://picsum.photos/380/200?random=41' },
  { id: 3, img: 'https://picsum.photos/200/160?random=42' },
  { id: 4, img: 'https://picsum.photos/200/160?random=43' },
  { id: 5, img: 'https://picsum.photos/200/160?random=44' },
];

const faqs = [
  {
    q: 'How can I use Playo to book sports venues or to join sports activities?',
    a: "Playo is the world's largest sports community platform with over 5 million users. It helps you discover and book venues for 50+ sports, including football, badminton, tennis, and box cricket. Once you sign up, you can host or join games, connect with nearby players and trainers, and find available slots by location, sport, and time. You also earn redeemable Karma points with every booking.",
  },
  {
    q: 'What is the Playo Partner App, and how does it help venue owners?',
    a: 'The Playo Partner App is built for venue owners and facility managers of sports turfs, courts, gyms, pools, and multi-sport centres. It helps you manage bookings, slots and pricing, track earnings, monitor cancellations, access booking logs, generate reports, and assign staff roles — all from your phone or desktop. It is also available as a PWA.',
  },
  {
    q: 'Can I reschedule or cancel a booking made on Playo? How does it work?',
    a: 'Yes, you can reschedule or cancel a booking only via the Playo app, but the policies vary depending on the venue. Most venues allow easy rescheduling without any penalty if done within the permitted window. Cancellation policies, including refund eligibility and timelines, are set by each venue and are visible at the time of booking. Refunds (if applicable) are typically processed within 5–7 working days to the source account or your Playo credits.',
  },
  {
    q: 'What is Karma on Playo?',
    a: "Karma is Playo's in-app rewards system that lets you earn points for staying active. You get Karma for registering, completing your profile, booking venues, hosting or joining games, inviting friends through referral, and more. These points can be redeemed for discounts on future bookings within the Playo app. The more you play and interact, the more rewards you unlock!",
  },
  {
    q: 'How to Host a Game on Playo?',
    a: 'Hosting a game on Playo is simple. After signing up, go to the "Create a Game" option in the app, select your preferred sport, venue, date, and time, and publish your game. Other players nearby can then view and join your game. This helps you find teammates or opponents easily while building your own community.',
  },
  {
    q: 'How Do I Contact Playo?',
    a: 'You can reach out to Playo directly through the in-app support section for quick assistance. You can also get in touch via our customer care number +91 80 9551 4666, or email us at contact@playo.co. For more details, visit our Contact Us page.',
  },
  {
    q: 'What are the Benefits of Using Playo?',
    a: "Playo offers multiple benefits for anyone who loves sports: book verified venues for 50+ sports with real-time availability, host or join games and connect with nearby players, manage game plans without messy group chats, find certified trainers for personal or group sessions, and track your fitness with streaks, leaderboards, and Karma rewards. Whether you want to play casually, train seriously, or grow your sports network, Playo brings everything into one app.",
  },
];

const AboutFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="about-faq-wrapper">

      {/* ── About Team ── */}
      <section className="about-team">
        <div className="about-left">
          <h2 className="about-title">About the Team</h2>
          <p className="about-desc">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
          </p>
          <div className="about-btns">
            <button className="btn-primary">READ OUR STORY</button>
            <button className="btn-outline">WE ARE HIRING!</button>
          </div>
        </div>

        <div className="about-right">
          <div className="about-photo-grid">
            <div className="photo-large">
              <img src={teamPhotos[0].img} alt="Team" />
            </div>
            <div className="photo-tall">
              <img src={teamPhotos[1].img} alt="Team" />
            </div>
            {teamPhotos.slice(2).map((p) => (
              <div className="photo-small" key={p.id}>
                <img src={p.img} alt="Team" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="faq-inner">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <ul className="faq-list">
            {faqs.map((faq, i) => (
              <li
                key={i}
                className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
                onClick={() => toggleFaq(i)}
              >
                <div className="faq-question">
                  <span>• {faq.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '∧' : '∨'}</span>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      

    </div>
  );
};

export default AboutFAQ;