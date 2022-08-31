import Head from 'next/head';

import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';
import Card from '../components/card/card';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='Netflix app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar username='tashila' />
      <Banner title='Clifford the red dog' subTitle='a very cute dog' imgUrl='/static/clifford.webp' />
      <Card imgUrl='/static/clifford.webp' size='large' />
      <Card size='medium' />
      <Card imgUrl='/static/clifford.webp' size='small' />
    </div>
  );
}
