import Head from "next/head";
import utilStyles from "../styles/utils.module.css"

const name = "Tomura"
export const siteTitle="Next.js blog";
import styles from "./layout.module.css"

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicom.ico" />
            </Head>
            <header className={styles.header}>
                <img src="/images/profile.jpg" className={utilStyles.borderCircle} />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;