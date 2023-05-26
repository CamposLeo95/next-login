import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import styles from '../styles/pages.module.css';

import Link from 'next/link';

import LoginCard from '../src/components/loginCard/LoginCard';
import ButtonLogin from '../src/components/buttonLogin/ButtonLogin';
import InputLogin from '../src/components/inputLogin/InputLogin';

export default function CadastroPage() {
  const { register, handleSubmit } = useForm();
  const [erro, setErro] = useState('');
  const router = useRouter();

  async function handleFormSubmit(data) {
    try {
      const response = await fetch(`/api/users/cadastro`, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const json = await response.json();
      if (response.status !== 201) throw new Error(json);

      setCookie('auth', json);
      router.push('/');
    } catch (error) {
      setErro(error.message);
    }
  }

  return (
    <div className={styles.background}>
      <LoginCard title={'Cadastre-se'}>
        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <InputLogin type="name" placeholder="Digite seu nome" register={register('name')} />
          <InputLogin type="email" placeholder="Digite seu email" register={register('email')} />
          <InputLogin
            type="password"
            placeholder="Digite sua senha"
            register={register('password')}
          />
          <ButtonLogin type="submit">Cadastrar</ButtonLogin>
        </form>
        {erro && <p>{erro}</p>}
        <Link href={'/login'}>Já possui uma conta?</Link>
      </LoginCard>
    </div>
  );
}
