import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
// Importer statiquement les fichiers JSON
import enMessages from "../messages/en.json";
import frMessages from "../messages/fr.json";
// Associer les messages aux locales
const messages = {
en: enMessages,
fr: frMessages,
};
export default getRequestConfig(async () => {
const cookieStore = await cookies();
const locale = cookieStore.get("language")?.value || "en";
return {
locale,
messages: messages[locale] || messages["en"], 
//Sécuriser en cas d'erreur
};
})