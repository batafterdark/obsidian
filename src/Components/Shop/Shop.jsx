import styles from './Shop.module.css';
import Product from "../Product/Product.jsx"
export default function Shop(props) {
  const cartIdsSet = new Set(props.cart.map(item => item.id));
  if (props.loading) {
    return <div className={styles.loadingContainer}><span className={styles.loadingSpinner}></span></div>
  }
  if (props.error) {
    return <p>Error:{props.error}</p>
  }
  return (
    <>
      <h1>We've got some honed items for you!</h1>
      <div className={styles.products}>
        {props.products.map((item) => (
          <Product
            key={item.id}
            data={item}
            onAdd={props.addToCart}
            onRemove={props.removeFromCart}
            isInCart={cartIdsSet.has(item.id)}
            setTotal={props.setTotal}
            total={props.total}
          />
        ))}
      </div>
    </>
  );
}
