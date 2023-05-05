import styles from "./styles.module.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa'; 
function Footer(params) {
    return(
        <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialicons}>
          <a href="https://www.facebook.com"><FaFacebook /></a>
          <a href="https://www.instagram.com"><FaInstagram /></a>
        </div>
        EMAIL ID  : tw@gmail.com <br/>
        TELEPHONE : 0213456789
        <p>&copy; 2023 My Website. All Rights Reserved.</p>
      </div>
    </footer>
    )
}
export default Footer