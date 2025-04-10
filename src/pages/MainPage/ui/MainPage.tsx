import { getUserByIdQuery } from '@entities/User/api/queries/getUserByIdQuery';
import Button from '@shared/ui/Button/Button';
import { useEffect } from 'react';

const MainPage = () => {
  const test = getUserByIdQuery(1);

  useEffect(() => {
    console.log(test, 'test');
  }, [test]);

  return (
    <div>
      <Button content={'Привет'} />
    </div>
  );
};

export default MainPage;
