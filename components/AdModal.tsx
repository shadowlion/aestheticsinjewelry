import Image from "next/image";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const AdModal = () => {
  const [show, setShow] = useState(true);

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Special Sale!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center p-5">
          <Image src="/ad.jpg" alt="Black Friday Ad" width="500" height="500" />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdModal;
