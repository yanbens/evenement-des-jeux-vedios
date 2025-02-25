import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Myheader from"@/components/myheader/Myheader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bonjour",
  description: "Ici une nouvelle description de notre app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="navbar">
<Myheader />
</div>

        <div className="content">{children}</div>
        <div className="footer">Footer</div>
      </body>
    </html>
  );
}
