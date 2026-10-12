import styles from "./Home.module.css"
import { Link } from "react-router";
export default function Home(props) {
  return(
    <div>
      <h1 className={styles.motto}>
        Sharp style for modern age
      </h1>
      <div className={styles.descCont}>
        <p className={styles.desc}>We got offers for you that you can't decline</p>
        <p className={styles.weGot}>A whole lot of items just dropped, check 'em out</p>
        <Link className={styles.btn} to="/shop" onClick={() => props.setActive('shop')}>Shop Now</Link>
      </div>
    </div>
  );
};
