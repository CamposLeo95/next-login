import styles from '../styles/pages.module.css';

import LoginCard from '../src/components/loginCard/LoginCard';

export default function LoginPage() {
  return (
    <div className={styles.background}>
      <LoginCard title={'Login'}></LoginCard>
    </div>
  );
}
