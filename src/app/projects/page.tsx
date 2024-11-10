import Projects from "../components/projects";
import styles from "../page.module.css"


const Projectpage = ()=>{
    return(
        <>
        <h1 className={styles.projectHeading}>Projects</h1>
        <Projects/>
        </>
    )
}

export default Projectpage;