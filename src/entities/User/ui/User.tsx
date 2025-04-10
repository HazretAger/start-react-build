import { IUser } from './types';
import cls from 'classnames';
import styles from './User.module.scss';

const User = ({ className }: IUser) => {
  return <div className={cls(styles.User, {}, className)}>User</div>;
};

export default User;
