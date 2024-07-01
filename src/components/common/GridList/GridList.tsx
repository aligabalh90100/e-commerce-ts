import { Col } from "react-bootstrap";

import { ReactNode } from "react";
import LottiesHandler from "../../feedback/LottieHandler/LottiesHandler";

type TGrid<T> = {
  record: T[];
  Component: (record: T) => ReactNode;
  fallbackText: string;
};
type HasId = { id?: number };
const GridList = <T extends HasId>({
  record,
  Component,
  fallbackText,
}: TGrid<T>) => {
  return (
    <>
      {record.length > 0 ? (
        record.map((record) => {
          return (
            <Col
              key={record.id}
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Component {...record} />
            </Col>
          );
        })
      ) : (
        <LottiesHandler message={fallbackText} type="empty" />
      )}
    </>
  );
};

export default GridList;
