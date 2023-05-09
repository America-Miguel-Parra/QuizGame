import React, { useState } from 'react';


const FormularioJugar = ({ item, handleItemChecked, listItems, setListItems }) => {
    const { id, name, quantity, unit, correcta } = item;

    const [showMessage, setShowMessage] = useState(false);

    const handleClick = (quantity) => {
        setShowMessage(correcta === quantity);
    };

    return (
        <div className="row mt-4">
            <div className='col'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => handleClick("quantity")}>
                    {quantity}
                </button>
                {showMessage && correcta === "quantity" && <p>¡Respuesta correcta!</p>}
            </div>

            <div className='col'>
                <button
                    className='btn btn-outline-secondary'
                    onClick={() => handleClick("unit")}
                >
                    {unit}
                </button>
                {showMessage && correcta === "unit" && <p>¡Respuesta correcta!</p>}
            </div>


            <div className="col-6 ">{name}</div>
        </div>
    )
}

export default FormularioJugar;