'use server';
import { z } from 'zod';

const contactSchema = z.object({
  nomprenom: z.string().min(1, "Le nom est requis."),
  email: z.string().email("Email invalide."),
  message: z.string().min(5, "Le message est trop court."),
});

export async function handleContactForm(prevState, formData) {
  const nomprenom = formData.get("nomprenom");
  const email = formData.get("email");
  const message = formData.get("message");

  const validation = contactSchema.safeParse({ nomprenom, email, message });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  console.log("Message reçu :", { nomprenom, email, message });

  return { success: true, errors: {} };
}
