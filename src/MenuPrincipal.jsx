import BotonCapturar from "./modulos/capturar/BotonCapturar";
import BotonJugar from "./modulos/juego/BotonJugar";

function MenuPrincipal() {
  return (
    <div className="container text-center mt-4">
      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
        <p className="fs-2 fw-bold text-black">
          QUIZ GAME | Pon a prueba tu conocimiento
        </p>
      </div>
      <div className="border border-secondary-subtle mt-5 ">
        <p className="fs-4">Selecciona una opción...</p>
          <BotonCapturar />
          <BotonJugar />
          <br/> <br/>
      </div>
    </div>
  );
}

export default MenuPrincipal;
