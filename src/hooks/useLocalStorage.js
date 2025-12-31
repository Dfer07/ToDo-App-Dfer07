import React from "react";

function useLocalStorage(nameItem, initialValue) {
  const [items, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        const toDosLocalStorage = localStorage.getItem(nameItem);
        let parseToDos;
        if (!toDosLocalStorage) {
          parseToDos = initialValue;
          setItems(parseToDos);
        } else {
          parseToDos = JSON.parse(toDosLocalStorage);
          setItems(parseToDos);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, [nameItem, initialValue]);

  const saveItems = (ToDos) => {
    localStorage.setItem(nameItem, JSON.stringify(ToDos));
    setItems(ToDos);
  };

  return { items, saveItems, loading, error };
}

export { useLocalStorage };
