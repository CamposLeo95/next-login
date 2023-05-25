import styles from '../styles/pages.module.css';

import LoginCard from '../src/components/loginCard/LoginCard';

export default function CadastroPage() {
  return (
    <div className={styles.background}>
      <LoginCard title={'Cadastro'}></LoginCard>
    </div>
  );
}
