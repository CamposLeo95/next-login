import styles from '../styles/pages.module.css';

import { useForm } from 'react-hook-form';
import { setCookie } from 'cookies-next';
import { Router } from 'next/router';

import Link from 'next/link';

import LoginCard from '../src/components/loginCard/LoginCard';
import ButtonLogin from '../src/components/buttonLogin/ButtonLogin';
import InputLogin from '../src/components/inputLogin/InputLogin';
import { useState } from 'react';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch(`/api/users/login`, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      const json = await response.json();
      if (response.status !== 200) throw new Error(json);

      setCookie('auth', json);
      router.push('/');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className={styles.background}>
      <LoginCard title={'Acessar seu usuário'}>
        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <InputLogin
            type={'email'}
            placeholder={'Digite seu email'}
            register={register('email')}
          />
          <InputLogin
            type={'password'}
            placeholder={'Digite sua senha'}
            register={register('password')}
          />
          <ButtonLogin type="submit">Entrar</ButtonLogin>
        </form>
        {error && <p>{error}</p>}
        <Link href={'/cadastro'}>Ainda não possui conta?</Link>
      </LoginCard>
    </div>
  );
}
