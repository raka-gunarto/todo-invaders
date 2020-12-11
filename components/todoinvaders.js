import { useState, useEffect, cloneElement } from "react";
import styles from "../styles/todoinvaders.module.css";

export default function TodoInvaders({ numdays }) {
  const [todos, setTodos] = useState([
    {
      title: "example",
      description: "bleh",
      offset: Math.random() * 70 + 10,
      duedate: Date.now() + 1000 * 60 * 60 * 24 * 12,
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

    let interval = setInterval(() => {
      setTrigger(Date.now());
    }, 1000);

    // cleanup intervals
    return () => {
      clearInterval(interval);
    };
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
          <figure
            style={{
              transform: `translateY(${drop}rem) translateX(${todo.offset}vw)`,
            }}
            className={styles.invader}
          >
            <img
              src={Math.random() <= 0.5 ? "/invader.svg" : "/invader2.svg"}
            ></img>
            <figcaption>{todo.title}</figcaption>
          </figure>
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
