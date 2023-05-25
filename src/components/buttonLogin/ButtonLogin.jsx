import styles from './ButtonLogin.module.css';

export default function ButtonLogin({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
