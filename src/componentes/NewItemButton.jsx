import React from "react"
import Swal from "sweetalert2"
import { v4 as uuidv4 } from "uuid"

const NewItemButton = ({ listItems, setListItems }) => {
  const newIteModal = async () => {
    const { value } = await Swal.fire({
      title: "Nueva pregunta",
      html: `
          <input type="text" id="name" name="name"  placeholder="Pregunta" class="swal2-input" />
          <input type="numeric" id="quantity" name="quantity" placeholder="Opción A" class="swal2-input" />
          <input type="text" id="unit" name="unit" placeholder="Opción B" class="swal2-input" />
          <select 
          name="respuestac" 
          id="correcta" 
          class="swal2-select" > 
          <option selected>Respuesta correcta</option> 
          <option value="quantity">Opción A</option> 
          <option value="unit">Opción B</option> 
          </select>
          `,

      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Olvidar",
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

    })
    const newList = [
      ...listItems,
      {
        id: uuidv4(),
        ...value,
        checked: false,
      }
    ]
    localStorage.setItem("listItems", JSON.stringify(newList));
    setListItems(newList)
  }
  return (
    <button
      onClick={newIteModal}
      type="button" className="btn btn-outline-primary bi bi-plus-circle ">
    </button>
  )
}

export default NewItemButton