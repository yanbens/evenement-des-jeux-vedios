import React from "react";
import Card from "../components/card/Card";
import styles from "../components/member/Member.module.css";
import Member from "../components/member/Member";
export default function Home() {
  const teamMembers = [
    { name: "Jean Dupont", role: "Organisateur", imgSrc: "/Member.jpg" },
    {
      name: "Sophie Martin",
      role: "Responsable Logistique",
      imgSrc: "/Member.jpg",
    },
    {
      name: "Alexandre Leroy",
      role: "Community Manager",
      imgSrc: "/Member.jpg",
    },
    {
      name: "Marie Lefevre",
      role: "Responsable Communication",
      imgSrc: "/Member.jpg",
    },
    { name: "Katia Yalali", role: "Designer & UI/UX", imgSrc: "/Member.jpg" },
    {
      name: "Yanis Bensalem",
      role: "Photographe & Vidéo",
      imgSrc: "/Member.jpg",
    },
    {
      name: "Elisa Chekaba",
      role: "Commentatrice officielle",
      imgSrc: "/Member.jpg",
    },
    {
      name: "Sabrina Moknache",
      role: "Stream Manager",
      imgSrc: "/Member.jpg",
    },
  ];
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bienvenue</h1>
        <p>Découvrez et participez à des événements inoubliables.</p>
      </header>
      <section className={styles.presentation}>
        <div className={styles.presentationText}>
          <p>
            Les événements de jeux vidéo sont des rassemblements où les
            passionnés de jeux se rencontrent pour partager leur amour des jeux,
            participer à des tournois, découvrir les dernières nouveautés et
            technologies, et rencontrer des développeurs et des influenceurs de
            l'industrie. Ces événements offrent une expérience immersive et
            interactive, permettant aux participants de se plonger dans
            l'univers des jeux vidéo et de vivre des moments inoubliables.
          </p>
        </div>
      </section>
      <section className={styles.membres}>
        <h2>Notre équipe</h2>
        <div className={styles.membreList}>
          {teamMembers.map((member, index) => (
            <Member
              key={index}
              name={member.name}
              role={member.role}
              image={member.imgSrc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
