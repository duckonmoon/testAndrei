import React from "react";

const ratingStar = (p) => (
    <img src={p.full === true ? "https://storage.cloud.google.com/cursove/icons/full_star.png" : "https://storage.cloud.google.com/cursove/icons/empty_star.png"}
    style={{width: "10px"}} alt="star" onClick={() => p.onRate(p.index)}/>
);

export default ratingStar;