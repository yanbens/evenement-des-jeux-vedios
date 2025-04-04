"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
const contactSchema = z.object({
  nomprenom: z.string().min(1, "Le nom et prénom est requis."),
  email: z.string().email("Adresse email invalide."),
  message: z.string().min(5, "Le message doit contenir au moins 5 caractères."),
});
export async function handleContactForm(prevState, formData) {
  // Récupérer les données avec formData.get()
  const nomprenom = formData.get("nomprenom");
  const email = formData.get("email");
  const message = formData.get("message");
  // Validation des données avec Zod
  const validationResult = contactSchema.safeParse({
    nomprenom,
    email,
    message,
  });
  // Vérifier si la validation a échoué
  if (!validationResult.success) {
    // Retourner les erreurs de validation sous forme d'objet
    const errors = validationResult.error.flatten().fieldErrors;
    return { errors };
  }
  // Simuler l'envoi d'un email (ou une insertion en base de données)
  console.log("Données soumises :", { nomprenom, email, message });
  // Retourner un état de succès
  return { success: true, errors: {} };
  // Simulation d'envoi d'email
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Redirection via l'effet dans le composant
  return { success: true };
}
