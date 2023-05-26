import styles from './inputLogin.module.css';

export default function InputLogin({ register, ...props }) {
  return (
    <>
      <input className={styles.input} {...register} {...props} />
    </>
  );
}
