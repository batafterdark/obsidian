import { Link } from 'react-router';
import styles from './Header.module.css'
import cartIcon from "../../assets/cart.svg";
export default function Header(props) {
  return (
    <header>
      <div className={styles.brandNTagline}>
        <p className={styles.brandName}>Obsidian</p>
        <p className={styles.tagLine}>Be Sharp</p>
      </div>
      <nav>
        <Link onClick={() => props.setActive('home')} className={props.active === 'home' ? styles.activeBtn : ''} to='/home'>Home</Link>
        <Link onClick={()=>props.setActive('shop')} className={props.active === 'shop' ? styles.activeBtn : ''} to='/shop'>Shop</Link>
        <Link onClick={() => props.setActive('cart')} className={`${props.active === 'cart' ? styles.activeBtn : ''} ${styles.cartLink}`} to='/cart'>
          <span>Cart</span>
          <img src={cartIcon} alt="cart icon" height='12' width='12' className={styles.cartNavIcon} />
          <span>({props.cartSize})</span>
        </Link>
      </nav>
    </header>
  )
}
