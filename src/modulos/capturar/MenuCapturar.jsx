import React from "react";
import { useState } from "react";
import ClearListButton from "../../componentes/ClearListButton";
import NewItemButton from "../../componentes/NewItemButton";
import ListItem from "../../componentes/ListItem";

function MenuCapturar() {
  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem("listItems")) || []
  );

  const handleItemChecked = (e) => {
    const newList = listItems.map((item) => {
      if (e.target.name === item.id) {
        item.checked = !item.checked;
      }
      return item;
    });

    localStorage.setItem("listItems", JSON.stringify(newList));
    setListItems(newList);
  };

  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col text-start h4 pb-2 mb-4 text-danger border-bottom border-danger">
          <h1>Quiz Captura</h1>
        </div>
        <div className="col text-end">
          <NewItemButton listItems={listItems} setListItems={setListItems} />

          <ClearListButton listItems={listItems} setListItems={setListItems} />
        </div>
      </div>

      {listItems.length === 0 && (
        <div>
          <h3>Your list is empty...</h3>
          Please add a new item to start
        </div>
      )}

      <div className="card text-center mt-5">
        <div className="card-header">Lista de preguntas</div>
        <div className="card-body">
          {listItems.map((item) => (
            <ListItem
              item={item}
              handleItemChecked={handleItemChecked}
              listItems={listItems}
              setListItems={setListItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuCapturar;
