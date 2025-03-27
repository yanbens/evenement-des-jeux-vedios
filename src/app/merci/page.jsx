import React from 'react';

export default function MerciPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Merci pour votre message !</h1>
        <p style={styles.text}>
          Nous avons bien reçu votre message. Nous vous répondrons dès que possible.
        </p>
        <a href="/" style={styles.link}>← Retour à l'accueil</a>
      </div>
    </main>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(145deg, #0f051d, #1a0939)',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    padding: '50px',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(150, 0, 255, 0.3)',
    textAlign: 'center',
    maxWidth: '600px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '30px',
    color: '#ccc',
  },
  link: {
    color: '#e100ff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};
