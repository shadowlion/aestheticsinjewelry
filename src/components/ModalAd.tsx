import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const AdModal = ({ image }: { image: StaticImageData }) => {
  const [modalState, setModalState] = useState<boolean>(true);

  return (
    <div
      className={modalState ? "modal fade show d-block" : "modal fade"}
      tabIndex={-1}
      id="ad"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sale!</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={(): void => setModalState(false)}
            ></button>
          </div>
          <div className="modal-body text-center">
            <Image src={image} alt="advertisement" layout="intrinsic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdModal;
