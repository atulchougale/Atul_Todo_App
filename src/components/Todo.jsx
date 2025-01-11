import { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import { TodoList } from "./TodoList";
import TodoDate from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handelFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const ifTodoContentMatch = task.find(
      (curTask) => curTask.content == content
    );

    if (ifTodoContentMatch) return;

    if (task.includes(content)) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //todo add data in localstorage

  setLocalStorageTodoData(task);

  //todo   Delete Task

  const handelDeleteToto = (value) => {
    const updatedTask = task.filter((task) => task.content !== value);
    setTask(updatedTask);
  };

  //todo Clear All Task

  const handelClearTodoData = () => {
    setTask([]);
  };

  //todo handel Check

  const handelCheckTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content == content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoDate />
      <TodoForm onAddTodo={handelFormSubmit} />
      <section>
        <ul className="todo-list">
          {task.map((task) => (
            <TodoList
              key={task.id}
              data={task.content}
              onHandelDelete={handelDeleteToto}
              onHandelCheck={handelCheckTodo}
              check={task.checked}
            />
          ))}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handelClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};

export default Todo;
