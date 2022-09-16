import Head from 'next/head';
import NavBar from '../../components/nav/navbar';

import SectionCards from '../../components/card/section-cards';
import { redirectUser } from '../../utils/redirectUser';
import { getMyList } from '../../lib/videos';

import styles from '../../styles/MyList.module.css';

const MyList = ({ myListVideos }) => {
  return (
    <div>
      <Head>
        <title>My list</title>
      </Head>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.sectionWrapper}>
          <SectionCards title='My List' videos={myListVideos} size='small' />
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { userId, token } = await redirectUser(context);
  const videos = await getMyList(userId, token);

  return {
    props: {
      myListVideos: videos,
    },
  };
}

export default MyList;
