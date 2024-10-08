import React from "react";

const Pagination = (props) => {
  let { pageNum, onNext, onPrev } = props;

  return (
    <div className="flex justify-center my-4">
      <div
        className="border-2 p-2 border-r-0  rounded-l-xl border-blue-400  cursor-pointer"
        onClick={() => {
          onPrev(pageNum - 1);
        }}
      >
        Previous
      </div>

      <div className="border-2 p-2 border-r-0   border-blue-400">{pageNum}</div>

      <div
        className="border-2 p-2   rounded-r-xl border-blue-400   cursor-pointer"
        onClick={() => {
          onNext(pageNum + 1);
        }}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
