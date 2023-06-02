import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
const ProfileWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
    <div><button onClick={openModal} className="btn btn-dark modal-open-button"><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} /></button>

    </div>
    {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="modal-close-button">
              Cerrar Modal
            </button>
            <p>¡Botón clickeado!</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileWidget