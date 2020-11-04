import { useState, useEffect } from "react";
import styles from "../styles/todoinvaders.module.css";

export default function TodoInvaders({ numdays }) {
  const [todos, setTodos] = useState([
    {
      title: "example",
      description: "bleh",
      duedate: Date.now() + (1000 * 60 * 60 * 24 * 6),
    },
  ]);

  const [trigger, setTrigger] = useState(0);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", todos);
  }, [todos]);

  // trigger once in the beginning
  useEffect(() => {
    //setTodos(localStorage.getItem("todos"));
    setRows(getRows(todos, numdays));
    setInterval(setTrigger(Date.now()), 60000);
  }, []);

  // trigger on time trigger
  useEffect(() => {
    setRows(getRows(todos, numdays));
  }, [trigger]);

  return <div className={styles.todocontainer}>{rows}</div>;
}

function getRows(todos, numdays) {
  let rows = [];
  for (let i = 0; i < numdays; ++i) {
    let invaders = [];
    let today = Date.now();
    let daysLeft = numdays - i;
    for (let todo of todos) {
      let diffDays = Math.ceil((todo.duedate - today) / (1000 * 60 * 60 * 24));
      if (diffDays == daysLeft) {
        let drop = -3 * (((todo.duedate - today) / (1000 * 60 * 60 * 24)) % 1);
        invaders.push(
          <img
            src="/invader.svg"
            className={styles.invader}
            style={{ transform: `translateY(${drop}rem)` }}
          ></img>
        );
      }
    }

    rows.push(
      <div className={styles.daysrow}>
        {numdays - i}
        {numdays - i == numdays ? "+" : ""} day{numdays - i > 1 ? "s" : ""} left
        {invaders}
      </div>
    );
  }

  return rows;
}
