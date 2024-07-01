import { Col, Modal, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { modalActions } from "../../store/ModalSlice";
import { TProduct } from "../../types/types";
type OrderDetails = {
  selectedProduct: TProduct[];
};
const ListOrderModal = ({ selectedProduct }: OrderDetails) => {
  const { ListOrder } = useAppSelector((state) => state.modalSlice);
  const dispatch = useAppDispatch();
  function handleToggle() {
    dispatch(modalActions.toggleListOrder());
  }
  return (
    <Modal show={ListOrder} onHide={handleToggle}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedProduct.map((el) => {
          return (
            <Row
              className="mb-4 d-flex align-items-center justify-content-center"
              key={el.id}
            >
              <Col xs={2}>
                <div style={{ width: "50px", height: "50px" }}>
                  <img
                    src={el.img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Col>
              <Col xs={5} md={5}>
                <p className="fw-medium">{el.title}</p>
              </Col>
              <Col xs={1}>
                <p>{el.qunatity}</p>
              </Col>
              <Col xs={3}>
                <p className="fw-medium">
                  {(el.price * (el.qunatity ?? 1)).toFixed(2)} EGP
                </p>
              </Col>
            </Row>
          );
        })}
      </Modal.Body>
    </Modal>
  );
};

export default ListOrderModal;
