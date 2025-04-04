import "./globals.css";
import Myheader from "@/components/myheader/Myheader";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata = {
	title: "Jeux vidéo",
	description: "Développé par notre équipe de développement",
};
export default async function RootLayout({ children }) {
	const locale = await getLocale();
	const messages = await getMessages();
	return (
		<html lang={locale} suppressHydrationWarning>
			<body>
				<ThemeProvider attribute="class" enableSystem defaultTheme="system">
					<NextIntlClientProvider messages={messages}>
						<Myheader />
						<div className="content">{children}</div>
						<div className="footer">
							© Collège La Cité | Développé par notre équipe de développement
						</div>
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
