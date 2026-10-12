import styles from './Product.module.css';
import starIcon from '../../assets/star.svg';
import cartIcon from '../../assets/cart.svg';
import cartCream from '../../assets/cartCream.svg';
export default function Product(props) {
  function handleAddClick() {
    props.setAmount(props.data.id,props.data.quantity + 1);
    props.setCartSize(props.cartSize + 1);
    props.setTotal(props.total + props.data.price);
  }
  function handleRemoveClick() {
      if (props.data.quantity === 1) return;
      props.setAmount(props.data.id, props.data.quantity - 1);
      props.setCartSize(props.cartSize - 1);
      props.setTotal(props.total - props.data.price);
  }
  function handleAddToCart() {
    props.onAdd(props.data);
    props.setTotal(props.total + props.data.price);
  }
  function handleRemoveFromCart() {
    props.onRemove(props.data.id, (props.currentPage === 'cart' ? props.data.quantity : 1));
    props.setTotal(props.total - props.data.price * (props.currentPage === 'cart' ? props.data.quantity : 1));
  }
  return (
    <div className={styles.product}>
      <img src={props.data.image} alt={`${props.data.title}'s image`} />
      <p className={styles.title}>{props.data.title}</p>
      <p className={styles.description}>{props.data.description}</p>
      <p className={styles.price}>${props.data.price}</p>
      <p className={styles.rating}><img src={starIcon} alt="star icon" height="13" width='12' />{props.data.rating.rate} ({props.data.rating.count})</p>
      {props.currentPage==='cart' && <div className={styles.quantityCont}>
        <span>Quantity</span>
        <span className={styles.quantMinus} onClick={() => handleRemoveClick()}>-</span>
        <span className={styles.quantity}>{props.data.quantity}</span>
        <span className={styles.quantPlus} onClick={() => handleAddClick()}>+</span>
      </div>}
      {props.isInCart
      ? <button className={styles.itemRemovalBtn} onClick={() => handleRemoveFromCart()}>Remove from Cart <img src={cartIcon} alt="cart icon" height='12' width='12'/></button>
        : <button className={styles.itemAddBtn} onClick={() => handleAddToCart()}>Add to Cart <img src={cartCream} alt="cart icon" height='12' width='12'/></button>}
    </div>
  )
}
