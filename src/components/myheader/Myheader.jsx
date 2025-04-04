import React from "react";
import Logo from "./Logo";
import Menu from "./menu/Menu";
import styles from "./Myheader.module.css";
import ThemeToggle from "../themeToggle/ThemeToggle";
import LocationSwitcher from "../localSwitcher/LocalSwitcher";

const Myheader = (props) => {
	console.log(props);

	return (
		<div className={styles.Myheader}>
			<Logo />
			<ThemeToggle />
			<LocationSwitcher/>
			<Menu />
		</div>
	);
};

export default Myheader;
