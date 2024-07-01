import { Container, Row } from "react-bootstrap";
import Product from "../components/ecommerce/product/Product";
import Loading from "../components/feedback/Loading/Loading";
import GridList from "../components/common/GridList/GridList";
import Heading from "../components/common/Heading/Heading";
import useProducts from "../hooks/useProducts";

const Products = () => {
  const { error, fullProductInfo, loading, prefix } = useProducts();
  // const productList =
  //   record.length > 0
  //     ? record.map((record) => {
  //         return (
  //           <Col
  //             key={record.id}
  //             xs={6}
  //             md={3}
  //             className="d-flex justify-content-center mb-5 mt-2"
  //           >
  //             <Product {...record} />
  //           </Col>
  //         );
  //       })
  //     : "There are no categories";
  return (
    <Container>
      <Heading title={`${prefix as string} Products`} />
      <Loading loading={loading} error={error} type="product">
        <Row>
          <GridList
            Component={Product}
            record={fullProductInfo}
            fallbackText="There are no Products"
          />
        </Row>
      </Loading>
    </Container>
  );
};
export default Products;
