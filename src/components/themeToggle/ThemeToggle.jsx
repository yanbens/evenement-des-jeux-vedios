"use client";
import { Button } from "../ui/button";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme(); //Stocke le thème actuel ("light", "dark", ou undefined) et la fonction pour le changer
	return (
		<Button
			variant="outlined"
			size="icon"
			className="rounded-full"
			onClick={() => {
				setTheme(theme === "dark" ? "light" : "dark"); //Change le thème actuel
				console.log(theme);
			}}
		>
			{/* Les icônes de soleil et de lune */}
			<SunIcon className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-white" />
			<MoonIcon className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100" />
		</Button>
	);
};

export default ThemeToggle;
