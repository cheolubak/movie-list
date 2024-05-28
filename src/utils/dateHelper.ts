import dayjs from 'dayjs';

export const getRangeDates = (start: string, end?: string) => {
  const diff = dayjs(end ?? dayjs()).diff(dayjs(start), 'year', true);
  const years = Math.floor(diff);
  const months = Math.floor((diff % 1) * 12) + 1;
  return `${years > 0 ? `${years + (months > 11 ? 1 : 0)}년 ` : ''}${
    months < 12 && months > 0 ? `${months}개월` : ''
  }`;
};

export const betweenDates = (start: string, end?: string) => {
  return ` ${dayjs(start).format('YYYY.MM')} ~ ${
    end ? dayjs(end).format('YYYY.MM') : '현재'
  }`;
};
