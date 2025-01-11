const todoKay = "todoData";

export const getLocalStorageTodoData = () => {
  const rwaTodos = localStorage.getItem(todoKay);
  if (!rwaTodos) return [];
  return JSON.parse(rwaTodos);
};

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoKay, JSON.stringify(task));
};
