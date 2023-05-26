// import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import styles from '../styles/pages.module.css';

import Link from 'next/link';

import LoginCard from '../src/components/loginCard/LoginCard';
import ButtonLogin from '../src/components/buttonLogin/ButtonLogin';
import InputLogin from '../src/components/inputLogin/InputLogin';

export default function CadastroPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleFormSubmit(data) {
    console.log(data);
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
        <Link href={'/login'}>Já possui uma conta?</Link>
      </LoginCard>
    </div>
  );
}
