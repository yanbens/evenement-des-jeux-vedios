import eventData from "@/data/eventData.json"; // Importer les événements
import styles from "./eventDetail.module.css"; // Importer le module de styles

const pageEventDetail = async ({ params }) => {
	const eventId =  params?.eventId;

	// Convertir eventId en nombre et chercher l'événement
	const event = eventData.find((e) => e.id === parseInt(eventId));

	// Si l'événement n'existe pas, afficher un message
	if (!event) {
		return <p className={styles.notFound}>Événement non trouvé !</p>;
	}

	return (
		<div className={styles.container}>
			<h1>{event.title}</h1>
			<img src={event.imageUrl} alt={event.title} className={styles.image} />
			<p>
				<strong>Date :</strong> {event.date}
			</p>
			<p>
				<strong>Lieu :</strong> {event.location}
			</p>
			<p className={styles.description}>{event.description}</p>
		</div>
	);
};

export default pageEventDetail;
