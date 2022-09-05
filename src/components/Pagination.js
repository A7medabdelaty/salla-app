import Pagination from "react-bootstrap/Pagination";

import React from "react";

export default function PaginationComponent() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="d-flex justify-content-center">
      <Pagination>{items}</Pagination>
    </div>
  );
}
