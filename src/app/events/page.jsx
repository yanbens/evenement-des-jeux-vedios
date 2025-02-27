import Card from "@/components/card/Card";
import styles from "./events.module.css";
const events = () => {
return (
<div className={styles.container}>
<h1 className={styles.title}>Calendrier des événements</h1>
<div className={styles.description}>
Découvrez ce qui se passe dans le monde entier  jusqu’à un an à
l’avance en en effectuant une recherche dans notre calendrier
d'événements en ligne. Parcourez pour trouver des festivals, des musées
expositions, événements  professionnels et bien plus encore !
</div>
<div className={styles.cardContainer}>
<Card /><Card /><Card /><Card /> <Card /><Card /><Card /><Card />
</div>
</div>
);
};
export default events;