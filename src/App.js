import styles from "./App.module.css";

import TodoInvaders from "./todo-invaders";
import { useState } from "react";

import turretsvg from "./assets/turret.svg";

export default function Home() {
  const [turret, setTurret] = useState(null);
  console.log(styles);

  function rotateToMouse(e) {
    if (turret == null) return;

    var turretRect = turret.getBoundingClientRect();
    var turretX = turretRect.left + turretRect.width / 2;
    var turretY = turretRect.top + turretRect.height / 2;
    turret.style.transform = `rotate(${
      Math.atan2(e.clientY - turretY, e.clientX - turretX) + Math.PI / 2
    }rad)`;
  }

  const pew = () => {
    if (turret == null) return;
    turret.classList.add(styles.shoot);
  };

  const pewstop = () => {
    if (turret == null) return;
    turret.classList.remove(styles.shoot);
  };

  return (
    <div className={styles.container} onMouseMove={rotateToMouse} onClick={pew}>
      <main className={styles.main}>
        <TodoInvaders numdays={14} />
      </main>

      <footer className={styles.footer}>
        <img
          src={turretsvg}
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
