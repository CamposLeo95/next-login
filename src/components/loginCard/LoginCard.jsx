import styles from './loginCard.module.css';

export default function LoginCard({ children, title }) {
  return (
    <>
      <div className={styles.card}>
        <h4>{title}</h4>
        {children}
      </div>
    </>
  );
}
