import Head from "next/head";
import styles from "../styles/Home.module.css";

import TodoInvaders from "../components/todoinvaders";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TODO Invaders! - Raka Gunarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TodoInvaders numdays={14}/>
      </main>

      <footer className={styles.footer}>
        <img src="/turret.svg" alt="Turret" className={styles.turret} />
      </footer>
    </div>
  );
}
