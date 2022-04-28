import AddButton from "../AddButton";
import Todo from "../Todo";
import { useState } from "react";
import "./styles.css";

const ListContainer = () => {
  const [listItems, setListItems] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo !== "") {
      listItems.push(newTodo);
      setListItems(listItems);
    }
  };

  return (
    <div className="listContainerWrapper">
      <div className="listContainerHeader">
        <input onChange={(e) => setNewTodo(e.target.value)} />
        <AddButton onAdd={handleAddTodo} />
      </div>
      <div className="listContainerContent">
        <Todo todoList={listItems} />
      </div>
    </div>
  );
};

export default ListContainer;
