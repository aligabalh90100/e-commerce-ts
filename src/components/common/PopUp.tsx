import { Button, Modal, Spinner } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { modalActions } from "../../store/ModalSlice";
import { useNavigate } from "react-router-dom";

type TPopUp = {
  header: string;
  text: string;
  actionButton: string;
  navigationLink?: string;
  backdop?: string;
  actionFunction?: () => void;
  loading?: boolean;
  error?: string | null;
};
const PopUp = ({
  header,
  text,
  actionButton,
  navigationLink,
  backdop,
  actionFunction,
  loading,
  error,
}: TPopUp) => {
  const { showModal } = useAppSelector((state) => state.modalSlice);
  const dispatch = useAppDispatch();
  const toggleModel = () => {
    dispatch(modalActions.toggleModel());
  };

  const navigate = useNavigate();
  const handleActionFunction = () => {
    toggleModel();
    if (navigationLink) {
      navigate(navigationLink);
    } else {
      if (actionFunction) {
        actionFunction();
      }
    }
  };
  return (
    <Modal
      show={showModal}
      onHide={toggleModel}
      backdrop={backdop ? "static" : true}
    >
      <Modal.Header>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="fw-medium">
        {text}
        {!loading && error && (
          <p style={{ color: "#dc3545", marginTop: "10px" }}>{error}</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={toggleModel}>
          Close
        </Button>
        <Button variant="primary" onClick={handleActionFunction}>
          {loading ? (
            <Spinner size="sm" animation="border"></Spinner>
          ) : (
            actionButton
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
