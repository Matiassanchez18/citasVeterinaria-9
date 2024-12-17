import React from "react";
import Citas from "./Citas";

const CitasLista = ({ arrayCitas }) => {
  return (
    <article className="mt-5">
      <div className="border-bottom border-black shadow">
        <div className="border p-3 text-center ">
          <p>
            <b>No hay citas</b>
          </p>
        </div>
      </div>

      <div className="border citas fondo shadow mb-5">
        <div className="row p-3">
          {arrayCitas.map((citas, posicion) => (
            <Citas citas={citas} key={posicion}></Citas>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CitasLista;
