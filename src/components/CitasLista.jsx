import React from "react";
import Citas from "./Citas";

const CitasLista = ({ arrayCitas }) => {
  return (
    <article className="mt-5">
      <div className="border-bottom border-black shadow">
        <div className="border p-3 text-center ">
          <p>
            <b>Citas</b>
          </p>
        </div>
      </div>

      <div className="border citas fondo shadow mb-5">
        <div className="row p-3">
          {arrayCitas.map((cita, posicion) => (
            <Citas cita={cita} key={posicion} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default CitasLista;
