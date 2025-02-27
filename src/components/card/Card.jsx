import React from "react";
import styles from "./Card.module.css";
const Card = ({
  title = "Titre par défaut",
  description = "Description par défaut",
}) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>;
    </div>
  );
};
export default Card;
