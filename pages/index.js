import Head from "next/head";
import styles from "../styles/Home.module.css";

import TodoInvaders from "../components/todoinvaders";
import { useState } from "react";

export default function Home() {
  const [turret, setTurret] = useState(null);

  function rotateToMouse(e) {
    if (turret == null) return;

    var turretRect = turret.getBoundingClientRect();
    var turretX = turretRect.left + turretRect.width / 2;
    var turretY = turretRect.top + turretRect.height / 2;
    turret.style.transform = `rotate(${Math.atan2(
      e.clientY - turretY,
      e.clientX - turretX
    ) + Math.PI / 2}rad)`;
  }

  const pew = () => {
    if (turret == null) return;
    turret.classList.add(styles.shoot);
  }

  const pewstop = () => {
    if (turret == null) return;
    turret.classList.remove(styles.shoot);
  }

  return (
    <div className={styles.container} onMouseMove={rotateToMouse} onClick={pew}>
      <Head>
        <title>TODO Invaders! - Raka Gunarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TodoInvaders numdays={14} />
      </main>

      <footer className={styles.footer}>
        <img
          src="/turret.svg"
          alt="Turret"
          className={styles.turret}
          onAnimationEnd={pewstop}
          ref={(ref) => {
            setTurret(ref);
          }}
        />
      </footer>
    </div>
  );
}
