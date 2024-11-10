import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


const Profile = ()=>{
    return(
        <div className={styles.profileContainer}>
            <div className={styles.profileText}>
                <div>
                    <h2>Hi, I am Fatima,</h2>
                    <h2>Frontend Web Developer</h2>
                </div>
                <div>
                    <p>I am a passionate front-end developer student dedicated to crafting clean and effective user interfaces that bring ideas to life.
                        As I work towards becoming a proficient front-end developer, I am excited to take on new challenges that help me grow and enhance my skill set.</p>
                </div>
                <div>
                    <Link target="_blank" href={'https://static-resume-fatima.vercel.app/'}><button>View Resume</button></Link>
                </div>
            </div>
            <div>
                <Image className={styles.image} src={"/assets/profile-image.avif"} alt="profile-pic" width={100} height={100}/>
            </div>
        </div>
    )
}

export default Profile