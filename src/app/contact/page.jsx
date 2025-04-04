"use client";
import styles from "./contact.module.css";
import { useActionState, useEffect } from "react";
import { handleContactForm } from "./actions";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
const pageContact = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(handleContactForm, null);
const t = useTranslations("ContactPage");
  //Redirection apres succés
 useEffect(() => {
  if (state?.success) {
  router.push("/merci");
  }
  }, [state?.success, router]);
  
  return (
    <>
      <form action={formAction} className={styles.container} noValidate>
        <h1 className={styles.title}>{t("title")}</h1>
        <input type="text" name="nomprenom" placeholder={t("PlaceholderNomPrenom")} />
        {state?.errors?.nomprenom && (
          <span className="text-red-500 text-sm">{state.errors.nomprenom}</span>
        )}
        <input type="text" name="email" placeholder={t("PlaceholderEmail")} />
        {state?.errors?.email && (
          <span className="text-red-500 text-sm">{state.errors.email}</span>
        )}
        <textarea
          type="text"
          name="message"
          row={5}
          placeholder={t("PlaceholderMessage")}
        />
        {state?.errors?.message && (
          <span className="text-red-500 text-sm">{state.errors.message}</span>
        )}
        
        <button type="submit">{t("button")}</button>
      </form>
    </>
  );
};
export default pageContact;
