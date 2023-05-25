import styles from '../styles/pages.module.css';

import Link from 'next/link';

import LoginCard from '../src/components/loginCard/LoginCard';
import ButtonLogin from '../src/components/buttonLogin/ButtonLogin';
import InputLogin from '../src/components/inputLogin/InputLogin';

export default function LoginPage() {
  return (
    <div className={styles.background}>
      <LoginCard title={'Acessar seu usuario'}>
        <form className={styles.form}>
          <InputLogin type={'email'} placeholder={'Digite seu email'} />
          <InputLogin type={'password'} placeholder={'Digite sua senha'} />
          <ButtonLogin>Entrar</ButtonLogin>
        </form>
        <Link href={'/cadastro'}>Ainda não possui conta?</Link>
      </LoginCard>
    </div>
  );
}
