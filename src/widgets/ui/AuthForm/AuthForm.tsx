import { IAuthForm, Inputs } from './types';
import { Button, Input, Text } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AuthForm.module.scss';
import cls from 'classnames';

const AuthForm = ({ content }: IAuthForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={cls(styles.authForm)}>
      <form onSubmit={handleSubmit(onSubmit)} className={cls(styles.wrapper)}>
        <Text textStyle="3xl" className={cls(styles.title)}>
          Логин
        </Text>
        <div className={cls(styles.fieldsWrapper)}>
          <Input placeholder={'Введите ваш Email'} {...register('email')} />
          <Input placeholder={'Введите ваш пароль'} {...register('password')} />
        </div>
        <Button
          type="submit"
          //   loading
          loadingText="Вход"
          spinnerPlacement="end"
          colorPalette="teal"
          variant="solid"
        >
          Войти
        </Button>
      </form>
    </div>
  );
};

export default AuthForm;
