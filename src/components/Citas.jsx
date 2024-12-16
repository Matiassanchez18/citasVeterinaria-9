import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CircleFill } from "react-bootstrap-icons";

const Citas = () => {
  return (
    <section>
  <article>
    <div className="row p-3">
      <div className="col-12 col-md-6 col-sm-6 mt-2">
        <Card className="h-100 shadow-lg border-0 rounded-3">
          <Card.Header className="bg-light rounded-top">
            <ul className="list-unstyled">
              <li className="fs-4 text-primary">Mascota: lule</li>
              <li className="fs-5 lead text-muted">Dueño: pepe</li>
            </ul>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <div className="row">
                <div className="col-12 col-md-6 col-sm-6 mt-2 fs-4">
                  <p className="ms-5 text-muted">Fecha</p>
                </div>
                <div className="col-12 col-md-6 col-sm-6 mt-2">
                  <p className="border p-2 me-3 rounded-2 text-center bg-light">142451</p>
                </div>

                <div className="col-12 col-md-6 col-sm-6 mt-2 fs-4">
                  <p className="ms-5 text-muted">Hora</p>
                </div>
                <div className="col-12 col-md-6 col-sm-6 mt-2">
                  <p className="border p-2 me-3 rounded-2 text-center bg-light">142451</p>
                </div>

                <div className="col-12 col-md-6 col-sm-6 mt-2 fs-4">
                  <p className="ms-5 text-muted">Síntomas</p>
                </div>
                <div className="col-12 col-md-6 col-sm-6 mt-2">
                  <p className="border p-2 me-3 rounded-2 text-center bg-light">142451</p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger" className="px-4 py-2 rounded-3 shadow-sm">borrar</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  </article>
</section>

  );
};

export default Citas;
