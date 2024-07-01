import Heading from "../components/common/Heading/Heading";
import Loading from "../components/feedback/Loading/Loading";
import { Row } from "react-bootstrap";
import GridList from "../components/common/GridList/GridList";
import Product from "../components/ecommerce/product/Product";
import useWishlist from "../hooks/useWishlist";

const Wishlist = () => {
  const { error, loading, records } = useWishlist();

  return (
    <div>
      <Heading title="Wishlist" />
      <Loading loading={loading} error={error} type="product">
        <Row>
          <GridList
            Component={Product}
            record={records}
            fallbackText="Your wishlist is empty"
          />
        </Row>
      </Loading>
    </div>
  );
};

export default Wishlist;
