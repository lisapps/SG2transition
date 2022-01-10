import React from "react";

const C_ProductCardLite = ({ svg, products, classes }) => {
  let mySvg = svg
    ? svg
    : '<svg width="300px" height="100px" viewBox="0 0 300 100"><rect x="50px" y="25px" width="200px" height="50px" style="fill: transparent; stroke-width: 2; stroke: rgb(255,255,255)"></rect></svg>';
  let myProducts = products ? products : [{ name: "Product Name", link: "" }];
  let cClasses = classes ? classes : "";

  return (
    <div className={`c-productCardLite&attributes ` + cClasses}>
      <a className="c-productCardLite__img" href={products[0]["link"]} title={products[0]["name"]}>
        {mySvg}
      </a>
      <div className="c-productCardLite__links">
        {myProducts.map((product) => (
          <a href={product.link} key={product.name}>
            {product.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default C_ProductCardLite;
