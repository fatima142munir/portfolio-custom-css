import Link from "next/link";
import styles from "../page.module.css";


const Nav = ()=>{
    return(
        <nav className={styles.navContainer}>
            <span className={styles.logo} >
                <h1>Portfolio</h1>
            </span>
            <div className={styles.tabs}>
                <div><Link href={'/'}>Home</Link></div>
                <div><Link href={'/about'}>About</Link></div>
                <div><Link href={'/projects'}>Projects</Link></div>
                
            </div>
        </nav>
    )
}

export default Nav