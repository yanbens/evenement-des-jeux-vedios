'use client';
import styles from './events.module.css';
import Link from 'next/link';

const events = [
  {
    id: '1',
    title: 'GAME DEVELOPERS CONFERENCE 2025',
    date: '17 AU 21 MARS 2025 | 10:00 AM',
    location: 'SAN FRANCISCO, USA',
    image: '/events/events_1.jpg',
  },
  {
    id: '2',
    title: 'E-SPORT WORLD CUP 2025',
    date: '15 AVRIL 2025 | 14:00',
    location: 'PARIS, FRANCE',
    image: '/events/events_2.jpg',
  },
  {
    id: '3',
    title: 'EAST GAME FESTIVAL',
    date: '03 MAI 2025 | 11:00',
    location: 'TORONTO, CANADA',
    image: '/events/events_3.jpg',
  },
  {
    id: '4',
    title: 'INTERNATIONAL COSPLAY PARTY',
    date: '24 JUIN 2025 | 16:00',
    location: 'TOKYO, JAPON',
    image: '/events/events_4.avif',
  },
  {
    id: '5',
    title: 'THE GAME AWARDS',
    date: '11 DÉCEMBRE 2025 | 20:00',
    location: 'LOS ANGELES, USA',
    image: '/events/events_5.jpg',
  },
];

export default function EventsPage() {
  return (
    <section>
      <h1 className={styles.title}>Nos événements</h1>
      <div className={styles.grid}>
        {events.map((event) => (
          <div key={event.id} className={styles.card}>
            <img src={event.image} alt={event.title} className={styles.image} />
            <p className={styles.details}>{event.date}</p>
            <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>{event.title}</h3>
            <p className={styles.location}>{event.location}</p>
            <Link href={`/events/${event.id}`}>
              <button className={styles.button}>VOIR DÉTAILS</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
