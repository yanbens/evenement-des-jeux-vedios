'use client';
import styles from './contact.module.css';
import { useActionState, useEffect } from 'react';
import { handleContactForm } from './actions';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [state, formAction] = useActionState(handleContactForm, null);

  useEffect(() => {
    if (state?.success) {
      router.push('/merci');
    }
  }, [state?.success, router]);

  return (
    <section className={styles.section}>
      <div className={styles.contactContainer}>
        {/* Colonne image */}
        <div className={styles.imageContainer}>
          <img
            src="/gaming.jpg"
            alt="Gaming Contact"
            className={styles.image}
          />
        </div>

        {/* Colonne formulaire */}
        <div className={styles.formCard}>
          <h1 className={styles.title}>Contactez-nous</h1>
          <p className={styles.subtitle}>
            Une question ? Un commentaire ? On est là pour vous répondre !
          </p>

          <form action={formAction} className={styles.form} noValidate>
            <div className={styles.fieldGroup}>
              <label>Nom complet</label>
              <input
                name="nomprenom"
                placeholder="Ex: Sabrina K."
                className={styles.input}
              />
              {state?.errors?.nomprenom && (
                <span className={styles.error}>
                  {state.errors.nomprenom}
                </span>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label>Email</label>
              <input
                name="email"
                placeholder="Ex: sabrina@email.com"
                className={styles.input}
              />
              {state?.errors?.email && (
                <span className={styles.error}>{state.errors.email}</span>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Écris ton message ici..."
                rows={4}
                className={styles.textarea}
              />
              {state?.errors?.message && (
                <span className={styles.error}>{state.errors.message}</span>
              )}
            </div>

            <button type="submit" className={styles.button}>
              Envoyer
            </button>

            {state?.success && (
              <p className={styles.success}>
                Ton message a bien été envoyé !
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
