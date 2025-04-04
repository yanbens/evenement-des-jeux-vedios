"use client";
import React, { useState } from "react";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Importation du hook useTranslations

const Menu = () => {
  const [open, setOpen] = useState(false);
  
  // Utilisation du hook useTranslations pour récupérer les traductions
  const t = useTranslations("Menu"); // Assurez-vous d'avoir ce namespace dans vos fichiers de traduction

  const links = [
    { label: t("Home"), path: "/" }, // Traduction dynamique du label
    { label: t("Events"), path: "/events" },
    { label: t("Contact"), path: "/contact" },
  ];

  return (
    <>
      {/*Section de Menu desktop */}
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          {/* On ajouter une classe menuList */}
          {links.map((link, index) => (
            <MenuItem key={index} label={link.label} path={link.path} />
          ))}
        </ul>
      </div>
      <button
        className={styles.menuButton}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Image
          src={open ? "/icons/close.png" : "/icons/menu.png"}
          alt="Menu"
          width={30}
          height={30}
        />
      </button>
      {/**Section pour mobile */}
      {open && (
        <nav className={styles.mobileMenu}>
          <ul>
            {links.map((a, index) => (
              <MenuItem
                key={index}
                label={a.label}
                path={a.path}
                onClick={() => setOpen(false)} // Ferme le menu après le clic
              />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Menu;
