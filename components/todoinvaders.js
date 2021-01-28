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

  const [rows, setRows] = useState([]);
  const [updateInterval, setUpdateInterval] = useState(null);

  const destroyTodo = (e, idx) => {
    e.target.onanimationend = () => {
      todos.splice(idx, 1);
      setTodos(todos);
    };

    e.target.classList.add(styles.explode);
  };

  useEffect(() => {
    localStorage.setItem("todos", todos);
    if (updateInterval)
      clearInterval(updateInterval);

    setRows(getRows(todos, numdays, destroyTodo));
    setUpdateInterval(
      setInterval(() => {
        setRows(getRows(todos, numdays, destroyTodo));
      }, 1000)
    );
  }, [todos]);

  // trigger once in the beginning
  useEffect(() => {
    //setTodos(localStorage.getItem("todos"));
    setRows(getRows(todos, numdays, destroyTodo));

    setUpdateInterval(
      setInterval(() => {
        setRows(getRows(todos, numdays, destroyTodo));
      }, 1000)
    );
  }, []);

  return <div className={styles.todocontainer}>{rows}</div>;
}

function getRows(todos, numdays, destroyTodo) {
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
            onClick={(e) => destroyTodo(e, todos.indexOf(todo))}
          >
            <img
              src={
                new Date().getSeconds() % 2 == 0
                  ? "/invader.svg"
                  : "/invader2.svg"
              }
            ></img>
            <span className={styles.description}>{todo.description}</span>
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
