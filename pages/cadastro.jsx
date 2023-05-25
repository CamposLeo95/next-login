import styles from '../styles/pages.module.css';

import LoginCard from '../src/components/loginCard/LoginCard';
import InputLogin from '../src/components/inputLogin/InputLogin';
import ButtonLogin from '../src/components/buttonLogin/ButtonLogin';

export default function CadastroPage() {
  return (
    <div className={styles.background}>
      <LoginCard title={'Cadastre-se'}>
        <InputLogin type={'name'} placeholder={'Insira seu nome'} />
        <InputLogin type={'email'} placeholder={'Insira seu email'} />
        <InputLogin type={'password'} placeholder={'Insira sua senha'} />
        <ButtonLogin>Entrar</ButtonLogin>
      </LoginCard>
    </div>
  );
}
