import ReactDOM from "react-dom";

// This component is used to render the backdrop
const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
      onClick={props.onClick}
    ></div>
  );
};

// This component is used to render the modal
const ModalOverlay = (props) => {
  return (
    <div className="fixed bg-white rounded-lg z-30 shadow-lg p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 overflow-auto">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

// This component is used to render the modal and the backdrop
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
