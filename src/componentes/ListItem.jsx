import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid"

const ListItem = ({ item, handleItemChecked, listItems, setListItems }) => {
  const { id, name, quantity, unit, correcta } = item;

  const deleteListItem = () => {
    const newList = listItems.filter(item => item.id !== id);
    localStorage.setItem("listItems", JSON.stringify(newList));
    setListItems(newList);
  }

  const cloneListItem = () => {
    const newList = [
      ...listItems,
      {
        ...item,
        id: uuidv4(),
      }
    ];

    localStorage.setItem("listItems", JSON.stringify(newList));
    setListItems(newList);
  }

  const editListItem = async () => {
    const { value } = await Swal.fire({
      title: "Item information",
      html: `
      <input 
      type="text" 
      id="name" name="name"  
      placeholder="name" 
      class="swal2-input"  
      value="${name}" 
      />
      
      <input 
      type="numeric" 
      id="quantity" 
      name="quantity" 
      placeholder="quantity" 
      class="swal2-input" 
      value="${quantity}"
      />
      
      <input 
      type="text" 
      id="unit" 
      name="unit" 
      placeholder="unit" 
      class="swal2-input" 
      value="${unit}"
      />
      
      <select 
      name="respuestac" 
      id="correcta" 
      class="swal2-select" > 
      <option selected>Respuesta  correcta</option> 
      <option value="quantity">Opción A</option> 
      <option value="unit">Opción B</option> 
      </select>`,

      confirmButtonText: "Save item",
      showCancelButton: true,
      cancelButtonText: "Discard",
      focusConfirm: false,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value;
        const quantity = Swal.getPopup().querySelector("#quantity").value;
        const unit = Swal.getPopup().querySelector("#unit").value;
        const correcta = Swal.getPopup().querySelector("#correcta").value;
        if (!name || !quantity || !unit || !correcta) {
          Swal.showValidationMessage("Please enter a name");
        }
        return { name, quantity, unit, correcta };
      }

    });
    if (!value.name || !value.quantity || !value.unit || !value.correcta) return

    const newList = listItems.map((item) => {
      if (item.id === id) {
        item.name = value.name;
        item.quantity = value.quantity;
        item.unit = value.unit;
        item.correcta = value.correcta;
      }

      return item;
    })

    localStorage.setItem("listItems", JSON.stringify(newList));
    setListItems(newList);
  }
  return (
    <div className="row mt-4">
      <div className="col">
        {
          correcta === "quantity" ?
            <h5 className="border-secondary text-secondary">{`${quantity}`}</h5> :
            `${quantity}`
        }
      </div>
      <div className="col">
        {
          correcta === "unit" ?
            <h5 className="border-secondary text-secondary">{`${unit}`}</h5> :
            `${unit}`
        }
      </div>
      <div className="col-6 ">{name}</div>
      <div className="col-5 col-md-3 btn-group" role="group">
        <button type="button" onClick={editListItem} className="btn btn-outline-primary bi bi-pencil-square" ></button>
        <button type="button" onClick={cloneListItem} className="btn btn-outline-secondary bi bi-files"></button>
        <button type="button" onClick={deleteListItem} className="btn btn-outline-danger bi bi-trash3"></button>
      </div>
    </div>
  )
}

export default ListItem;