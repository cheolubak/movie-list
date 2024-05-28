import React from 'react';
import Link from 'next/link';
import { twclsx } from '@/utils/twclsx';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Typography } from '@mui/material';

function BackButton() {
  return (
    <Link
      href={`/`}
      className={twclsx(
        'text-blue-500',
        'font-bold',
        'mb-4',
        'inline-flex',
        'justify-start',
      )}
    >
      <KeyboardArrowLeft fontSize='small' />
      <Typography variant='button'>GO BACK</Typography>
    </Link>
  );
}

export default BackButton;
