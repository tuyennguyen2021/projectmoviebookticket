import React from "react";
import Swal from "sweetalert2";

function TrailerView(trailer) {
  return (
    <>
      {Swal.fire({
        html: `<iframe allowfullscreen=${true} width=100% height=${600} src=${trailer} iframeborder=${0}></iframe>`,
        width: "1000px",
        background: "black",
      })}
    </>
  );
}

export default TrailerView;
