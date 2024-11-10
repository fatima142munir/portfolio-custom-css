import Image from "next/image"
import styles from "../page.module.css"
import Link from "next/link"

const Projects= ()=>{
    return(
        <>
            <div className={styles.projectsContainer}>
                <div className={styles.projectDiv}>
                    <div><h3>Resume Builder</h3></div>
                    <div><p>Developed a responsive resume builder website that allows users to easily create professional resumes by filling in simple forms, providing an efficient solution for job seekers.</p></div>
                    <div><Link target="_blank" href={'https://dynamic-editable-resume-builder-seven.vercel.app/'}><Image className={styles.projectImage} width={200} height={200} src={"/assets/Capture-3.PNG"} alt="Project Image"></Image></Link></div>
                </div>
                <div className={styles.projectDiv}>
                    <div><h3>Website Design-CSS</h3></div>
                    <div><p>Designed the site with Tailwind CSS, that can serve as a foundation for future projects, emphasizing responsive techniques such as flexible grids, media queries, and relative units.</p></div>
                    <div><Link target="_blank" href={'https://bespoke-macaron-65d19a.netlify.app/'}><Image className={styles.projectImage} width={200} height={200} src={"/assets/Capture-4.PNG"} alt="Project Image"></Image></Link></div>
                </div>                
            </div>
            <div className={styles.projectsContainer}>
                <div className={styles.projectDiv}>
                    <div><h3>Travel Website Desgn-CSS</h3></div>
                    <div><p>This project is a fully responsive travel website designed to enhance my custom CSS skills, providing a seamless experience across various devices.</p></div>
                    <div><Link target="_blank" href={'https://travel-website-with-custom-css.vercel.app/'}><Image className={styles.projectImage} width={200} height={200} src={"/assets/web-custom-css.PNG"} alt="Project Image"></Image></Link></div>
                </div>
                <div className={styles.projectDiv}>
                    <div><h3>Travel Website Design-Tailwind</h3></div>
                    <div><p>This project is a modern, fully responsive travel website crafted using Tailwind CSS. The design emphasizes clean aesthetics and streamlined functionality, with dedicated sections to popular destinations.</p></div>
                    <div><Link target="_blank" href={'https://travel-website-with-tailwind-css.vercel.app/'}><Image className={styles.projectImage} width={200} height={200} src={"/assets/web-tailwind.PNG"} alt="Project Image"></Image></Link></div>
                </div>
            </div>
        </>
    )
}

export default Projects