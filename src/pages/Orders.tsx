import Heading from "../components/common/Heading/Heading";
import { Button, Table } from "react-bootstrap";
import ListOrderModal from "../components/common/ListOrderModal";
import useOrder from "../hooks/useOrder";

const Orders = () => {
  const { orderList, viewOrderDetails, selectedProduct } = useOrder();
  return (
    <>
      <Heading title="My Orders" />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>O.N</th>
            <th>Items</th>
            <th style={{ width: "12%" }}> Price</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map((order) => {
            return (
              <tr key={order.id}>
                <td className="fw-medium">{order.id}</td>
                <td>
                  <span className="d-flex justify-content-between fw-medium">
                    {`${order.items.length} item${
                      order.items.length > 1 ? "s" : ""
                    }`}

                    <span>
                      <Button
                        onClick={() => viewOrderDetails(order.id)}
                        variant="secondary"
                        size="sm"
                      >
                        Details
                      </Button>
                    </span>
                  </span>
                </td>
                <td className="fw-medium">{order.subTotal.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ListOrderModal selectedProduct={selectedProduct} />
    </>
  );
};

export default Orders;
