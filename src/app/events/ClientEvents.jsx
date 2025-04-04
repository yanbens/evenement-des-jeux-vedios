"use client"; // Ce fichier est un composant client

import { useEffect, useState } from "react";
import styles from "./events.module.css";
import Card from "@/components/card/Card";
import { useTranslations } from "next-intl";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ClientEvents({ initialEvents }) {
	const [events, setEvents] = useState(initialEvents);
	const [loading, setLoading] = useState(false);
	const t = useTranslations("EventPage");

	// Fonction pour rafraîchir les événements côté client
	const fetchEvents = async () => {
		setLoading(true);
		try {
			const res = await fetch(`${API_URL}/api/events`);
			const data = await res.json();
			setEvents(data);
		} catch (error) {
			console.error("Erreur lors du rafraîchissement :", error);
		} finally {
			setLoading(false);
		}
	};

	// Rafraîchir automatiquement toutes les 10 secondes
	useEffect(() => {
		const interval = setInterval(() => {
			fetchEvents();
		}, 10000); // Ajuste la durée selon tes besoins

		return () => clearInterval(interval); // Nettoie l'intervalle à la suppression du composant
	}, []);

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{t("title")}</h1>
			<p className={styles.description}>
            {t("Message")}</p>

			<div className={styles.cardContainer}>
				{events.map((event) => (
					<Card
						key={event.id}
						id={event.id}
						date={event.date}
						title={event.title}
						location={event.location}
						imageUrl={event.imageUrl}
					/>
				))}
			</div>
		</div>
	);
}
