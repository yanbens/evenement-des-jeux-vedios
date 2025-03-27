'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis.';
    if (!formData.email.includes('@')) newErrors.email = 'Email invalide.';
    if (formData.message.length < 5) newErrors.message = 'Le message est trop court.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage('');
    } else {
      console.log('Formulaire envoyé :', formData);
      setErrors({});
      setSuccessMessage('Votre message a bien été envoyé !');
      setFormData({ nom: '', email: '', message: '' });

      // Redirection vers la page de remerciement
      setTimeout(() => {
        window.location.href = '/merci';
      }, 1000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src="/Photo_1.webp"
          alt="Gaming"
          className={styles.image}
        />
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <h1 className={styles.title}>Contactez-nous</h1>
          <p className={styles.subtitle}>Une question ? Un commentaire ? On est là pour vous répondre !</p>

          {successMessage && <p className={styles.success}>{successMessage}</p>}

          <label className={styles.label} htmlFor="nom">Nom complet</label>
          <input
            className={styles.input}
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Ex: Sabrina K."
          />
          {errors.nom && <p className={styles.error}>{errors.nom}</p>}

          <label className={styles.label} htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex: sabrina@email.com"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <label className={styles.label} htmlFor="message">Message</label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Écris ton message ici..."
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}

          <button type="submit" className={styles.button}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
