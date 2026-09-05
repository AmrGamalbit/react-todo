import useLocalStorage from "./useLocalStorage";

const useCollection = (key, initialValue) => {
  const [items, setItems] = useLocalStorage(key, initialValue);

  const addItem = (item) => {
    setItems((prevItems) => [
      ...prevItems,
      { id: crypto.randomUUID(), ...item },
    ]);
  };

  const updateItem = (id, updates) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updates } : item,
      ),
    );
  };

  const removeItem = (id) =>
    setItems((prevItems) => prevItems.filter((item) => item.id != id));

  return { items, setItems, addItem, updateItem, removeItem };
};

export default useCollection;
