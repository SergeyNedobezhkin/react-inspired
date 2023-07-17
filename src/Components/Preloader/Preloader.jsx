import React from "react";
import { Triangle } from "react-loader-spinner";
const style = {
  display: "flex",
  justifyContent: "center",
  padding: "100px 0",
};

function Preloader() {
  return (
    <div style={style}>
      <Triangle
        height={130}
        width={130}
        color="#8a8a8a"
        // ariaLabel="triangle-loading"
        // wrapperStyle={{}}
        // wrapperClassName=""
        // visible={true}
      />
    </div>
  );
}

export default Preloader;
