import { Rating as RatingComponent, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { twclsx } from '@/utils/twclsx';
import { Typography } from '@mui/material';

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  return (
    <div className={twclsx('flex', 'justify-start', 'items-end', 'gap-2')}>
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
}

export default Rating;
