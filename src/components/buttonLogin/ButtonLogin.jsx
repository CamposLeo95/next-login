import styles from './ButtonLogin.module.css';

export default function ButtonLogin({ children }) {
  return <button className={styles.button}>{children}</button>;
}
