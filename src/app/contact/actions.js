'use server';

export async function handleContactForm(formData) {
  console.log('📥 Données reçues du formulaire :', formData);
  return { success: true };
}
