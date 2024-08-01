import { KeyboardArrowLeft } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import styles from './Back.module.css';

export const Back = () => {
  return (
    <Link
      className={styles.back}
      href={`/`}
    >
      <KeyboardArrowLeft fontSize='small' />
      <Typography variant='button'>GO BACK</Typography>
    </Link>
  );
};
