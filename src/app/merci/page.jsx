"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
const MerciPage = () => {
const router = useRouter();
const t = useTranslations("PageMerci");
// Redirection automatique après 5 secondes
useEffect(() => {
const timer = setTimeout(() => {
router.push("/");
}, 10000);
return () => clearTimeout(timer);
}, [router]);
return (
<div className="flex flex-col items-center justify-center p-4">
<h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
<p className="text-lg text-center mb-8">
{t("message")}
</p>
<div className="animate-checkmark text-green-500 text-6xl mb-8">✓</div>
<Link href="/" className="text-blue-500 hover:text-blue-700 transition-colors">
{t("backToHome")}
</Link>
<p className="mt-4 text-gray-500 text-sm">
{t("redirectMessage")}</p>
</div>
);
}; 
export default MerciPage;