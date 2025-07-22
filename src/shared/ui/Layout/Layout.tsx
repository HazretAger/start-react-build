import { Outlet } from "react-router-dom";
import ThemeToggler from "../../../features/ThemeToggler/ui/ThemeToggler";
import styles from "./Layout.module.scss"

const Layout = () => {
    return <div className={styles.wrapper}>
    <header className={styles.header}>
        <ThemeToggler />
    </header>

    <main className={styles.main}>
        <Outlet />
    </main>

    <footer className={styles.footer}>
        footer
    </footer>
    </div>
}

export default Layout;