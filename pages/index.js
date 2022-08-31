import Head from 'next/head';

import Banner from '../components/banner/banner';
import NavBar from '../components/nav/navbar';
import Card from '../components/card/card';
import SectionCards from '../components/card/section-cards';

import styles from '../styles/Home.module.css';

export default function Home() {
  const disneyVideos = [
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='Netflix app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar username='tashila' />
      <Banner title='Clifford the red dog' subTitle='a very cute dog' imgUrl='/static/clifford.webp' />
      <div className={styles.sectionWrapper}>
        <SectionCards title='Disney' videos={disneyVideos} size='large' />
        <SectionCards title='Disney' videos={disneyVideos} size='medium' />
      </div>
    </div>
  );
}
