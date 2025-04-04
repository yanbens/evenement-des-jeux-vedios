import React from "react";
import Member from "../components/member/Member";
import { useTranslations } from "next-intl";
import styles from "../components/member/Member.module.css"; // Assure-toi que ce fichier existe et contient les bonnes classes

const teamMembers = [
  { name: "Jean Dupont", role: "Organisateur", imgSrc: "/Member.jpg" },
  { name: "Sophie Martin", role: "Responsable Logistique", imgSrc: "/Member.jpg" },
  { name: "Alexandre Leroy", role: "Community Manager", imgSrc: "/Member.jpg" },
  { name: "Marie Lefevre", role: "Responsable Communication", imgSrc: "/Member.jpg" },
  { name: "Katia Yalali", role: "Designer & UI/UX", imgSrc: "/Member.jpg" },
  { name: "Yanis Bensalem", role: "Photographe & Vidéo", imgSrc: "/Member.jpg" },
  { name: "Elisa Chekaba", role: "Commentatrice officielle", imgSrc: "/Member.jpg" },
  { name: "Sabrina Moknache", role: "Stream Manager", imgSrc: "/Member.jpg" },
];

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      {/* Utilisation des traductions uniquement */}
      
  
      {/* Contenu de l'en-tête, ne pas dupliquer les textes déjà traduits */}
      <div className={styles.container}>
        <header className={styles.header}>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{t("title")}</div>
        {/* Utilisation de la traduction pour le titre */}
          <p>{t("under title")}</p> {/* Utilisation de la traduction pour la description sous le titre */}
        </header>
  
        {/* Texte descriptif dans la section de présentation */}
        <section className={styles.presentation}>
          <div className={styles.presentationText}>
            <p>
              {t("message")} {/* Utilisation de la traduction pour la description détaillée */}
            </p>
          </div>
        </section>
  
        <section className={styles.membres}>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{t("title2")}</div>
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
    </div>
  );
}  
