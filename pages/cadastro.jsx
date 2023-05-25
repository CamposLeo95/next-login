import styles from '../styles/pages.module.css';

import Link from 'next/link';

import LoginCard from '../src/components/loginCard/LoginCard';
import InputLogin from '../src/components/inputLogin/InputLogin';
import ButtonLogin from '../src/components/buttonLogin/ButtonLogin';

export default function CadastroPage() {
  return (
    <div className={styles.background}>
      <LoginCard title={'Cadastre-se'}>
        <form className={styles.form}>
          <InputLogin type={'name'} placeholder={'Digite seu nome'} />
          <InputLogin type={'email'} placeholder={'Digite seu email'} />
          <InputLogin type={'password'} placeholder={'Digite sua senha'} />
          <ButtonLogin>Entrar</ButtonLogin>
        </form>
        <Link href={'/login'}>Já possui uma conta?</Link>
      </LoginCard>
    </div>
  );
}
