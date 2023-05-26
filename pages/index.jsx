import styles from '../styles/Home.module.css';
import { getCookie } from 'cookies-next';

import { verifica } from '../services/user';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Pagina Principal</h1>

      <Link href={'/login'}> Login</Link>
    </div>
  );
}

//user o backend aqui dentro

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie('auth', { req, res });
    if (!token) throw new Error('token não autorizado');
    console.log(token);
    verifica(token);
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: {},
    };
  }
};
