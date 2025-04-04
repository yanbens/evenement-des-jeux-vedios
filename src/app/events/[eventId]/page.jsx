import styles from "./eventDetail.module.css"; // Importer le module de styles
const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchEvent(eventId) {
  const res = await fetch(`${API_URL}/api/events/${eventId}`, {
    cache: "no-store", // Empêche la mise en cache pour obtenir les dernières données
  });
  if (!res.ok) {
    return null; // Retourne null si l'événement n'existe pas
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const { eventId } = await params; // Attendre `params` pour récupérer `eventId`

  const event = await fetchEvent(eventId);
  return {
    title: event.title,
    description: event.description,
    openGraph: {
      images: event.imageUrl,
    },
    metadataBase: new URL("http://localhost:3000"), // Ajouter cette ligne pour définir la base des métadonnées
  };
}

const pageEventDetail = async ({ params }) => {
  const { eventId } = await params; // Attendre `params` pour récupérer `eventId`

  const event = await fetchEvent(eventId);

  // Si l'événement n'existe pas, afficher un message
  if (!event) {
    return <p className={styles.notFound}>Événement non trouvé !</p>;
  }
  return (
    <div className={styles.container}>
      <div
        style={{ fontSize: "2rem", fontWeight: "bolder", marginBottom: "2rem" }}
      >
        {event.title}
      </div>

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
