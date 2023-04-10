import { useContext, useState } from 'react';
import Checkout from './Checkout'
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [checkoutDisplay, setCheckoutDisplay] = useState(false)
  const [confirmationScreen, setConfirmationScreen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)


  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const checkoutDisplayHandler = () => {
    setCheckoutDisplay(true)
  }

  const confirmationScreenHandler = () => {
    setConfirmationScreen(true)
  }

  const isSubmittingHandler = () => {
    setIsSubmitting(true)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  if(confirmationScreen){
    return(
      <Modal onClose={props.onClose}>
        <div className={classes.total}>
          <span>Thank you for your order!</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
      </Modal>
    );
  }

  if(isSubmitting){
    return(
      <Modal onClose={props.onClose}>
        <div className={classes.total}>
          <span>Submitting Order</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
      </Modal>
    );
  }
  

  if(checkoutDisplay && hasItems){
    return(
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {checkoutDisplay && <Checkout totalAmount={totalAmount} isSubmittingHandler={isSubmittingHandler} confirmationScreenHandler={confirmationScreenHandler} />}
      </Modal>
    );
  }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button onClick={checkoutDisplayHandler} className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
