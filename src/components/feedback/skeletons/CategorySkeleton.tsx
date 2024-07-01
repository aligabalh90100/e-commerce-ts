import ContentLoader from "react-content-loader";
import { Row, Col } from "react-bootstrap";
const CategorySkeleton = () => {
  const renderSkeleton = Array(4)
    .fill(0)
    .map((_, index) => {
      return (
        <Col
          key={index}
          xs={6}
          md={3}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <ContentLoader
            speed={2}
            width={180}
            height={209}
            viewBox="0 0 180 209"
            backgroundColor="#e6e6e6"
            foregroundColor="#f2f2f2"
          >
            <circle cx="90" cy="90" r="90" />
            <rect x="36" y="188" rx="3" ry="3" width="100" height="7" />
          </ContentLoader>
        </Col>
      );
    });
  return <Row>{renderSkeleton}</Row>;
};

export default CategorySkeleton;
