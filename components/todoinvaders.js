import React, { useState, useEffect, cloneElement } from "react";
import styles from "../styles/todoinvaders.module.css";

export default function TodoInvaders({ numdays }) {
  const [todos, setTodos] = useState([]);

  const [rows, setRows] = useState([]);
  const [updateInterval, setUpdateInterval] = useState(null);

  const destroyTodo = (e, todo) => {
    e.target.onanimationend = () => {
      todos.splice(todos.indexOf(todo), 1);
      setTodos(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    e.target.classList.add(styles.explode);
  };

  const [showNewTodoGhost, setShowNewTodoGhost] = useState(false);
  const [newTodoGhostOffset, setNewTodoGhostOffset] = useState(0);
  const newTodoHover = (e) => {
    setShowNewTodoGhost(true);
    setNewTodoGhostOffset(((e.pageX - 80) / window.innerWidth) * 100);
  };
  const newTodoHoverOff = () => setShowNewTodoGhost(false);

  const createTodo = () => {
    let title = window.prompt("TODO Title");
    let desc = window.prompt("TODO Description");
    let due = Date.parse(window.prompt("TODO Due Date", "yyyy-mm-dd")) || null;
    if (!due) return window.alert("Invalid Date!");
    todos.push({
      title: title,
      description: desc,
      duedate: due,
      offset: newTodoGhostOffset,
    });
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    if (updateInterval) clearInterval(updateInterval);

    setRows(getRows(todos, numdays, destroyTodo));
    setUpdateInterval(
      setInterval(() => {
        setRows(getRows(todos, numdays, destroyTodo));
      }, 1000)
    );
  }, [todos]);

  useEffect(() => setTodos(JSON.parse(localStorage.getItem("todos"))), []);

  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "8rem",
        }}
        onMouseMove={(e) => newTodoHover(e)}
        onMouseLeave={newTodoHoverOff}
        onClick={createTodo}
      >
        <figure
          style={{
            transform: `translateX(${newTodoGhostOffset}vw)`,
            opacity: 0.5,
          }}
          hidden={!showNewTodoGhost}
          className={`${styles.invader} ${styles.ghost}`}
        >
          <img src="/invader.svg" />
        </figure>
      </div>

      <div className={styles.todocontainer}>{rows}</div>
    </React.Fragment>
  );
}

function getRows(todos, numdays, destroyTodo) {
  let rows = [];
  for (let i = 0; i < numdays; ++i) {
    let invaders = [];
    let today = Date.now();
    let daysLeft = numdays - i;
    for (let todo of todos) {
      let diffDays = Math.ceil((todo.duedate - today) / (1000 * 60 * 60 * 24));
      if (
        diffDays == daysLeft ||
        (daysLeft == numdays && diffDays >= daysLeft)
      ) {
        let drop = (diffDays == daysLeft) ? -3 * (((todo.duedate - today) / (1000 * 60 * 60 * 24)) % 1) : -6;
        invaders.push(
          <figure
            style={{
              transform: `translateY(${drop}rem) translateX(${todo.offset}vw)`,
            }}
            className={styles.invader}
            onClick={(e) => destroyTodo(e, todo)}
          >
            <img
              src={
                new Date().getSeconds() % 2 == 0
                  ? "/invader.svg"
                  : "/invader2.svg"
              }
            ></img>
            <span className={styles.description}>{todo.description}<br/>{`Due: ${new Date(todo.duedate).toDateString()}`}</span>
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
