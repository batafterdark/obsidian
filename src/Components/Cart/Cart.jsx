import Product from "../Product/Product.jsx";
import styles from "./Cart.module.css"
export default function Cart(props) {
  const displayTotal = props.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  return (
    <div>
      <div className={styles.total}>Total: {displayTotal}</div>
    <div className={styles.cartItems}>
      {props.cart.map((item)=> (
            <Product key={item.id} data={item} onRemove={props.removeFromCart} isInCart={true} cartSize={props.cartSize} setCartSize={props.setCartSize} currentPage={props.currentPage} total={props.total} setTotal={props.setTotal} setAmount={props.setAmount} />
          )
      )}
      </div>
    </div>
  )
}
