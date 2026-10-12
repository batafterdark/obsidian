import styles from "./Footer.module.css";
import githubIcon from '../../assets/github.svg';
import phoneIcon from '../../assets/phone.svg';
import mailIcon from '../../assets/mail.svg';
export default function Footer() {
  return (
    <footer>
      <p className={styles.footerQuote}>Always here for you</p>
      <div className={styles.footerSupportWrapper}>
        <span><img src={phoneIcon} alt="contact icon" height="12" width='12' /><span>(213) 555-4679</span></span>
        <span><img src={mailIcon} alt="mail icon" height='12' width='12' /><span>support@obsidian.store</span></span>
        <span className={styles.footerLink} onClick={() => window.open('https://github.com/batafterdark/obsidian', '_blank')}><img src={githubIcon} alt="github icon" height="12" width='12' /><span>View Source</span></span>
      </div>
    </footer>
  )
};
