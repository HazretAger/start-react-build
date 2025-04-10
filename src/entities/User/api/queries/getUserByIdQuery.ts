import { useQuery } from 'react-query';
import { getUserById } from '../requests/getUserById';

export const getUserByIdQuery = (id: number) => {
  const { data } = useQuery(['user', id], () => getUserById(id));
  console.log(data);
  return data;
};
