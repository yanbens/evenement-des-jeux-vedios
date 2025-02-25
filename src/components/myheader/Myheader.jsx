import React from  "react"; 
import Menu from "./menu/Menu";
import styles from "./Myheader.module.css"
import Logo from "./Logo";
const Myheader = (props) => {
    console.log(props)
    return (
    <div className={styles.Myheader}> 
    <Logo/> 
    <Menu/>
    </div>
    );
};
export default Myheader;