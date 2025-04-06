import { IToggler } from "./types";
import cls from "classnames";
import styles from "./Toggler.module.scss";

const Toggler = ({ value, icon, handler }: IToggler) => {
    return <div className={cls(styles.Toggler)}>
        <input id="Toggler" className={styles.TogglerCheckbox} checked={value} onChange={handler} type="checkbox" />
        <label className={styles.TogglerLabel} htmlFor="Toggler"> 
            <span className={styles.TogglerButton}>{icon}</span>
        </label>    
    </div>
}

export default Toggler;