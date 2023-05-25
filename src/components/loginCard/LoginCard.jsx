import styles from './loginCard.module.css';

export default function LoginCard({ children, title }) {
  return (
    <>
      <div className={styles.card}>
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
}
