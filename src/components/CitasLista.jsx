import React from "react";
import Citas from "./Citas"

const CitasLista = () => {
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
        <Citas></Citas>
      </div>
      
    </article>
  );
};

export default CitasLista;
