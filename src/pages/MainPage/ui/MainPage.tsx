import { getUserByIdQuery } from '@entities/User/api/queries/getUserByIdQuery';
import { useEffect } from 'react';

const MainPage = () => {
  const test = getUserByIdQuery(1);

  useEffect(() => {
    console.log(test, 'test');
  }, [test]);

  return <div></div>;
};

export default MainPage;
