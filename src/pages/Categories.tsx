import { Container, Row } from "react-bootstrap";
import Category from "../components/ecommerce/category/Category";
import Loading from "../components/feedback/Loading/Loading";
import GridList from "../components/common/GridList/GridList";
import Heading from "../components/common/Heading/Heading";
import useCategories from "../hooks/useCategories";

const Categories = () => {
  const { error, loading, record } = useCategories();

  return (
    <Container>
      <Heading title="Categoris" />
      <Loading loading={loading} error={error} type="category">
        <Row>
          <GridList
            record={record}
            Component={Category}
            fallbackText="There are no categories"
          />
        </Row>
      </Loading>
    </Container>
  );
};

export default Categories;
