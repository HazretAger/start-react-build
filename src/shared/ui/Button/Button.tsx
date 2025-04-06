import { IButton } from "./types";
import cls from "classnames";
import styles from "./Button.module.scss";

const Button = ({ content }: IButton) => {
    return <div className={cls(styles.button, { [styles.test]: true })}>{content}</div>
}

export default Button;