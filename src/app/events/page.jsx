import ClientEvents from "./ClientEvents";
import { headers } from "next/headers";

//const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Fonction pour récupérer les données côté serveur
async function getServerEvents() {
	try {
		// Récupère les événements depuis l'API
		//const res = await fetch(`${API_URL}/api/events`, { cache: "no-store" });

		const headersList = await headers(); // Attendre la récupération des headers
		const host = headersList.get("host");
		const protocol = host.includes("localhost") ? "http" : "https";
		const API_URL = `${protocol}://${host}/api/events`;

		const res = await fetch(API_URL);

		// Si la réponse n'est pas OK, lance une erreur
		if (!res.ok) {
			const errorText = await res.text(); // Récupère le message d'erreur de l'API
			throw new Error(`Erreur ${res.status}: ${errorText}`);
		}
		// Renvoie les événements en JSON
		return res.json();
	} catch (error) {
		console.error("Erreur lors de la récupération des événements :", error);
		throw error; // Relance l'erreur pour que Next.js la capture
	}
}

// Composant PageEvents côté serveur par défaut
export default async function PageEvents() {
	const initialEvents = await getServerEvents(); // Fetch côté serveur

	return <ClientEvents initialEvents={initialEvents} />;
}
