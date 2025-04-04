"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import setLanguageValue from "@/actions/set-language-action";
export default function LocaleSwitcher() {
  const [locale, setLocale] = useState("en");
  const router = useRouter(); // Pour rafraîchir la page après changement
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    setLocale(savedLocale);
  }, []);
  const switchLocale = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
    setLanguageValue(newLocale);
    router.refresh(); // Recharge la page pour appliquer la nouvelle locale
  };
  return (
    <button
      onClick={switchLocale}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {locale === "en" ? "FR" : "EN"}
    </button>
  );
}
