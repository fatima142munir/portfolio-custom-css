import Profile from "../components/profile";
import styles from "../page.module.css"


const Aboutpage = ()=>{
    return(
        <>
        <h1 className={styles.AboutHeading}>About Me</h1>
        <Profile/>
        </>
    )
}

export default Aboutpage;