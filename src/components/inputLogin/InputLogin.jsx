import styles from './inputLogin.module.css';

export default function InputLogin({ type, placeholder }) {
  return <input className={styles.input} type={type} placeholder={placeholder} />;
}
