import { memo } from "react";

const Heading = memo(({ title }: { title: string }) => {
  return (
    <h2
      className="mb-3"
      style={{ fontSize: "26px", textTransform: "capitalize" }}
    >
      {title}
    </h2>
  );
});

export default Heading;
// `${(<span style={{ textTransform: "uppercase" }}>{prefix}</span>)} Products`;
