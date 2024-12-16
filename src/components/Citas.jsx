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
            <Card>
              <Card.Header>
                <CircleFill className="fs-3 me-1 text-primary  "></CircleFill>
                Mascota: pepe
                <p className="ms-4 lead fs-5">Dueño: pepetito</p>
              </Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer>Featured</Card.Footer>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-sm-6 mt-2">
            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer>Featured</Card.Footer>
            </Card>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Citas;
