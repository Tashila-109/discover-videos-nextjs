import Image from 'next/image';

import styles from './card.module.css';

const Card = props => {
  const { imgUrl, size } = props;
  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image src={imgUrl} alt='image' layout='fill' className={styles.cardImg} />
      </div>
    </div>
  );
};

export default Card;
