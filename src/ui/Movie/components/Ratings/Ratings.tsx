import { Typography } from '@mui/material';
import { Rating as RatingComponent, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import styles from './Ratings.module.css';

interface Props {
  rating: number;
}

export const Ratings = ({ rating }: Props) => {
  return (
    <div className={styles.ratings}>
      <RatingComponent
        itemStyles={{
          activeFillColor: '#FFCC45',
          inactiveFillColor: '#CED4DA',
          itemShapes: RoundedStar,
        }}
        items={10}
        readOnly
        spaceBetween='none'
        style={{ maxWidth: 250 }}
        value={rating}
      />
      <Typography variant='body2'>{rating}</Typography>
    </div>
  );
};
