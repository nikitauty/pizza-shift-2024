import { Typography } from '@components/index';

import styles from './Card.module.css';

export interface CardProps {
  pizza: Pizza;
}

export const Card = ({ pizza }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={pizza.img} alt='Картинка пиццы' className={styles.image} />
      <Typography tag='h3' variant='title_h3'>
        {pizza.name}
      </Typography>
      <Typography tag='p' variant='paragraph14_regular'>
        {pizza.description}
      </Typography>
      <Typography tag='p' variant='title_h3'>
        от 299 ₽
      </Typography>
    </div>
  );
};
