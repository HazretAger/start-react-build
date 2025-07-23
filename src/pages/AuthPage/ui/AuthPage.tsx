import cls from 'classnames';
import styles from './AuthPage.module.scss';
import AuthForm from '@widgets/ui/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <div className={cls(styles.AuthPage)}>
      <AuthForm content="AuthForm" />
    </div>
  );
};

export default AuthPage;
