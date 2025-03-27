'use client';
import styles from './contact.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const schema = yup.object().shape({
  nomprenom: yup.string().required('Le nom est requis'),
  email: yup.string().email('Email invalide').required('Email requis'),
  message: yup.string().min(5, 'Le message doit contenir au moins 5 caractères'),
});

export default function ContactPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log('✔️ Données validées côté client :', data);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSuccessMessage('Message envoyé avec succès !');
        reset();
        setTimeout(() => router.push('/merci'), 2000);
      } else {
        setErrorMessage(result.error || 'Erreur lors de l’envoi.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Une erreur s'est produite.");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.contactContainer}>
        <div className={styles.imageContainer}>
          <img
            src="/gaming.jpg"
            alt="Gaming Contact"
            className={styles.image}
          />
        </div>

        <div className={styles.formCard}>
          <h1 className={styles.title}>Contactez-nous</h1>
          <p className={styles.subtitle}>
            Une question ? Un commentaire ? On est là pour vous répondre !
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
            <div className={styles.fieldGroup}>
              <label>Nom complet</label>
              <input
                {...register('nomprenom')}
                name="nomprenom"
                placeholder="Ex: Sabrina K."
                className={styles.input}
              />
              {errors.nomprenom && (
                <span className={styles.error}>{errors.nomprenom.message}</span>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label>Email</label>
              <input
                {...register('email')}
                name="email"
                placeholder="Ex: sabrina@email.com"
                className={styles.input}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <label>Message</label>
              <textarea
                {...register('message')}
                name="message"
                placeholder="Écris ton message ici..."
                rows={4}
                className={styles.textarea}
              />
              {errors.message && (
                <span className={styles.error}>{errors.message.message}</span>
              )}
            </div>

            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            {successMessage && <p className={styles.success}>{successMessage}</p>}

            <button type="submit" className={styles.button}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
