import styles from "../page.module.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.iconContainer}>
                <Link target="_blank" href={'https://github.com/fatima142munir'}><div><FaGithub className={styles.iconWH} /></div></Link>
                <Link href={'mailto:fmunir142@gmail.com'}><div><MdOutlineMailOutline className={styles.iconWH} /></div></Link>
                <Link target="_blank" href={'https://www.linkedin.com/in/fatimamunir'}><div><FaLinkedin className={styles.iconWH} /></div></Link>
                <Link target="_blank" href={'https://x.com/FatimaMunir142?t=OjlkvodMCRwHZLMYL2Wf5A&s=08'}><div><FaXTwitter className={styles.iconWH} /></div></Link>   
            </div>
            <div>
                <p>Portfolio fatima munir copywrite &copy;</p>
            </div>
        </div>
    )
}

export default Footer