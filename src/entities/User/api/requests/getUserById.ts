import { $API } from '@shared/config/api';

export const getUserById = async (id: number) => {
  return await $API.get(`/users/${id}`);
};
